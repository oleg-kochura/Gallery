export class Comment {
  constructor(
    private author: string,
    private date: Date = new Date(),
    private message: string
  ) {}
}
