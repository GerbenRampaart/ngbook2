System.register(['angular2/core', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Rx_1;
    var ObservableCmp, ObservableChangeDetectionSampleApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            ObservableCmp = (function () {
                function ObservableCmp(changeDetector) {
                    this.changeDetector = changeDetector;
                    this.counter = 0;
                }
                ObservableCmp.prototype.ngOnInit = function () {
                    var _this = this;
                    this.items.subscribe(function (v) {
                        console.log('got value', v);
                        _this.counter++;
                        if (_this.counter % 5 == 0) {
                            _this.changeDetector.markForCheck();
                        }
                    }, null, function () {
                        _this.changeDetector.markForCheck();
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Rx_1.Observable)
                ], ObservableCmp.prototype, "items", void 0);
                ObservableCmp = __decorate([
                    core_1.Component({
                        selector: 'observable',
                        inputs: ['items'],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                        template: "\n  <div>\n    <div>Total items: {{counter}}</div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
                ], ObservableCmp);
                return ObservableCmp;
            }());
            ObservableChangeDetectionSampleApp = (function () {
                function ObservableChangeDetectionSampleApp() {
                    this.itemObservable = Rx_1.Observable.timer(100, 100).take(101);
                }
                ObservableChangeDetectionSampleApp = __decorate([
                    core_1.Component({
                        selector: 'change-detection-sample-app',
                        directives: [ObservableCmp],
                        template: "\n  <observable [items]=\"itemObservable\"></observable>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ObservableChangeDetectionSampleApp);
                return ObservableChangeDetectionSampleApp;
            }());
            exports_1("ObservableChangeDetectionSampleApp", ObservableChangeDetectionSampleApp);
        }
    }
});
//# sourceMappingURL=observables.js.map