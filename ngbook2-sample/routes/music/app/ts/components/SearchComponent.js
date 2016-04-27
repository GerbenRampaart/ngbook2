/*
 * Angular
 */
System.register(['angular2/core', 'angular2/common', 'angular2/router', 'services/SpotifyService'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, SpotifyService_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (SpotifyService_1_1) {
                SpotifyService_1 = SpotifyService_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(spotify, router, routeParams) {
                    this.spotify = spotify;
                    this.router = router;
                    this.routeParams = routeParams;
                }
                SearchComponent.prototype.ngOnInit = function () {
                    this.search();
                };
                SearchComponent.prototype.submit = function (query) {
                    this.router.navigate(['/Search', { query: query }]);
                    this.search();
                };
                SearchComponent.prototype.search = function () {
                    var _this = this;
                    this.query = this.routeParams.get('query');
                    if (!this.query) {
                        return;
                    }
                    this.spotify
                        .searchTrack(this.query)
                        .subscribe(function (res) { return _this.renderResults(res); });
                };
                SearchComponent.prototype.renderResults = function (res) {
                    this.results = null;
                    if (res && res.tracks && res.tracks.items) {
                        this.results = res.tracks.items;
                    }
                };
                SearchComponent = __decorate([
                    core_1.Component({
                        selector: 'search',
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES],
                        template: "\n  <h1>Search</h1>\n\n  <p>\n    <input type=\"text\" #newquery\n      [value]=\"query\"\n      (keydown.enter)=\"submit(newquery.value)\">\n    <button (click)=\"submit(newquery.value)\">Search</button>\n  </p>\n\n  <div *ngIf=\"results\">\n    <div *ngIf=\"!results.length\">\n      No tracks were found with the term '{{ query }}'\n    </div>\n\n    <div *ngIf=\"results.length\">\n      <h1>Results</h1>\n\n      <div class=\"row\">\n        <div class=\"col-sm-6 col-md-4\" *ngFor=\"#t of results\">\n          <div class=\"thumbnail\">\n            <div class=\"content\">\n              <img src=\"{{ t.album.images[0].url }}\" class=\"img-responsive\">\n              <div class=\"caption\">\n                <h3>\n                  <a [routerLink]=\"['/Artists', {id: t.artists[0].id}]\">\n                    {{ t.artists[0].name }}\n                  </a>\n                </h3>\n                <br>\n                <p>\n                  <a [routerLink]=\"['/Tracks', {id: t.id}]\">\n                    {{ t.name }}\n                  </a>\n                </p>\n              </div>\n              <div class=\"attribution\">\n                <h4>\n                  <a [routerLink]=\"['/Albums', {id: t.album.id}]\">\n                    {{ t.album.name }}\n                  </a>\n                </h4>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof SpotifyService_1.SpotifyService !== 'undefined' && SpotifyService_1.SpotifyService) === 'function' && _a) || Object, router_1.Router, router_1.RouteParams])
                ], SearchComponent);
                return SearchComponent;
                var _a;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});
//# sourceMappingURL=SearchComponent.js.map