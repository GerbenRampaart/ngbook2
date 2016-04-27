System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LargeService;
    return {
        setters:[],
        execute: function() {
            LargeService = (function () {
                function LargeService() {
                }
                LargeService.prototype.run = function () {
                    console.log('Large service...');
                };
                return LargeService;
            }());
            exports_1("LargeService", LargeService);
        }
    }
});
//# sourceMappingURL=LargeService.js.map