/* tslint:disable:no-string-literal */
import { Component } from 'angular2/core';
import {
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Validators,
  AbstractControl,
  Control
} from 'angular2/common';

/**
 * Our custom validator
 *
 * A validator:
 * - Takes a `Control` as it's input and
 * - Returns a `StringMap<string, boolean>` where the key is "error code" and
 *   the value is `true` if it fails
 */
function skuValidator(control: Control): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}

@Component({
  selector: 'demo-form-with-custom-validations',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  template: `
  <div class="ui raised segment">
    <h2 class="ui header">Demo Form: with custom validations</h2>
    <form [ngFormModel]="myForm"
          (ngSubmit)="onSubmit(myForm.value)"
          class="ui form">

      <div class="field"
          [class.error]="!sku.valid && sku.touched">
        <label for="skuInput">SKU</label>
        <input type="text"
               id="skuInput"
               placeholder="SKU"
               [ngFormControl]="sku">
         <div *ngIf="!sku.valid"
           class="ui error message">SKU is invalid</div>
         <div *ngIf="sku.hasError('required')"
           class="ui error message">SKU is required</div>
         <div *ngIf="sku.hasError('invalidSku')"
           class="ui error message">SKU must begin with <tt>123</tt></div>
      </div>

      <div *ngIf="!myForm.valid"
        class="ui error message">Form is invalid</div>
      <button type="submit" class="ui button">Submit</button>
    </form>
  </div>
  `
})
export class DemoFormWithCustomValidations {
  myForm: ControlGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':  ['', Validators.compose([
        Validators.required, skuValidator])]
    });

    this.sku = this.myForm.controls['sku'];
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
