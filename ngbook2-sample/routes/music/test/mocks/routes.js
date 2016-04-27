System.register(["angular2/core", "angular2/router", 'angular2/src/router/instruction', 'angular2/testing_internal'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1, router_1, instruction_1, testing_internal_1;
    var MockRouteParams, MockRouter, MockLocationStrategy, MockLocation, MockRouterProvider;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (instruction_1_1) {
                instruction_1 = instruction_1_1;
            },
            function (testing_internal_1_1) {
                testing_internal_1 = testing_internal_1_1;
            }],
        execute: function() {
            MockRouteParams = (function (_super) {
                __extends(MockRouteParams, _super);
                function MockRouteParams() {
                    _super.call(this, router_1.RouteParams);
                    this.ROUTE_PARAMS = {};
                }
                MockRouteParams.prototype.set = function (key, value) {
                    this.ROUTE_PARAMS[key] = value;
                };
                MockRouteParams.prototype.get = function (key) {
                    return this.ROUTE_PARAMS[key];
                };
                return MockRouteParams;
            }(testing_internal_1.SpyObject));
            exports_1("MockRouteParams", MockRouteParams);
            MockRouter = (function (_super) {
                __extends(MockRouter, _super);
                function MockRouter() {
                    _super.call(this, router_1.Router);
                }
                MockRouter.prototype.isRouteActive = function (s) { return true; };
                MockRouter.prototype.generate = function (s) {
                    return new instruction_1.ResolvedInstruction(new router_1.ComponentInstruction('detail', [], null, null, true, '0'), null, {});
                };
                return MockRouter;
            }(testing_internal_1.SpyObject));
            exports_1("MockRouter", MockRouter);
            MockLocationStrategy = (function (_super) {
                __extends(MockLocationStrategy, _super);
                function MockLocationStrategy() {
                    _super.call(this, router_1.LocationStrategy);
                }
                return MockLocationStrategy;
            }(testing_internal_1.SpyObject));
            exports_1("MockLocationStrategy", MockLocationStrategy);
            MockLocation = (function (_super) {
                __extends(MockLocation, _super);
                function MockLocation() {
                    _super.call(this, router_1.Location);
                }
                return MockLocation;
            }(testing_internal_1.SpyObject));
            exports_1("MockLocation", MockLocation);
            MockRouterProvider = (function () {
                function MockRouterProvider() {
                    this.mockRouter = new MockRouter();
                    this.mockRouteParams = new MockRouteParams();
                    this.mockLocationStrategy = new MockLocationStrategy();
                    this.mockLocation = new MockLocation();
                }
                MockRouterProvider.prototype.setRouteParam = function (key, value) {
                    this.mockRouteParams.set(key, value);
                };
                MockRouterProvider.prototype.getProviders = function () {
                    return [
                        core_1.provide(router_1.Router, { useValue: this.mockRouter }),
                        core_1.provide(router_1.RouteParams, { useValue: this.mockRouteParams }),
                        core_1.provide(router_1.Location, { useValue: this.mockLocation }),
                        core_1.provide(router_1.LocationStrategy, { useValue: this.mockLocationStrategy })
                    ];
                };
                return MockRouterProvider;
            }());
            exports_1("MockRouterProvider", MockRouterProvider);
        }
    }
});
//# sourceMappingURL=routes.js.map