import {Component, OnInit, Inject} from '@angular/core';
import {Article} from "./article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  public article: Article;

  constructor() {
    this.article = new Article('Angular 2', 'http://angular.io', 10);
  }

  public voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  public voteDown() {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
