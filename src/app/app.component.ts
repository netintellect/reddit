import { Component } from '@angular/core';
import {Article} from "./article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public articles = [
    new Article('Angular 2', 'http://angular.io', 1),
    new Article('Fullstack', 'http://fullstack.io', 2),
    new Article('Angular HomePage', 'http://angular.io', 3)
  ];

  public addArticle(title: HTMLInputElement, link: HTMLInputElement) : void {
    console.log(`Adding article title: ${title.value} and link: ${link.value})`)

    this.articles.push(new Article(title.value,
      link.value));
    title.value = '';
    link.value = '';
  }

  public sortedArticles() : Array<Article> {
    return this.articles.sort((a : Article, b : Article) =>
      b.votes - a.votes)
  }

}
