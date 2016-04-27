System.register(['./LargeService', './SmallService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LargeService_1, SmallService_1;
    var ViewPortService;
    return {
        setters:[
            function (LargeService_1_1) {
                LargeService_1 = LargeService_1_1;
            },
            function (SmallService_1_1) {
                SmallService_1 = SmallService_1_1;
            }],
        execute: function() {
            ViewPortService = (function () {
                function ViewPortService() {
                }
                ViewPortService.prototype.determineService = function () {
                    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                    if (w < 800) {
                        return new SmallService_1.SmallService();
                    }
                    return new LargeService_1.LargeService();
                };
                return ViewPortService;
            }());
            exports_1("ViewPortService", ViewPortService);
        }
    }
});
//# sourceMappingURL=ViewPortService.js.map