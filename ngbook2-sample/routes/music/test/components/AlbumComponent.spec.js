System.register(['angular2/testing', '../mocks/routes', '../mocks/spotify', '../../app/ts/components/AlbumComponent'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, routes_1, spotify_1, AlbumComponent_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (routes_1_1) {
                routes_1 = routes_1_1;
            },
            function (spotify_1_1) {
                spotify_1 = spotify_1_1;
            },
            function (AlbumComponent_1_1) {
                AlbumComponent_1 = AlbumComponent_1_1;
            }],
        execute: function() {
            testing_1.describe('AlbumComponent', function () {
                var mockSpotifyService;
                var mockRouterProvider;
                testing_1.beforeEachProviders(function () {
                    mockSpotifyService = new spotify_1.MockSpotifyService();
                    mockRouterProvider = new routes_1.MockRouterProvider();
                    return [
                        mockSpotifyService.getProviders(), mockRouterProvider.getProviders()
                    ];
                });
                testing_1.describe('initialization', function () {
                    testing_1.it('retrieves the album', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                        // makes the RouteParams return 1 as the album id
                        mockRouterProvider.setRouteParam('id', 1);
                        return tcb.createAsync(AlbumComponent_1.AlbumComponent).then(function (fixture) {
                            fixture.detectChanges();
                            testing_1.expect(mockSpotifyService.getAlbumSpy).toHaveBeenCalledWith(1);
                        });
                    }));
                });
                testing_1.describe('back', function () {
                    testing_1.it('returns to the previous location', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                        return tcb.createAsync(AlbumComponent_1.AlbumComponent).then(function (fixture) {
                            var albumComponent = fixture.debugElement.componentInstance;
                            var backSpy = mockRouterProvider.mockLocationStrategy.spy('back');
                            albumComponent.back();
                            testing_1.expect(backSpy).toHaveBeenCalled();
                        });
                    }));
                });
                testing_1.describe('renderAlbum', function () {
                    testing_1.it('renders album info', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                        return tcb.createAsync(AlbumComponent_1.AlbumComponent).then(function (fixture) {
                            var albumComponent = fixture.debugElement.componentInstance;
                            var album = {
                                name: 'ALBUM NAME',
                                artists: [{ name: 'ARTIST NAME' }],
                                images: [null, { url: 'IMAGE_2' }],
                                tracks: {
                                    items: [{ id: 1, name: 'TRACK 1' }, { id: 2, name: 'TRACK 2' }]
                                }
                            };
                            mockSpotifyService.setResponse(album);
                            fixture.detectChanges();
                            var compiled = fixture.debugElement.nativeElement;
                            testing_1.expect(compiled.querySelector('h1')).toHaveText('ALBUM NAME');
                            testing_1.expect(compiled.querySelector('h2')).toHaveText('ARTIST NAME');
                            var links = compiled.querySelectorAll('a');
                            testing_1.expect(links[0].innerText).toContain('TRACK 1');
                            testing_1.expect(links[1].innerText).toContain('TRACK 2');
                        });
                    }));
                });
            });
        }
    }
});
//# sourceMappingURL=AlbumComponent.spec.js.map