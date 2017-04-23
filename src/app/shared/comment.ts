export class Comment {
  constructor(
    public authorname: string,
    public datecreate: Date,
    public _content: string,
    public userIcon: string = 'https://www.flickr.com/images/buddyicon.gif'
  ) {}
}
