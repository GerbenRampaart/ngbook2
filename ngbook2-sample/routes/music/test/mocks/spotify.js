System.register(['angular2/core', 'angular2/testing_internal', '../../app/ts/services/SpotifyService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1, testing_internal_1, SpotifyService_1;
    var MockSpotifyService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (testing_internal_1_1) {
                testing_internal_1 = testing_internal_1_1;
            },
            function (SpotifyService_1_1) {
                SpotifyService_1 = SpotifyService_1_1;
            }],
        execute: function() {
            MockSpotifyService = (function (_super) {
                __extends(MockSpotifyService, _super);
                function MockSpotifyService() {
                    _super.call(this, SpotifyService_1.SpotifyService);
                    this.fakeResponse = null;
                    this.getAlbumSpy = this.spy('getAlbum').andReturn(this);
                    this.getArtistSpy = this.spy('getArtist').andReturn(this);
                    this.getTrackSpy = this.spy('getTrack').andReturn(this);
                    this.searchTrackSpy = this.spy('searchTrack').andReturn(this);
                }
                MockSpotifyService.prototype.subscribe = function (callback) {
                    callback(this.fakeResponse);
                };
                MockSpotifyService.prototype.setResponse = function (json) {
                    this.fakeResponse = json;
                };
                MockSpotifyService.prototype.getProviders = function () {
                    return [core_1.provide(SpotifyService_1.SpotifyService, { useValue: this })];
                };
                return MockSpotifyService;
            }(testing_internal_1.SpyObject));
            exports_1("MockSpotifyService", MockSpotifyService);
        }
    }
});
//# sourceMappingURL=spotify.js.map