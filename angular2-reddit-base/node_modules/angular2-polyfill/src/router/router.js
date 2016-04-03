"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('../../core');
var instruction_1 = require('./instruction');
var Router = (function () {
    function Router(state) {
        this.state = state;
    }
    Router.prototype.isRouteActive = function (instruction) {
        return this.state.is(instruction._state, instruction.urlParams);
    };
    Router.prototype.navigate = function (linkParams) {
        return this.state.go(linkParams[0], linkParams[1] || {});
    };
    Router.prototype.renavigate = function () {
        return this.state.reload(this.state.current);
    };
    Router.prototype.generate = function (linkParams) {
        var state = linkParams[0];
        var params = linkParams[1] || {};
        var url = this.state.href(state, params);
        var instruction = new instruction_1.Instruction();
        instruction._state = state;
        instruction.urlPath = this.state.href(state, params);
        instruction.urlParams = params;
        return Promise.resolve(instruction);
    };
    Router = __decorate([
        __param(0, core_1.Inject('$state'))
    ], Router);
    return Router;
}());
exports.Router = Router;
