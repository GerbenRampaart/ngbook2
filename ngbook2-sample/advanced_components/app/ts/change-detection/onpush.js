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
    var Profile, DefaultCmp, OnPushCmp, OnPushChangeDetectionSampleApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Profile = (function () {
                function Profile(first, last) {
                    this.first = first;
                    this.last = last;
                }
                Profile.prototype.lastChanged = function () {
                    return new Date();
                };
                return Profile;
            }());
            DefaultCmp = (function () {
                function DefaultCmp() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Profile)
                ], DefaultCmp.prototype, "profile", void 0);
                DefaultCmp = __decorate([
                    core_1.Component({
                        selector: 'default',
                        inputs: ['profile'],
                        template: "\n  <h4 class=\"ui horizontal divider header\">\n    Default Strategy\n  </h4>\n\n  <form class=\"ui form\">\n    <div class=\"field\">\n      <label>First Name</label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"profile.first\"\n        placeholder=\"First Name\">\n    </div>\n    <div class=\"field\">\n      <label>Last Name</label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"profile.last\"\n        placeholder=\"Last Name\">\n    </div>\n  </form>\n  <div>\n    {{profile.lastChanged() | date:'medium'}}\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], DefaultCmp);
                return DefaultCmp;
            }());
            OnPushCmp = (function () {
                function OnPushCmp() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Profile)
                ], OnPushCmp.prototype, "profile", void 0);
                OnPushCmp = __decorate([
                    core_1.Component({
                        selector: 'on-push',
                        inputs: ['profile'],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                        template: "\n  <h4 class=\"ui horizontal divider header\">\n    OnPush Strategy\n  </h4>\n\n  <form class=\"ui form\">\n    <div class=\"field\">\n      <label>First Name</label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"profile.first\"\n        placeholder=\"First Name\">\n    </div>\n    <div class=\"field\">\n      <label>Last Name</label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"profile.last\"\n        placeholder=\"Last Name\">\n    </div>\n  </form>\n  <div>\n    {{profile.lastChanged() | date:'medium'}}\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], OnPushCmp);
                return OnPushCmp;
            }());
            OnPushChangeDetectionSampleApp = (function () {
                function OnPushChangeDetectionSampleApp() {
                    this.profile1 = new Profile('Felipe', 'Coury');
                    this.profile2 = new Profile('Nate', 'Murray');
                }
                OnPushChangeDetectionSampleApp = __decorate([
                    core_1.Component({
                        selector: 'change-detection-sample-app',
                        directives: [DefaultCmp, OnPushCmp],
                        template: "\n  <div class=\"ui page grid\">\n    <div class=\"two column row\">\n      <div class=\"column area\">\n        <default [profile]=\"profile1\"></default>\n      </div>\n      <div class=\"column area\">\n        <on-push [profile]=\"profile2\"></on-push>\n      </div>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], OnPushChangeDetectionSampleApp);
                return OnPushChangeDetectionSampleApp;
            }());
            exports_1("OnPushChangeDetectionSampleApp", OnPushChangeDetectionSampleApp);
        }
    }
});
//# sourceMappingURL=onpush.js.map