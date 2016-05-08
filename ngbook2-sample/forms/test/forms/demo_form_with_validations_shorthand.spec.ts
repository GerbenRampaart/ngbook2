import {
  it,
  describe,

  expect,
  inject,
  async,
  fakeAsync,
  tick,

  beforeEachProviders,

} from '@angular/core/testing';
import {
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
} from '@angular/common';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing';
import { dispatchEvent } from '@angular/platform-browser/testing';
import { By } from '@angular/platform-browser/src/dom/debug/by';
import { FormBuilder } from '@angular/common';

import { DemoFormWithValidationsShorthand } from '../../app/ts/forms/demo_form_with_validations_shorthand';

describe('DemoFormWithValidationsShorthand', () => {
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

  beforeEachProviders(() => { return [FormBuilder]; });

  function createComponent(tcb: TestComponentBuilder): Promise<ComponentFixture<any>> {
    return tcb.createAsync(DemoFormWithValidationsShorthand).then((fixture) => {
      el = fixture.debugElement.nativeElement;
      input = fixture.debugElement.query(By.css("input")).nativeElement;
      form = fixture.debugElement.query(By.css("form")).nativeElement;
      fixture.detectChanges();

      return fixture;
    });
  }

  it('displays errors with no sku', async(inject([TestComponentBuilder], (tcb) => {
    return createComponent(tcb).then((fixture) => {
      input.value = '';
      dispatchEvent(input, 'input');
      fixture.detectChanges();

      // no value on sku field, all error messages are displayed
      let msgs = el.querySelectorAll('.ui.error.message');
      expect(msgs[0]).toHaveText('SKU is invalid');
      expect(msgs[1]).toHaveText('SKU is required');
    });
  })));

  it('displays no errors when sku has a value', async(inject([TestComponentBuilder], (tcb) => {
    return createComponent(tcb).then((fixture) => {
      input.value = 'XYZ';
      dispatchEvent(input, 'input');
      fixture.detectChanges();

      let msgs = el.querySelectorAll('.ui.error.message');
      expect(msgs.length).toEqual(0);
    });
  })));

  it('logs the correct form value to console', inject([TestComponentBuilder],
    fakeAsync((tcb) => {
      createComponent(tcb).then((fixture) => {
        input.value = 'XYZ';
        dispatchEvent(input, 'input');
        tick();

        fixture.detectChanges();
        dispatchEvent(form, 'submit');
        tick();

        expect(fakeConsole._logs).toContain('you submitted value: XYZ');
      });
    })
  ));

});
