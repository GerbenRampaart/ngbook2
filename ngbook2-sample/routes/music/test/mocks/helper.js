System.register(['angular2/http', 'angular2/platform/common_dom'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var http_1, common_dom_1;
    var MockResponse, TestHelper;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_dom_1_1) {
                common_dom_1 = common_dom_1_1;
            }],
        execute: function() {
            MockResponse = (function (_super) {
                __extends(MockResponse, _super);
                function MockResponse(json) {
                    _super.call(this, new http_1.ResponseOptions());
                    this._json = json;
                }
                MockResponse.prototype.json = function () {
                    return this._json;
                };
                return MockResponse;
            }(http_1.Response));
            TestHelper = (function () {
                function TestHelper() {
                }
                /** Gets a child DebugElement by tag name. */
                TestHelper.getChildByTagName = function (parent, tagName) {
                    return parent.query(function (debugEl) { return debugEl.nativeElement.tagName.toLowerCase() == tagName; });
                };
                /**
                 * Gets a child DebugElement by css selector.
                 *
                 * The child of DebugElement are other elements that are "known" to
                 * Angular.
                 */
                TestHelper.getChildrenBySelector = function (parent, selector) {
                    var results = [];
                    parent.queryAll(common_dom_1.By.css(selector)).forEach(function (el) { return results.push(el); });
                    parent.children.forEach(function (de) {
                        TestHelper.getChildrenBySelector(de, selector).forEach(function (el) { return results.push(el); });
                    });
                    return results;
                };
                TestHelper.isPhantomJS = function () {
                    return navigator && navigator.userAgent
                        && navigator.userAgent.indexOf('PhantomJS') > -1;
                };
                TestHelper.mockJSONResponse = function (payload) {
                    return new MockResponse(payload);
                };
                return TestHelper;
            }());
            exports_1("TestHelper", TestHelper);
        }
    }
});
// toHaveText = function(util, customEqualityTesters) {
//   return {
//     compare: function(debugElement: DebugElement, text: string) {
//       result.pass = util.equals(
//         debugElement.nativeElement.innerText, text, customEqualityTesters);
//
//       if (result.pass) {
//         result.message =
//           "Expected " + debugElement.nativeElement +
//           " to not have text " + text;
//       }
//       else {
//         result.message =
//           "Expected " + debugElement.nativeElement + " to have text " + text;
//       }
//
//       return result;
//     }
//   }
// }
//# sourceMappingURL=helper.js.map