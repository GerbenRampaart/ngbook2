/*
 * Angular
 */

import {provide, Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  RouteConfig,
} from '@angular/router-deprecated';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';

/*
 * Components
 */
import {HomeComponent} from 'components/HomeComponent';
import {AboutComponent} from 'components/AboutComponent';
import {ContactComponent} from 'components/ContactComponent';

/*
 * Webpack
 */
require('css/styles.scss');

@Component({
  selector: 'router-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
  <div>
    <nav>
      <a>Navigation:</a>
      <ul>
        <li><a [routerLink]="['/Home']">Home</a></li>
        <li><a [routerLink]="['/About']">About</a></li>
        <li><a [routerLink]="['/Contact']">Contact us</a></li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  </div>
  `
})
@RouteConfig([
  { path: '/', name: 'root', redirectTo: ['/Home'] },
  { path: '/home', name: 'Home', component: HomeComponent },
  { path: '/about', name: 'About', component: AboutComponent },
  { path: '/contact', name: 'Contact', component: ContactComponent },
  { path: '/contactus', name: 'ContactUs', redirectTo: ['/Contact'] },
])
class RoutesDemoApp {
}

bootstrap(RoutesDemoApp, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
