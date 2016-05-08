import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";

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
                *ngFor="let article of sortedArticles()"
                [article]="article">
            </reddit-article>
        </div>
    `
})
export class AppComponent {
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
        
        this.articles.push(new ArticleModel(title.value, link.value, 0));
        title.value = '';
        link.value = '';
    }
    
    sortedArticles() : ArticleModel[] {
        return this.articles.sort((a: ArticleModel, b: ArticleModel) => b.votes - a.votes);
    }    
}

bootstrap(AppComponent);