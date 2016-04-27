System.register(['angular2/core', 'angular2/platform/browser', 'angular2/http', 'angular2/router', 'components/SearchComponent', 'components/ArtistComponent', 'components/TrackComponent', 'components/AlbumComponent', 'services/SpotifyService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, http_1, router_1, SearchComponent_1, ArtistComponent_1, TrackComponent_1, AlbumComponent_1, SpotifyService_1;
    var RoutesDemoApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (SearchComponent_1_1) {
                SearchComponent_1 = SearchComponent_1_1;
            },
            function (ArtistComponent_1_1) {
                ArtistComponent_1 = ArtistComponent_1_1;
            },
            function (TrackComponent_1_1) {
                TrackComponent_1 = TrackComponent_1_1;
            },
            function (AlbumComponent_1_1) {
                AlbumComponent_1 = AlbumComponent_1_1;
            },
            function (SpotifyService_1_1) {
                SpotifyService_1 = SpotifyService_1_1;
            }],
        execute: function() {
            /*
             * Webpack
             */
            require('css/styles.scss');
            RoutesDemoApp = (function () {
                function RoutesDemoApp(router) {
                    this.router = router;
                }
                RoutesDemoApp = __decorate([
                    core_1.Component({
                        selector: 'router-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n  <router-outlet></router-outlet>\n  "
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'root', redirectTo: ['Search'] },
                        { path: '/search', name: 'Search', component: SearchComponent_1.SearchComponent },
                        { path: '/artists/:id', name: 'Artists', component: ArtistComponent_1.ArtistComponent },
                        { path: '/tracks/:id', name: 'Tracks', component: TrackComponent_1.TrackComponent },
                        { path: '/albums/:id', name: 'Albums', component: AlbumComponent_1.AlbumComponent },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], RoutesDemoApp);
                return RoutesDemoApp;
            }());
            browser_1.bootstrap(RoutesDemoApp, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                SpotifyService_1.SPOTIFY_PROVIDERS,
                core_1.provide(router_1.ROUTER_PRIMARY_COMPONENT, { useValue: RoutesDemoApp }),
                core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' }),
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]).catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=app.js.map