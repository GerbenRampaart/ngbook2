/*
 * Angular
 */
import {
  Component
} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

/*
 * Components
 */
import { SimpleHTTPComponent } from 'components/SimpleHTTPComponent';
import { MoreHTTPRequests } from 'components/MoreHTTPRequests';
import { YouTubeSearchComponent } from 'components/YouTubeSearchComponent';

/*
 * Injectables
 */
import { youTubeServiceInjectables } from 'components/YouTubeSearchComponent';

/*
 * Webpack
 */
require('css/styles.scss');

@Component({
  selector: 'http-app',
  directives: [
    SimpleHTTPComponent,
    MoreHTTPRequests,
    YouTubeSearchComponent
  ],
  template: `
  <div class="container">
    <simple-http></simple-http>
    <hr/>
    <more-http></more-http>
    <hr/>
    <youtube-search></youtube-search>
  </div>
  `
})
class HttpApp {
}

bootstrap(HttpApp, [
  HTTP_PROVIDERS,
  youTubeServiceInjectables
]);
