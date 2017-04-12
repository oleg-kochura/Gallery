import {Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { images } from '../shared/data';
import { GalleryImage } from '../shared/image';


@Injectable()
export class GalleryService {
  images: GalleryImage[] = images;

  // Observable string sources
  private missionAnnouncedSource = new Subject<GalleryImage>();
  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();

  getImages(): GalleryImage[] {
    return this.images;
  }

  createImage(src: string) {
    let newImage = new GalleryImage(src);
    this.images.push(newImage);
    console.log(this.images);
  }

  openPopup(data: GalleryImage) {
    this.missionAnnouncedSource.next(data);
  }

}
