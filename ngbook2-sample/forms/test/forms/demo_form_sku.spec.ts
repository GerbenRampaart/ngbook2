import {
  it,
  describe,

  expect,
  inject,

  fakeAsync,
  tick,



} from '@angular/core/testing';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing';
import { dispatchEvent } from '@angular/platform-browser/testing';
import { By } from '@angular/platform-browser/src/dom/debug/by';

import { DemoFormSku } from '../../app/ts/forms/demo_form_sku';

describe('DemoFormSku', () => {
  var _console;
  var fakeConsole;
  var el, input, form;

  beforeEach(() => {
    // declare a fake console to track all the logs
    fakeConsole = {};
    fakeConsole._logs = [];
    fakeConsole.log = (...theArgs) => fakeConsole._logs.push(theArgs.join(' '));

    // replace the real console with our fake version
    _console = window.console;
    (<any>window).console = fakeConsole;
  });

  // restores the real console
  afterAll(() => (<any>window).console = _console);

  function createComponent(tcb: TestComponentBuilder): Promise<ComponentFixture<any>> {
    return tcb.createAsync(DemoFormSku).then((fixture) => {
      el = fixture.debugElement.nativeElement;
      input = fixture.debugElement.query(By.css("input")).nativeElement;
      form = fixture.debugElement.query(By.css("form")).nativeElement;
      fixture.detectChanges();

      return fixture;
    });
  }

  it('logs the submitted value', inject([TestComponentBuilder],
    fakeAsync((tcb) => {
      createComponent(tcb).then((fixture) => {
        input.value = 'MY-SKU';
        dispatchEvent(input, 'input');
        fixture.detectChanges();
        tick();

        fixture.detectChanges();
        dispatchEvent(form, 'submit');
        tick();

        expect(fakeConsole._logs).toContain('you submitted value: [object Object]');
      });
    })
  ));
});
