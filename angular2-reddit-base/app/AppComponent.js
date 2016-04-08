/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="../node_modules/angular2/typings/browser.d.ts"/>
/// <reference path="./ArticleComponent.ts"/>
System.register(["angular2/platform/browser", "angular2/core", "./ArticleComponent"], function(exports_1, context_1) {
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
    var browser_1, core_1, ArticleComponent_1;
    var AppComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ArticleComponent_1_1) {
                ArticleComponent_1 = ArticleComponent_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.articles = [
                        new ArticleComponent_1.Article('Angular 2', 'http://angular.io'),
                        new ArticleComponent_1.Article('Fullstack', 'http://fullstack.io'),
                        new ArticleComponent_1.Article('Angular homepage', 'http://angular.io')
                    ];
                }
                AppComponent.prototype.addArticle = function (title, link) {
                    console.log("Adding article title: " + title.value + " and link: " + link.value);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [ArticleComponent_1.ArticleComponent],
                        providers: [ArticleComponent_1.Article],
                        template: "\n        <form class=\"ui large form segment\">\n            <h3 class=\"header\">Add a link</h3>\n            <div class=\"field\">\n                <label for=\"title\">Title:</label>\n                <input name=\"title\" #newtitle />\n            </div>\n            <div class=\"field\">\n                <label for=\"link\">Link:</label>\n                <input name=\"link\" #newlink />\n            </div>\n            <button (click)=\"addArticle(newtitle, newlink)\"\n                class=\"ui positive right bloated button\">\n                Submit link\n            </button>\n        </form>\n        \n        <div class=\"ui grid posts\">\n            <article [article]=\"myArticle1\"></article>\n            <article [article]=\"myArticle2\"></article>\n            <article [article]=\"myArticle3\"></article>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            browser_1.bootstrap(AppComponent);
        }
    }
});
//# sourceMappingURL=AppComponent.js.map