System.register(['angular2/testing', "../mocks/routes", "../mocks/spotify", "../../app/ts/components/ArtistComponent"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, routes_1, spotify_1, ArtistComponent_1;
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
            function (ArtistComponent_1_1) {
                ArtistComponent_1 = ArtistComponent_1_1;
            }],
        execute: function() {
            testing_1.describe("ArtistComponent", function () {
                var mockSpotifyService;
                var mockRouterProvider;
                testing_1.beforeEachProviders(function () {
                    mockSpotifyService = new spotify_1.MockSpotifyService();
                    mockRouterProvider = new routes_1.MockRouterProvider();
                    return [
                        mockSpotifyService.getProviders(), mockRouterProvider.getProviders()
                    ];
                });
                testing_1.describe("initialization", function () {
                    testing_1.it("retrieves the artist", testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                        // makes the RouteParams return 2 as the artist id
                        mockRouterProvider.setRouteParam('id', 2);
                        return tcb.createAsync(ArtistComponent_1.ArtistComponent).then(function (fixture) {
                            fixture.detectChanges();
                            testing_1.expect(mockSpotifyService.getArtistSpy).toHaveBeenCalledWith(2);
                        });
                    }));
                });
                testing_1.describe('back', function () {
                    testing_1.it('returns to the previous location', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                        return tcb.createAsync(ArtistComponent_1.ArtistComponent).then(function (fixture) {
                            var artistComponent = fixture.debugElement.componentInstance;
                            var backSpy = mockRouterProvider.mockLocationStrategy.spy('back');
                            artistComponent.back();
                            testing_1.expect(backSpy).toHaveBeenCalled();
                        });
                    }));
                });
                testing_1.describe('renderArtist', function () {
                    testing_1.it('renders artist info', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                        return tcb.createAsync(ArtistComponent_1.ArtistComponent).then(function (fixture) {
                            var artistComponent = fixture.debugElement.componentInstance;
                            var artist = { name: 'ARTIST NAME', images: [{ url: 'IMAGE_1' }] };
                            mockSpotifyService.setResponse(artist);
                            fixture.detectChanges();
                            var compiled = fixture.debugElement.nativeElement;
                            testing_1.expect(compiled.querySelector('h1')).toHaveText('ARTIST NAME');
                            testing_1.expect(compiled.querySelector('img').src).toContain('IMAGE_1');
                        });
                    }));
                });
            });
        }
    }
});
//# sourceMappingURL=ArtistComponent.spec.js.map