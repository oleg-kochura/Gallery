import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { images } from '../shared/data';
import { GalleryImage } from '../shared/image';


@Injectable()
export class GalleryService {
  images: GalleryImage[] = images;
  popupOpened = false;

  test = new BehaviorSubject({opened: false, data: null});

  getImages(): GalleryImage[] {
    return this.images;
  }

  createImage(src: string) {
    let newImage = new GalleryImage(src);
    this.images.push(newImage);
    console.log(this.images);
  }

  openPopup(data: any) {
    this.popupOpened = true;

    this.test.next({
      opened: this.popupOpened,
      data: data
    });
  }

}
