System.register(['angular2/core', 'angular2/testing', 'angular2/http/testing', 'angular2/http', '../app/ts/components/YouTubeSearchComponent'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, testing_1, testing_2, http_1, YouTubeSearchComponent_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (YouTubeSearchComponent_1_1) {
                YouTubeSearchComponent_1 = YouTubeSearchComponent_1_1;
            }],
        execute: function() {
            testing_1.describe('MoreHTTPRequests (before)', function () {
                testing_1.beforeEachProviders(function () {
                    return [
                        YouTubeSearchComponent_1.YouTubeService,
                        http_1.BaseRequestOptions,
                        testing_2.MockBackend,
                        core_1.provide(YouTubeSearchComponent_1.YOUTUBE_API_KEY, { useValue: 'YOUTUBE_API_KEY' }),
                        core_1.provide(YouTubeSearchComponent_1.YOUTUBE_API_URL, { useValue: 'YOUTUBE_API_URL' }),
                        core_1.provide(http_1.Http, { useFactory: function (backend, defaultOptions) {
                                return new http_1.Http(backend, defaultOptions);
                            }, deps: [testing_2.MockBackend, http_1.BaseRequestOptions] }),
                    ];
                });
                testing_1.describe('search', function () {
                    testing_1.it('parses YouTube response', testing_1.inject([YouTubeSearchComponent_1.YouTubeService, testing_2.MockBackend], testing_1.fakeAsync(function (service, backend) {
                        var res;
                        backend.connections.subscribe(function (c) {
                            c.mockRespond(new http_1.Response({
                                body: "\n            {\n              \"items\": [\n                {\n                  \"id\": { \"videoId\": \"VIDEO_ID\" },\n                  \"snippet\": {\n                    \"title\": \"TITLE\",\n                    \"description\": \"DESCRIPTION\",\n                    \"thumbnails\": {\n                      \"high\": { \"url\": \"THUMBNAIL_URL\" }\n                    }\n                  }\n                }\n              ]\n            }\n            "
                            }));
                        });
                        service.search('hey').subscribe(function (_res) {
                            res = _res;
                        });
                        testing_1.tick();
                        var video = res[0];
                        testing_1.expect(video.id).toEqual('VIDEO_ID');
                        testing_1.expect(video.title).toEqual('TITLE');
                        testing_1.expect(video.description).toEqual('DESCRIPTION');
                        testing_1.expect(video.thumbnailUrl).toEqual('THUMBNAIL_URL');
                    })));
                });
            });
        }
    }
});
//# sourceMappingURL=YouTubeSearchComponentBefore.spec.js.map