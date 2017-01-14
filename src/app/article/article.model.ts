export class Article {
  public title: string;
  public link: string;
  public votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0
  }

  public get Domain(): string {
    try {
      var link: string = this.link.split('//')[1];
      return link.split('/')[0];
    }
    catch (err) {
      console.log(err);
      return null;
    }
  }

  public voteUp(): void {
    this.votes += 1;
  }

  public voteDown(): void {
    this.votes -= 1;
  }
}
