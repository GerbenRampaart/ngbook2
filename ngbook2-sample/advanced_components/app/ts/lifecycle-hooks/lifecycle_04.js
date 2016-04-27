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
    var OnInitCmp, OnChangeCmp, DoCheckItem, DoCheckCmp, AftersCmp, LifecycleSampleApp4;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            OnInitCmp = (function () {
                function OnInitCmp() {
                }
                OnInitCmp.prototype.ngOnInit = function () {
                    console.log('On init');
                };
                OnInitCmp.prototype.ngOnDestroy = function () {
                    console.log('On destroy');
                };
                OnInitCmp = __decorate([
                    core_1.Component({
                        selector: 'on-init',
                        template: "\n  <div class=\"ui label\">\n    <i class=\"cubes icon\"></i> Init/Destroy\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], OnInitCmp);
                return OnInitCmp;
            }());
            OnChangeCmp = (function () {
                function OnChangeCmp() {
                }
                OnChangeCmp.prototype.ngOnChanges = function (changes) {
                    console.log('Changes', changes);
                };
                __decorate([
                    core_1.Input('name'), 
                    __metadata('design:type', String)
                ], OnChangeCmp.prototype, "name", void 0);
                __decorate([
                    core_1.Input('comment'), 
                    __metadata('design:type', String)
                ], OnChangeCmp.prototype, "comment", void 0);
                OnChangeCmp = __decorate([
                    core_1.Component({
                        selector: 'on-change',
                        inputs: ['name', 'comment'],
                        template: "\n  <div class=\"ui comments\">\n    <div class=\"comment\">\n      <a class=\"avatar\">\n        <img src=\"/app/images/avatars/matt.jpg\">\n      </a>\n      <div class=\"content\">\n        <a class=\"author\">{{name}}</a>\n        <div class=\"text\">\n          {{comment}}\n        </div>\n      </div>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], OnChangeCmp);
                return OnChangeCmp;
            }());
            DoCheckItem = (function () {
                function DoCheckItem(differs) {
                    this.differ = differs.find([]).create(null);
                    this.onRemove = new core_1.EventEmitter();
                }
                DoCheckItem.prototype.ngDoCheck = function () {
                    var _this = this;
                    var changes = this.differ.diff(this.comment);
                    if (changes) {
                        changes.forEachAddedItem(function (r) { return _this.logChange('added', r); });
                        changes.forEachRemovedItem(function (r) { return _this.logChange('removed', r); });
                        changes.forEachChangedItem(function (r) { return _this.logChange('changed', r); });
                    }
                };
                DoCheckItem.prototype.logChange = function (action, r) {
                    if (action === 'changed') {
                        console.log(r.key, action, 'from', r.previousValue, 'to', r.currentValue);
                    }
                    if (action === 'added') {
                        console.log(action, r.key, 'with', r.currentValue);
                    }
                    if (action === 'removed') {
                        console.log(action, r.key, '(was ' + r.previousValue + ')');
                    }
                };
                DoCheckItem.prototype.remove = function () {
                    this.onRemove.emit(this.comment);
                };
                DoCheckItem.prototype.clear = function () {
                    delete this.comment.comment;
                };
                DoCheckItem.prototype.like = function () {
                    this.comment.likes += 1;
                };
                __decorate([
                    core_1.Input('comment'), 
                    __metadata('design:type', Object)
                ], DoCheckItem.prototype, "comment", void 0);
                DoCheckItem = __decorate([
                    core_1.Component({
                        selector: 'do-check-item',
                        inputs: ['comment'],
                        outputs: ['onRemove'],
                        template: "\n  <div class=\"ui feed\">\n    <div class=\"event\">\n      <div class=\"label\" *ngIf=\"comment.author\">\n        <img src=\"/app/images/avatars/{{comment.author.toLowerCase()}}.jpg\">\n      </div>\n      <div class=\"content\">\n        <div class=\"summary\">\n          <a class=\"user\">\n            {{comment.author}}\n          </a> posted a comment\n          <div class=\"date\">\n            1 Hour Ago\n          </div>\n        </div>\n        <div class=\"extra text\">\n          {{comment.comment}}\n        </div>\n        <div class=\"meta\">\n          <a class=\"trash\" (click)=\"remove()\">\n            <i class=\"trash icon\"></i> Remove\n          </a>\n          <a class=\"trash\" (click)=\"clear()\">\n            <i class=\"eraser icon\"></i> Clear\n          </a>\n          <a class=\"like\" (click)=\"like()\">\n            <i class=\"like icon\"></i> {{comment.likes}} Likes\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.KeyValueDiffers])
                ], DoCheckItem);
                return DoCheckItem;
            }());
            DoCheckCmp = (function () {
                function DoCheckCmp(differs) {
                    this.differ = differs.find([]).create(null);
                    this.comments = [];
                    this.authors = ['Elliot', 'Helen', 'Jenny', 'Joe', 'Justen', 'Matt'];
                    this.texts = [
                        "Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.",
                        'Really cool!',
                        'Thanks!'
                    ];
                    this.addComment();
                }
                DoCheckCmp.prototype.getRandomInt = function (max) {
                    return Math.floor(Math.random() * (max + 1));
                };
                DoCheckCmp.prototype.getRandomItem = function (array) {
                    var pos = this.getRandomInt(array.length - 1);
                    return array[pos];
                };
                DoCheckCmp.prototype.addComment = function () {
                    this.comments.push({
                        author: this.getRandomItem(this.authors),
                        comment: this.getRandomItem(this.texts),
                        likes: this.getRandomInt(20)
                    });
                };
                DoCheckCmp.prototype.removeComment = function (comment) {
                    var pos = this.comments.indexOf(comment);
                    this.comments.splice(pos, 1);
                };
                DoCheckCmp.prototype.ngDoCheck = function () {
                    var changes = this.differ.diff(this.comments);
                    if (changes) {
                        changes.forEachAddedItem(function (r) { return console.log('Added', r.item); });
                        changes.forEachRemovedItem(function (r) { return console.log('Removed', r.item); });
                    }
                };
                DoCheckCmp = __decorate([
                    core_1.Component({
                        selector: 'do-check',
                        directives: [DoCheckItem],
                        template: "\n  <do-check-item [comment]=\"comment\"\n    *ngFor=\"#comment of comments\" (onRemove)=\"removeComment($event)\">\n  </do-check-item>\n\n  <button class=\"ui primary button\" (click)=\"addComment()\">\n    Add\n  </button>\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.IterableDiffers])
                ], DoCheckCmp);
                return DoCheckCmp;
            }());
            AftersCmp = (function () {
                function AftersCmp() {
                    console.log('AfterCmd --------- [constructor]');
                    this.counter = 1;
                }
                AftersCmp.prototype.inc = function () {
                    console.log('AfterCmd --------- [counter]');
                    this.counter += 1;
                };
                AftersCmp.prototype.ngOnInit = function () {
                    console.log('AfterCmd - OnInit');
                };
                AftersCmp.prototype.ngOnDestroy = function () {
                    console.log('AfterCmp - OnDestroy');
                };
                AftersCmp.prototype.ngDoCheck = function () {
                    console.log('AfterCmp - DoCheck');
                };
                AftersCmp.prototype.ngOnChanges = function () {
                    console.log('AfterCmp - OnChanges');
                };
                AftersCmp.prototype.ngAfterContentInit = function () {
                    console.log('AfterCmp - AfterContentInit');
                };
                AftersCmp.prototype.ngAfterContentChecked = function () {
                    console.log('AfterCmp - AfterContentChecked');
                };
                AftersCmp.prototype.ngAfterViewInit = function () {
                    console.log('AfterCmp - AfterViewInit');
                };
                AftersCmp.prototype.ngAfterViewChecked = function () {
                    console.log('AfterCmp - AfterViewChecked');
                };
                AftersCmp = __decorate([
                    core_1.Component({
                        selector: 'afters',
                        template: "\n  <div class=\"ui label\">\n    <i class=\"list icon\"></i> Counter: {{ counter }}\n  </div>\n\n  <button class=\"ui primary button\" (click)=\"inc()\">\n    Increment\n  </button>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AftersCmp);
                return AftersCmp;
            }());
            LifecycleSampleApp4 = (function () {
                function LifecycleSampleApp4() {
                    // OnInit and OnDestroy
                    this.display = true;
                    // OnChange
                    this.name = 'Felipe Coury';
                    this.comment = 'I am learning so much!';
                    // AfterXXX
                    this.displayAfters = true;
                }
                LifecycleSampleApp4.prototype.setValues = function (namefld, commentfld) {
                    this.name = namefld.value;
                    this.comment = commentfld.value;
                };
                LifecycleSampleApp4.prototype.toggle = function () {
                    this.display = !this.display;
                };
                LifecycleSampleApp4.prototype.toggleAfters = function () {
                    this.displayAfters = !this.displayAfters;
                };
                LifecycleSampleApp4 = __decorate([
                    core_1.Component({
                        selector: 'lifecycle-sample-app',
                        directives: [OnInitCmp, OnChangeCmp, DoCheckCmp, AftersCmp],
                        template: "\n  <h4 class=\"ui horizontal divider header\">\n    OnInit and OnDestroy\n  </h4>\n\n  <button class=\"ui primary button\" (click)=\"toggle()\">\n    Toggle\n  </button>\n  <on-init *ngIf=\"display\"></on-init>\n\n  <h4 class=\"ui horizontal divider header\">\n    OnChange\n  </h4>\n\n  <div class=\"ui form\">\n    <div class=\"field\">\n      <label>Name</label>\n      <input type=\"text\" #namefld value=\"{{name}}\"\n             (keyup)=\"setValues(namefld, commentfld)\">\n    </div>\n\n    <div class=\"field\">\n      <label>Comment</label>\n      <textarea (keyup)=\"setValues(namefld, commentfld)\"\n                rows=\"2\" #commentfld>{{comment}}</textarea>\n    </div>\n  </div>\n\n  <on-change [name]=\"name\" [comment]=\"comment\"></on-change>\n\n  <h4 class=\"ui horizontal divider header\">\n    DoCheck\n  </h4>\n\n  <do-check></do-check>\n\n  <h4 class=\"ui horizontal divider header\">\n    AfterContentInit, AfterViewInit, AfterContentChecked and AfterViewChecked\n  </h4>\n\n  <afters *ngIf=\"displayAfters\"></afters>\n  <button class=\"ui primary button\" (click)=\"toggleAfters()\">\n    Toggle\n  </button>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LifecycleSampleApp4);
                return LifecycleSampleApp4;
            }());
            exports_1("LifecycleSampleApp4", LifecycleSampleApp4);
        }
    }
});
//# sourceMappingURL=lifecycle_04.js.map