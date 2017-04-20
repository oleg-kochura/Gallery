import { Comment } from '../shared/comment';

export class GalleryImage {

  src: string;
  comments: Comment[] = [];
  likes: number = 0;
  dislikes: number = 0;
  id: number;

  constructor(src: string, id: number) {
    this.src = `url(${src})`;
    this.id = id;
  }
}
