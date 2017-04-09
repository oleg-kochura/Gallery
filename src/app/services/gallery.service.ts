import { images } from '../shared/data';
import { GalleryImage } from '../shared/image';

export class GalleryService {
  images: GalleryImage[] = images;

  getImages(): GalleryImage[] {
    return this.images;
  }

  createImage(src: string) {
    let newImage = new GalleryImage(src);
    this.images.push(newImage);
    console.log(this.images);
  }

}
