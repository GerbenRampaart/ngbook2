/*
 * Angular
 */
import {bind, Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {
  ROUTER_DIRECTIVES,
  ROUTER_BINDINGS,
  Router,
  RouteConfig,
} from '@angular/router-deprecated';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';

/*
 * Components
 */
import {HomeComponent} from 'components/HomeComponent';
import {ProductsComponent} from 'components/ProductsComponent';

/*
 * Webpack
 */
require('css/styles.scss');

@Component({
  selector: 'router-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
  <div class="page-header">
    <div class="container">
      <h1>Router Sample</h1>
      <div class="navLinks">
        <a [routerLink]="['Home']">Home</a>
        <a [routerLink]="['Products']">Products</a>
      </div>
    </div>
  </div>

  <div id="content">
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
@RouteConfig([
  { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/products/...', name: 'Products', component: ProductsComponent },
])
class RoutesDemoApp {
  constructor(public router: Router) {
  }
}

bootstrap(RoutesDemoApp, [
  ROUTER_BINDINGS,
  bind(LocationStrategy).toClass(HashLocationStrategy)
]);
