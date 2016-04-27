System.register(['angular2/testing', 'angular2/http/testing', 'angular2/core', 'angular2/http', '../../app/ts/services/SpotifyService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, testing_2, core_1, http_1, SpotifyService_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (SpotifyService_1_1) {
                SpotifyService_1 = SpotifyService_1_1;
            }],
        execute: function() {
            testing_1.describe('SpotifyService', function () {
                testing_1.beforeEachProviders(function () {
                    return [
                        http_1.BaseRequestOptions,
                        testing_2.MockBackend,
                        SpotifyService_1.SpotifyService,
                        core_1.provide(http_1.Http, { useFactory: function (backend, defaultOptions) {
                                return new http_1.Http(backend, defaultOptions);
                            }, deps: [testing_2.MockBackend, http_1.BaseRequestOptions] }),
                    ];
                });
                // sets up an expectation that the correct URL will being requested
                function expectURL(backend, url) {
                    backend.connections.subscribe(function (c) {
                        testing_1.expect(c.request.url).toBe(url);
                        var response = new http_1.ResponseOptions({ body: '{"name": "felipe"}' });
                        c.mockRespond(new http_1.Response(response));
                    });
                }
                testing_1.describe('getTrack', function () {
                    testing_1.it('retrieves using the track ID', testing_1.inject([SpotifyService_1.SpotifyService, testing_2.MockBackend], testing_1.fakeAsync(function (svc, backend) {
                        var res;
                        expectURL(backend, 'https://api.spotify.com/v1/tracks/TRACK_ID');
                        svc.getTrack('TRACK_ID').subscribe(function (_res) {
                            res = _res;
                        });
                        testing_1.tick();
                        testing_1.expect(res.name).toBe('felipe');
                    })));
                });
                testing_1.describe('getArtist', function () {
                    testing_1.it('retrieves using the artist ID', testing_1.inject([SpotifyService_1.SpotifyService, testing_2.MockBackend], testing_1.fakeAsync(function (svc, backend) {
                        var res;
                        expectURL(backend, 'https://api.spotify.com/v1/artists/ARTIST_ID');
                        svc.getArtist('ARTIST_ID').subscribe(function (_res) {
                            res = _res;
                        });
                        testing_1.tick();
                        testing_1.expect(res.name).toBe('felipe');
                    })));
                });
                testing_1.describe('getAlbum', function () {
                    testing_1.it('retrieves using the album ID', testing_1.inject([SpotifyService_1.SpotifyService, testing_2.MockBackend], testing_1.fakeAsync(function (svc, backend) {
                        var res;
                        expectURL(backend, 'https://api.spotify.com/v1/albums/ALBUM_ID');
                        svc.getAlbum('ALBUM_ID').subscribe(function (_res) {
                            res = _res;
                        });
                        testing_1.tick();
                        testing_1.expect(res.name).toBe('felipe');
                    })));
                });
                testing_1.describe('searchTrack', function () {
                    testing_1.it('searches type and term', testing_1.inject([SpotifyService_1.SpotifyService, testing_2.MockBackend], testing_1.fakeAsync(function (svc, backend) {
                        var res;
                        expectURL(backend, 'https://api.spotify.com/v1/search?q=TERM&type=track');
                        svc.searchTrack("TERM").subscribe(function (_res) {
                            res = _res;
                        });
                        testing_1.tick();
                        testing_1.expect(res.name).toBe('felipe');
                    })));
                });
            });
        }
    }
});
//# sourceMappingURL=SpotifyService.spec.js.map