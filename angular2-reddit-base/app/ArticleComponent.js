/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="../node_modules/angular2/typings/browser.d.ts"/>
System.register(["angular2/core"], function(exports_1, context_1) {
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
    var Article, ArticleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Article = (function () {
                function Article(title, link, votes) {
                    this.title = title;
                    this.link = link;
                    this.votes = votes || 0;
                }
                Article.prototype.voteUp = function () {
                    this.votes += 1;
                };
                Article.prototype.voteDown = function () {
                    this.votes -= 1;
                };
                Article = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [String, String, Number])
                ], Article);
                return Article;
            }());
            exports_1("Article", Article);
            ArticleComponent = (function () {
                function ArticleComponent(article) {
                    this.article = article;
                }
                ArticleComponent.prototype.voteUp = function () {
                    this.article.voteUp();
                    return false;
                };
                ArticleComponent.prototype.voteDown = function () {
                    this.article.voteDown();
                    return false;
                };
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'article',
                        inputs: ['article'],
                        host: {
                            class: 'row'
                        },
                        template: "\n        <div class=\"four wide column center aligned votes\">\n            <div class=\"ui statistic\">\n                <div class=\"value\">\n                    {{ article.votes }}\n                </div>\n                <div class=\"label\">\n                    Points\n                </div>\n            </div>\n        </div>\n        <div class=\"twelve wide column\">\n            <a class=\"ui large header\" href=\"{{ article.link }}\">\n                {{ article.title }}\n            </a>\n            <ul class=\"ui big horizontal list voters\">\n                <li class=\"item\">\n                    <a href (click)=\"voteUp()\">\n                        <i class=\"arrow up icon\"></i>\n                        upvote\n                    </a>\n                </li>\n                <li class=\"item\">\n                    <a href (click)=\"voteDown()\">\n                        <i class=\"arrow down icon\"></i>\n                        downvote\n                    </a>\n                </li>\n            </ul>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [Article])
                ], ArticleComponent);
                return ArticleComponent;
            }());
            exports_1("ArticleComponent", ArticleComponent);
        }
    }
});
//# sourceMappingURL=ArticleComponent.js.map