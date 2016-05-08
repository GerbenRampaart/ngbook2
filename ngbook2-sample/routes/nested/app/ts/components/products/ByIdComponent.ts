/*
 * Angular
 */
import {Component} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';

@Component({
  selector: 'byid',
  template: `You selected product: {{ id }}`
})
export class ByIdComponent {
  id: string;

  constructor(public routeParams: RouteParams) {
    this.id = routeParams.get('id');
  }
}
