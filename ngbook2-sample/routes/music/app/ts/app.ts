/*
 * Angular
 */
import {
  Component,
  provide
} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {

  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  ROUTER_PRIMARY_COMPONENT,

  Router,
  RouteConfig,
} from '@angular/router-deprecated';
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';

/*
 * Components
 */
import {SearchComponent} from 'components/SearchComponent';
import {ArtistComponent} from 'components/ArtistComponent';
import {TrackComponent} from 'components/TrackComponent';
import {AlbumComponent} from 'components/AlbumComponent';

/*
 * Services
 */
import {SPOTIFY_PROVIDERS} from 'services/SpotifyService';

/*
 * Webpack
 */
require('css/styles.scss');

@Component({
  selector: 'router-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
  <router-outlet></router-outlet>
  `
})
@RouteConfig([
  { path: '/', name: 'root', redirectTo: ['Search'] },
  { path: '/search', name: 'Search', component: SearchComponent },
  { path: '/artists/:id', name: 'Artists', component: ArtistComponent },
  { path: '/tracks/:id', name: 'Tracks', component: TrackComponent },
  { path: '/albums/:id', name: 'Albums', component: AlbumComponent },
])
class RoutesDemoApp {
  query: string;

  constructor(public router: Router) {
  }
}

bootstrap(RoutesDemoApp, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  SPOTIFY_PROVIDERS,
  provide(ROUTER_PRIMARY_COMPONENT, {useValue: RoutesDemoApp}),
  provide(APP_BASE_HREF,            {useValue: '/'}),
  provide(LocationStrategy,         {useClass: HashLocationStrategy})
]).catch((err: any) => console.error(err));
