import { Component } from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "angular2/router";

import { HeroesComponent } from "./heroes.component";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService } from "./hero.service";

import { DashboardComponent } from "./dashboard.component";

@RouteConfig([
    {
        path: "/heroes",
        name: "Heroes",
        component: HeroesComponent
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: "/detail/:id",
        name: "HeroDetail",
        component: HeroDetailComponent
    }
])
@Component({
    selector: 'my-app',
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ HeroService, ROUTER_PROVIDERS ],
    template: `
        <h1>{{ title }}</h1>
        <nav>
            <a [routerLink]="['Heroes']">Heroes</a>
            <a [routerLink]="['Dashboard']">Dashboard</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: [ 'app/app.component.css' ]
})
export class AppComponent {
    public title: string;
    
    constructor() {
        this.title = "Heroes";
    }
}