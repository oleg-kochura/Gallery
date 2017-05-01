export class Comment {
  constructor(
    public authorname: string,
    public datecreate: Date,
    public _content: string,
    public userIcon: string = 'https://www.flickr.com/images/buddyicon.gif'
  ) {}
}

export class GalleryImage {
  src: string;
  comments: Comment[] = [];
  likes: number = 0;
  dislikes: number = 0;
  id: number;

  constructor(src: string, id?: number) {
    this.src = src || '';
    this.id = id;
  }
}
