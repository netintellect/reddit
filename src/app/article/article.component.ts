import {Component, OnInit, Inject, Input} from '@angular/core';
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
  @Input() public article: Article;

  constructor() {

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
