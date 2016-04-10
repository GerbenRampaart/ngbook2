/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="../node_modules/angular2/typings/browser.d.ts"/>
/// <reference path="./ArticleComponent.ts"/>

import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";

import { ArticleComponent } from "./ArticleComponent";
import { ArticleModel } from "./ArticleModel";

@Component({
    selector: 'reddit',
    directives: [ ArticleComponent ],
    template: `
        <form class="ui large form segment">
            <h3 class="header">Add a link</h3>
            <div class="field">
                <label for="title">Title:</label>
                <input name="title" #newtitle />
            </div>
            <div class="field">
                <label for="link">Link:</label>
                <input name="link" #newlink />
            </div>
            <button (click)="addArticle(newtitle, newlink)"
                class="ui positive right bloated button">
                Submit link
            </button>
        </form>
        
        <div class="ui grid posts">
            <reddit-article 
                *ngFor="#article of articles"
                [article]="article">
            </reddit-article>
        </div>
    `
})
class AppComponent {
    articles: ArticleModel[];
    
    constructor() {
        this.articles = [
            new ArticleModel('Angular 2', 'http://angular.io'),
            new ArticleModel('Fullstack', 'http://fullstack.io'),
            new ArticleModel('Angular homepage', 'http://angular.io')
        ];
    }
    
    addArticle(title: HTMLInputElement, link: HTMLInputElement) : void {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    }
}

bootstrap(AppComponent);