export class Article {
    public title: string;
    public link: string;
    public votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    public voteUp(): void {
        this.votes += 1;
    }

    public voteDown(): void {
        this.votes -= 1;
    }
}
