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
            testing_1.describe('MoreHTTPRequests (after)', function () {
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
                    function search(term, response, callback) {
                        return testing_1.inject([YouTubeSearchComponent_1.YouTubeService, testing_2.MockBackend], testing_1.fakeAsync(function (service, backend) {
                            var req;
                            var res;
                            backend.connections.subscribe(function (c) {
                                req = c.request;
                                c.mockRespond(new http_1.Response({ body: response }));
                            });
                            service.search(term).subscribe(function (_res) {
                                res = _res;
                            });
                            testing_1.tick();
                            callback(req, res);
                        }));
                    }
                    // reads the YouTube response fixture
                    var response = readJSON('test/fixture/youtube-response.json');
                    testing_1.it('parses YouTube video id', search('hey', response, function (req, res) {
                        var video = res[0];
                        testing_1.expect(video.id).toEqual('VIDEO_ID');
                    }));
                    testing_1.it('parses YouTube video title', search('hey', response, function (req, res) {
                        var video = res[0];
                        testing_1.expect(video.title).toEqual('TITLE');
                    }));
                    testing_1.it('parses YouTube video description', search('hey', response, function (req, res) {
                        var video = res[0];
                        testing_1.expect(video.description).toEqual('DESCRIPTION');
                    }));
                    testing_1.it('parses YouTube video thumbnail', search('hey', response, function (req, res) {
                        var video = res[0];
                        testing_1.expect(video.description).toEqual('DESCRIPTION');
                    }));
                    testing_1.it('sends the query', search('term', response, function (req, res) {
                        testing_1.expect(req.url).toContain('q=term');
                    }));
                    testing_1.it('sends the API key', search('term', response, function (req, res) {
                        testing_1.expect(req.url).toContain('key=YOUTUBE_API_KEY');
                    }));
                    testing_1.it('uses the provided YouTube URL', search('term', response, function (req, res) {
                        testing_1.expect(req.url).toMatch(/^YOUTUBE_API_URL\?/);
                    }));
                });
            });
        }
    }
});
//# sourceMappingURL=YouTubeSearchComponentAfter.spec.js.map