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
    var ArtistComponent;
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
            ArtistComponent = (function () {
                function ArtistComponent(routeParams, spotify, locationStrategy) {
                    this.routeParams = routeParams;
                    this.spotify = spotify;
                    this.locationStrategy = locationStrategy;
                    this.id = routeParams.get('id');
                }
                ArtistComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.spotify
                        .getArtist(this.id)
                        .subscribe(function (res) { return _this.renderArtist(res); });
                };
                ArtistComponent.prototype.back = function () {
                    this.locationStrategy.back();
                };
                ArtistComponent.prototype.renderArtist = function (res) {
                    this.artist = res;
                };
                ArtistComponent = __decorate([
                    core_1.Component({
                        selector: 'artist',
                        directives: [common_1.CORE_DIRECTIVES],
                        template: "\n  <div *ngIf=\"artist\">\n    <h1>{{ artist.name }}</h1>\n\n    <p>\n      <img src=\"{{ artist.images[0].url }}\">\n    </p>\n\n    <p><a href (click)=\"back()\">Back</a></p>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, (typeof (_a = typeof SpotifyService_1.SpotifyService !== 'undefined' && SpotifyService_1.SpotifyService) === 'function' && _a) || Object, router_1.LocationStrategy])
                ], ArtistComponent);
                return ArtistComponent;
                var _a;
            }());
            exports_1("ArtistComponent", ArtistComponent);
        }
    }
});
//# sourceMappingURL=ArtistComponent.js.map