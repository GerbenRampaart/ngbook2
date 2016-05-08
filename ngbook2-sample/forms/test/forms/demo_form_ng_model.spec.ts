import {
  it,
  describe,

  expect,

  async,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { FormBuilder } from '@angular/common';

import { DemoFormNgModel } from '../../app/ts/forms/demo_form_ng_model';

beforeEachProviders(() => { return [FormBuilder]; });

describe('DemoFormNgModel', () => {
  it('requires product name', async(inject([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(DemoFormNgModel).then((fixture) => {
      let comp = fixture.debugElement.componentInstance;
      let el = fixture.debugElement.nativeElement;

      // error message is displayed when product name is empty
      comp.productName = '';
      fixture.detectChanges();
      expect(el.querySelector('.ui.error.message')).toHaveText('Form is invalid');

      // error message is not present when product name has a value
      comp.productName = 'something';
      fixture.detectChanges();
      expect(el.querySelector('.ui.error.message')).toBeNull();
    });
  })));
});
