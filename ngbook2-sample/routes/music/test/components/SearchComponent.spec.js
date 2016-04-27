System.register(['angular2/testing', "angular2/router", '../mocks/routes', '../mocks/spotify', '../../app/ts/components/SearchComponent'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, router_1, routes_1, spotify_1, SearchComponent_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (routes_1_1) {
                routes_1 = routes_1_1;
            },
            function (spotify_1_1) {
                spotify_1 = spotify_1_1;
            },
            function (SearchComponent_1_1) {
                SearchComponent_1 = SearchComponent_1_1;
            }],
        execute: function() {
            testing_1.describe('SearchComponent', function () {
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
                    testing_1.it("doesn't search for a track without a query", testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                        var search = mockSpotifyService.spy('searchTrack');
                        return tcb.createAsync(SearchComponent_1.SearchComponent).then(function (fixture) {
                            fixture.detectChanges();
                            testing_1.expect(search).not.toHaveBeenCalled();
                        });
                    }));
                    testing_1.it('searches for a track if a query is provided', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                        var search = mockSpotifyService.spy('searchTrack');
                        mockRouterProvider.setRouteParam('query', 'QUERY');
                        return tcb.createAsync(SearchComponent_1.SearchComponent).then(function (rootTC) {
                            rootTC.detectChanges();
                            testing_1.expect(search).toHaveBeenCalled();
                        });
                    }));
                });
                testing_1.describe('submit', function () {
                    testing_1.describe('testing the method', function () {
                        testing_1.it('navigates to the Search route', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                            var navigate = mockRouterProvider.mockRouter.spy('navigate');
                            return tcb.createAsync(SearchComponent_1.SearchComponent).then(function (fixture) {
                                var searchComponent = fixture.debugElement.componentInstance;
                                searchComponent.submit("QUERY");
                                testing_1.expect(navigate).toHaveBeenCalledWith(["/Search", { query: "QUERY" }]);
                            });
                        }));
                        testing_1.it('performs the search', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                            return tcb.createAsync(SearchComponent_1.SearchComponent).then(function (fixture) {
                                var searchComponent = fixture.debugElement.componentInstance;
                                var search = spyOn(searchComponent, 'search');
                                searchComponent.submit("QUERY");
                                testing_1.expect(search).toHaveBeenCalled();
                            });
                        }));
                    });
                    testing_1.describe('testing the interaction', function () {
                        testing_1.it('navigates to the Search route', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                            var navigate = mockRouterProvider.mockRouter.spy('navigate');
                            return tcb.createAsync(SearchComponent_1.SearchComponent).then(function (fixture) {
                                var compiled = fixture.debugElement.nativeElement;
                                var input = compiled.querySelector('input');
                                var button = compiled.querySelector('button');
                                fixture.detectChanges();
                                // sets the value of the search field to "QUERY"
                                // and clicks the search button
                                input.value = "QUERY";
                                button.click();
                                testing_1.expect(navigate).toHaveBeenCalledWith(["/Search", { query: "QUERY" }]);
                            });
                        }));
                    });
                });
                testing_1.describe('search', function () {
                    testing_1.it('searches when a query is present', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                        return tcb.createAsync(SearchComponent_1.SearchComponent).then(function (fixture) {
                            var searchComponent = fixture.debugElement.componentInstance;
                            mockRouterProvider.setRouteParam('query', 'QUERY');
                            searchComponent.search();
                            testing_1.expect(mockSpotifyService.searchTrackSpy).toHaveBeenCalledWith("QUERY");
                        });
                    }));
                    testing_1.it("doesn't search when a query is absent", testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                        return tcb.createAsync(SearchComponent_1.SearchComponent).then(function (fixture) {
                            var searchComponent = fixture.debugElement.componentInstance;
                            searchComponent.search();
                            testing_1.expect(mockSpotifyService.searchTrackSpy).not.toHaveBeenCalled();
                        });
                    }));
                });
                testing_1.describe('renderResults', function () {
                    testing_1.it('display a message when no results are found', testing_1.injectAsync([router_1.Router, testing_1.TestComponentBuilder], function (router, tcb) {
                        return tcb.createAsync(SearchComponent_1.SearchComponent).then(function (fixture) {
                            mockSpotifyService.setResponse({ tracks: { items: [] } });
                            mockRouterProvider.setRouteParam('query', 'QUERY');
                            var searchComponent = fixture.debugElement.componentInstance;
                            var compiled = fixture.debugElement.nativeElement;
                            var input = compiled.querySelector('input');
                            var button = compiled.querySelector('button');
                            fixture.detectChanges();
                            // sets the value of the search field to "QUERY"
                            // and clicks the search button
                            input.value = "QUERY";
                            button.click();
                            testing_1.expect(compiled.innerText)
                                .toContain("No tracks were found with the term 'QUERY'");
                        });
                    }));
                    testing_1.it('display results', testing_1.injectAsync([router_1.Router, testing_1.TestComponentBuilder], function (router, tcb) {
                        return tcb.createAsync(SearchComponent_1.SearchComponent).then(function (fixture) {
                            var searchComponent = fixture.debugElement.componentInstance;
                            var response = {
                                tracks: {
                                    items: [
                                        {
                                            id: 1,
                                            name: 'TRACK',
                                            album: { id: 2, name: 'ALBUM', images: [{ url: 'IMAGE_1' }] },
                                            artists: [{ id: 3, name: 'ARTIST' }]
                                        }
                                    ]
                                }
                            };
                            searchComponent.renderResults(response);
                            fixture.detectChanges();
                            // checks the album URL matches
                            var compiled = fixture.debugElement.nativeElement;
                            testing_1.expect(compiled.querySelector('img').src).toContain('IMAGE_1');
                            // checks the artist, track and album information
                            var links = compiled.querySelectorAll('a');
                            testing_1.expect(links.length).toEqual(3);
                            testing_1.expect(links[0].innerText).toEqual('ARTIST');
                            testing_1.expect(links[1].innerText).toEqual('TRACK');
                            testing_1.expect(links[2].innerText).toEqual('ALBUM');
                        });
                    }));
                });
            });
        }
    }
});
//# sourceMappingURL=SearchComponent.spec.js.map