import {
  it,
  describe,

  expect,

  inject,
  async,
  beforeEachProviders
} from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { FormBuilder } from '@angular/common';

import { DemoFormSkuBuilder } from '../../app/ts/forms/demo_form_sku_with_builder';

beforeEachProviders(() => {
  return [FormBuilder];
});

describe('DemoFormSkuBuilder', () => {
  it('initializes sku', async(inject([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(DemoFormSkuBuilder).then((fixture) => {
      let comp = fixture.debugElement.componentInstance;
      let el = fixture.debugElement.nativeElement;

      fixture.detectChanges();

      // checks SKU on myForm
      expect(comp.myForm.controls.sku.value).toEqual('ABC123');

      // checks SKU on the input element
      expect(el.querySelector('form input').value).toEqual('ABC123');
    });
  })));
});
