System.register(['angular2/core', 'angular2/common', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, common_1, http_1;
    var MoreHTTPRequests;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            MoreHTTPRequests = (function () {
                function MoreHTTPRequests(http) {
                    this.http = http;
                }
                MoreHTTPRequests.prototype.makePost = function () {
                    var _this = this;
                    this.loading = true;
                    this.http.post('http://jsonplaceholder.typicode.com/posts', JSON.stringify({
                        body: 'bar',
                        title: 'foo',
                        userId: 1
                    }))
                        .subscribe(function (res) {
                        _this.data = res.json();
                        _this.loading = false;
                    });
                };
                MoreHTTPRequests.prototype.makeDelete = function () {
                    var _this = this;
                    this.loading = true;
                    this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
                        .subscribe(function (res) {
                        _this.data = res.json();
                        _this.loading = false;
                    });
                };
                MoreHTTPRequests.prototype.makeHeaders = function () {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('X-API-TOKEN', 'ng-book');
                    var opts = new http_1.RequestOptions();
                    opts.headers = headers;
                    this.http.get('http://jsonplaceholder.typicode.com/posts/1', opts)
                        .subscribe(function (res) {
                        _this.data = res.json();
                    });
                };
                MoreHTTPRequests = __decorate([
                    core_1.Component({
                        selector: 'more-http',
                        directives: [common_1.CORE_DIRECTIVES],
                        pipes: [common_1.JsonPipe],
                        template: "\n  <h2>More Requests</h2>\n  <button type=\"button\" (click)=\"makePost()\">Make Post</button>\n  <button type=\"button\" (click)=\"makeDelete()\">Make Delete</button>\n  <button type=\"button\" (click)=\"makeHeaders()\">Make Headers</button>\n  <div *ngIf=\"loading\">loading...</div>\n  <pre>{{data | json}}</pre>\n"
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MoreHTTPRequests);
                return MoreHTTPRequests;
            }());
            exports_1("MoreHTTPRequests", MoreHTTPRequests);
        }
    }
});
//# sourceMappingURL=MoreHTTPRequests.js.map