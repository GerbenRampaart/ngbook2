System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ArticleModel;
    return {
        setters:[],
        execute: function() {
            ArticleModel = (function () {
                function ArticleModel(title, link, votes) {
                    this.title = title;
                    this.link = link;
                    this.votes = votes || 0;
                }
                ArticleModel.prototype.voteUp = function () {
                    this.votes += 1;
                };
                ArticleModel.prototype.voteDown = function () {
                    this.votes -= 1;
                };
                ArticleModel.prototype.domain = function () {
                    try {
                        var link = this.link.split('//')[1];
                        return link.split('/')[0];
                    }
                    catch (err) {
                        return null;
                    }
                };
                return ArticleModel;
            }());
            exports_1("ArticleModel", ArticleModel);
        }
    }
});
//# sourceMappingURL=ArticleModel.js.map