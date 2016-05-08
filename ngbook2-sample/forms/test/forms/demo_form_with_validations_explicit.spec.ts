import {
  it,
  describe,

  expect,

  inject,
  async,
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

import { DemoFormWithValidationsExplicit } from '../../app/ts/forms/demo_form_with_validations_explicit';

describe('DemoFormWithValidationsExplicit', () => {
  var el, input, form;

  beforeEachProviders(() => { return [FormBuilder]; });

  function createComponent(tcb: TestComponentBuilder): Promise<ComponentFixture<any>> {
    return tcb.createAsync(DemoFormWithValidationsExplicit).then((fixture) => {
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

      let msgs = el.querySelectorAll('.ui.error.message');
      expect(msgs[0]).toHaveText('SKU is invalid');
      expect(msgs[1]).toHaveText('SKU is required');
    });
  })));

  it('displays no errors when sku has a value', async(inject([TestComponentBuilder], (tcb) => {
    return createComponent(tcb).then((fixture) => {
      input.value = 'ABC';
      dispatchEvent(input, 'input');
      fixture.detectChanges();

      let msgs = el.querySelectorAll('.ui.error.message');
      expect(msgs.length).toEqual(0);
    });
  })));
});
