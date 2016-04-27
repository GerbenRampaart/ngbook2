/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', './app/intro_component', './styling/styling', './host/host', './host/steps/host_01', './host/steps/host_02', './host/steps/host_03', './host/steps/host_04', './tabs/tabs', './lifecycle-hooks/lifecycle_01', './lifecycle-hooks/lifecycle_02', './lifecycle-hooks/lifecycle_03', './lifecycle-hooks/lifecycle_04', './templates/for', './templates/if', './transclusion/transclusion', './change-detection/onpush', './change-detection/observables', './app/sidebar', './assets'], function(exports_1, context_1) {
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
    var core_1, browser_1, router_1, intro_component_1, styling_1, host_1, host_01_1, host_02_1, host_03_1, host_04_1, tabs_1, lifecycle_01_1, lifecycle_02_1, lifecycle_03_1, lifecycle_04_1, for_1, if_1, transclusion_1, onpush_1, observables_1, sidebar_1;
    var examples, AdvancedComponentsApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (intro_component_1_1) {
                intro_component_1 = intro_component_1_1;
            },
            function (styling_1_1) {
                styling_1 = styling_1_1;
            },
            function (host_1_1) {
                host_1 = host_1_1;
            },
            function (host_01_1_1) {
                host_01_1 = host_01_1_1;
            },
            function (host_02_1_1) {
                host_02_1 = host_02_1_1;
            },
            function (host_03_1_1) {
                host_03_1 = host_03_1_1;
            },
            function (host_04_1_1) {
                host_04_1 = host_04_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            },
            function (lifecycle_01_1_1) {
                lifecycle_01_1 = lifecycle_01_1_1;
            },
            function (lifecycle_02_1_1) {
                lifecycle_02_1 = lifecycle_02_1_1;
            },
            function (lifecycle_03_1_1) {
                lifecycle_03_1 = lifecycle_03_1_1;
            },
            function (lifecycle_04_1_1) {
                lifecycle_04_1 = lifecycle_04_1_1;
            },
            function (for_1_1) {
                for_1 = for_1_1;
            },
            function (if_1_1) {
                if_1 = if_1_1;
            },
            function (transclusion_1_1) {
                transclusion_1 = transclusion_1_1;
            },
            function (onpush_1_1) {
                onpush_1 = onpush_1_1;
            },
            function (observables_1_1) {
                observables_1 = observables_1_1;
            },
            function (sidebar_1_1) {
                sidebar_1 = sidebar_1_1;
            },
            function (_1) {}],
        execute: function() {
            /*
             * Here's the master list of our examples for this chapter.
             */
            examples = [
                { label: 'Intro', name: 'Root', path: '/', component: intro_component_1.IntroComponent },
                { label: 'Styling', name: 'Styling', path: '/styling', component: styling_1.StyleSampleApp },
                { label: 'Modifying the Host (Step 1)', name: 'Host1', path: '/host-step-1', component: host_01_1.HostSampleApp1, dev: true },
                { label: 'Modifying the Host (Step 2)', name: 'Host2', path: '/host-step-2', component: host_02_1.HostSampleApp2, dev: true },
                { label: 'Modifying the Host (Step 3)', name: 'Host3', path: '/host-step-3', component: host_03_1.HostSampleApp3, dev: true },
                { label: 'Modifying the Host (Step 4)', name: 'Host4', path: '/host-step-4', component: host_04_1.HostSampleApp4, dev: true },
                { label: 'Modifying the Host', name: 'Host', path: '/host-final', component: host_1.HostSampleApp },
                { label: 'Tabs - Component Querying', name: 'Tabs', path: '/tabs', component: tabs_1.TabsSampleApp },
                { label: 'Lifecycle 1 - OnInit / OnDestroy', name: 'Lifecycle1', path: '/lifecycle-hooks-1', component: lifecycle_01_1.LifecycleSampleApp1 },
                { label: 'Lifecycle 2 - OnChanges', name: 'Lifecycle2', path: '/lifecycle-hooks-2', component: lifecycle_02_1.LifecycleSampleApp2 },
                { label: 'Lifecycle 3 - Differs', name: 'Lifecycle3', path: '/lifecycle-hooks-3', component: lifecycle_03_1.LifecycleSampleApp3 },
                { label: 'Lifecycle 4 - Full', name: 'Lifecycle4', path: '/lifecycle-hooks-4', component: lifecycle_04_1.LifecycleSampleApp4 },
                { label: 'ngBookFor', name: 'NgBookFor', path: '/ng-book-for', component: for_1.ForTemplateSampleApp },
                { label: 'ngBookIf', name: 'NgBookIf', path: '/ng-book-if', component: if_1.IfTemplateSampleApp },
                { label: 'Transclusion', name: 'Transclusion', path: '/transclusion', component: transclusion_1.TransclusionSampleApp },
                { label: 'Change Detection - OnPush', name: 'ChangeDetectionOnPush', path: 'change-detection-onpush', component: onpush_1.OnPushChangeDetectionSampleApp },
                { label: 'Change Detection - Observables', name: 'ChangeDetectionObservables', path: 'change-detection-observ', component: observables_1.ObservableChangeDetectionSampleApp },
            ]; /* tslint:enable:max-line-length */
            AdvancedComponentsApp = (function () {
                function AdvancedComponentsApp(router) {
                    this.router = router;
                    this.examples = examples; // store the outer examples
                    // dynamically configure the router based on our ExampleDefs
                    var routeDefinitions = examples
                        .map(function (example) { return ({
                        path: example.path, name: example.name, component: example.component
                    }); });
                    router.config(routeDefinitions);
                }
                AdvancedComponentsApp = __decorate([
                    /* tslint:enable:max-line-length */ core_1.Component({
                        selector: 'advanced-components-app',
                        directives: [sidebar_1.SidebarComponent, router_1.ROUTER_DIRECTIVES],
                        template: "\n  <!-- Menu Bar -->\n  <div class=\"ui menu\">\n    <div class=\"ui container\">\n      <a href=\"#\" class=\"header item\">\n        <img class=\"logo\" \n             src=\"" + require('images/logos/ng-book-2-minibook.png') + "\" />\n        ng-book 2\n      </a>\n      <div class=\"header item borderless\">\n        <h1 class=\"ui header\">\n          Angular 2 Advanced Components\n        </h1>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"ui grid container\">\n    <div class=\"four wide column\">\n      <sidebar [items]=\"examples\"></sidebar>\n    </div>\n\n    <div class=\"ui main text container eight wide column\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AdvancedComponentsApp);
                return AdvancedComponentsApp;
            }());
            browser_1.bootstrap(AdvancedComponentsApp, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' }),
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]).catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=app.js.map