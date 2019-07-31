export class Post {
  loveIts: number;
  created_at: number;

  constructor(public title: string, public content: string) {
    this.loveIts = 0;
    this.created_at = Date.now();
  }
}
