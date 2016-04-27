System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var externalCSSUrl, InlineStyle, ExternalStyle, NativeEncapsulation, NoEncapsulation, StyleSampleApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            externalCSSUrl = require('file-loader!./external.css'); // webpack gives a URL
            InlineStyle = (function () {
                function InlineStyle() {
                }
                InlineStyle = __decorate([
                    // webpack gives a URL
                    core_1.Component({
                        selector: 'inline-style',
                        styles: ["\n  .highlight {\n    border: 2px solid red;\n    background-color: yellow;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n  "],
                        template: "\n  <h4 class=\"ui horizontal divider header\">\n    Inline style example\n  </h4>\n\n  <div class=\"highlight\">\n    This uses component <code>styles</code>\n    property\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], InlineStyle);
                return InlineStyle;
            }());
            ExternalStyle = (function () {
                function ExternalStyle() {
                }
                ExternalStyle = __decorate([
                    core_1.Component({
                        selector: 'external-style',
                        styleUrls: [externalCSSUrl],
                        template: "\n  <h4 class=\"ui horizontal divider header\">\n    External style example\n  </h4>\n\n  <div class=\"highlight\">\n    This uses component <code>styleUrls</code>\n    property\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExternalStyle);
                return ExternalStyle;
            }());
            NativeEncapsulation = (function () {
                function NativeEncapsulation() {
                }
                NativeEncapsulation = __decorate([
                    core_1.Component({
                        selector: "native-encapsulation",
                        styles: ["\n  .highlight {\n    text-align: center;\n    border: 2px solid black;\n    border-radius: 3px;\n    margin-botton: 20px;\n  }"],
                        template: "\n  <h4 class=\"ui horizontal divider header\">\n    Native encapsulation example\n  </h4>\n\n  <div class=\"highlight\">\n    This component uses <code>ViewEncapsulation.Native</code>\n  </div>\n  ",
                        encapsulation: core_1.ViewEncapsulation.Native
                    }), 
                    __metadata('design:paramtypes', [])
                ], NativeEncapsulation);
                return NativeEncapsulation;
            }());
            NoEncapsulation = (function () {
                function NoEncapsulation() {
                }
                NoEncapsulation = __decorate([
                    core_1.Component({
                        selector: "no-encapsulation",
                        styles: ["\n  .highlight {\n    border: 2px dashed red;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n  "],
                        template: "\n  <h4 class=\"ui horizontal divider header\">\n    No encapsulation example\n  </h4>\n\n  <div class=\"highlight\">\n    This component uses <code>ViewEncapsulation.None</code>\n  </div>\n  ",
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], NoEncapsulation);
                return NoEncapsulation;
            }());
            StyleSampleApp = (function () {
                function StyleSampleApp() {
                }
                StyleSampleApp = __decorate([
                    core_1.Component({
                        selector: 'style-sample-app',
                        directives: [
                            InlineStyle, ExternalStyle, NativeEncapsulation, NoEncapsulation],
                        template: "\n    <inline-style></inline-style>\n    <external-style></external-style>\n    <native-encapsulation></native-encapsulation>\n    <no-encapsulation></no-encapsulation>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], StyleSampleApp);
                return StyleSampleApp;
            }());
            exports_1("StyleSampleApp", StyleSampleApp);
        }
    }
});
//# sourceMappingURL=styling.js.map