import { Comment } from '../shared/comment';

export class GalleryImage {

  src: string;
  comments: Comment[] = [];
  likes: number = 0;
  dislikes: number = 0;

  constructor(src: string) {
    this.src = `url(${src})`
  }
}
