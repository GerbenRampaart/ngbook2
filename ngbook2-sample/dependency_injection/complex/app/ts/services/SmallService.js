System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SmallService;
    return {
        setters:[],
        execute: function() {
            SmallService = (function () {
                function SmallService() {
                }
                SmallService.prototype.run = function () {
                    console.log('Small service...');
                };
                return SmallService;
            }());
            exports_1("SmallService", SmallService);
        }
    }
});
//# sourceMappingURL=SmallService.js.map