System.register(['angular2/core', 'angular2/testing', 'angular2/http/testing', 'angular2/http', '../app/ts/components/MoreHTTPRequests'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, testing_1, testing_2, http_1, MoreHTTPRequests_1;
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
            function (MoreHTTPRequests_1_1) {
                MoreHTTPRequests_1 = MoreHTTPRequests_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () {
                return [
                    http_1.BaseRequestOptions,
                    testing_2.MockBackend,
                    core_1.provide(http_1.Http, { useFactory: function (backend, defaultOptions) {
                            return new http_1.Http(backend, defaultOptions);
                        }, deps: [testing_2.MockBackend, http_1.BaseRequestOptions] }),
                ];
            });
            testing_1.describe('MoreHTTPRequests', function () {
                testing_1.it('performs a POST', testing_1.injectAsync([testing_1.TestComponentBuilder, testing_2.MockBackend], function (tcb, backend) {
                    return tcb.createAsync(MoreHTTPRequests_1.MoreHTTPRequests).then(function (fixture) {
                        var comp = fixture.debugElement.componentInstance;
                        backend.connections.subscribe(function (c) {
                            testing_1.expect(c.request.url).toBe('http://jsonplaceholder.typicode.com/posts');
                            testing_1.expect(c.request.method).toBe(http_1.RequestMethod.Post);
                            c.mockRespond(new http_1.Response({ body: '{"response": "OK"}' }));
                        });
                        comp.makePost();
                        testing_1.expect(comp.data).toEqual({ 'response': 'OK' });
                    });
                }));
                testing_1.it('performs a DELETE', testing_1.injectAsync([testing_1.TestComponentBuilder, testing_2.MockBackend], function (tcb, backend) {
                    return tcb.createAsync(MoreHTTPRequests_1.MoreHTTPRequests).then(function (fixture) {
                        var comp = fixture.debugElement.componentInstance;
                        backend.connections.subscribe(function (c) {
                            testing_1.expect(c.request.url).toBe('http://jsonplaceholder.typicode.com/posts/1');
                            testing_1.expect(c.request.method).toBe(http_1.RequestMethod.Delete);
                            c.mockRespond(new http_1.Response({ body: '{"response": "OK"}' }));
                        });
                        comp.makeDelete();
                        testing_1.expect(comp.data).toEqual({ 'response': 'OK' });
                    });
                }));
                testing_1.it('sends correct headers', testing_1.injectAsync([testing_1.TestComponentBuilder, testing_2.MockBackend], function (tcb, backend) {
                    return tcb.createAsync(MoreHTTPRequests_1.MoreHTTPRequests).then(function (fixture) {
                        var comp = fixture.debugElement.componentInstance;
                        backend.connections.subscribe(function (c) {
                            testing_1.expect(c.request.url).toBe('http://jsonplaceholder.typicode.com/posts/1');
                            testing_1.expect(c.request.headers.has('X-API-TOKEN')).toBeTruthy();
                            testing_1.expect(c.request.headers.get('X-API-TOKEN')).toEqual('ng-book');
                            c.mockRespond(new http_1.Response({ body: '{"response": "OK"}' }));
                        });
                        comp.makeHeaders();
                        testing_1.expect(comp.data).toEqual({ 'response': 'OK' });
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=MoreHTTPRequests.spec.js.map