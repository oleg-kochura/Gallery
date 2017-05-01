import { Injectable } from '@angular/core';
import { GalleryImage } from '../models';
import { ApiService } from './flickrApi.service'
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class GalleryService {
  private dataStore: {
    photos: GalleryImage[]
  };

  private _photos: Subject<GalleryImage[]>;
  private _popupData: Subject<GalleryImage>;

  photos: Observable<GalleryImage[]>;
  popupData: Observable<GalleryImage>;

  constructor(private api: ApiService) {
    this.dataStore = {
      photos: []
    };

    this._photos = new Subject<GalleryImage[]>();
    this._popupData = new Subject<GalleryImage>();

    this.photos = this._photos.asObservable();
    this.popupData = this._popupData.asObservable();
  }

  getPhotos(per_page: number) {
    this.api.getPhotos(per_page).subscribe(res => {
      this.dataStore.photos = res;
      this._photos.next(res);
      console.log(res);
    });
  }

  getCommentsList(id: number) {
    return this.api.getCommentsList(id);
  }

  createImage(src: string) {
    let newImage = new GalleryImage(src);
    this.dataStore.photos.push(newImage);
    this._photos.next(this.dataStore.photos);
  }

  openPopup(data: GalleryImage) {
    this._popupData.next(data);

    this.getCommentsList(data.id)
      .subscribe(comments => {
        data.comments = this.setUsersIcons(comments);
        this._popupData.next(data);
        console.log(data);
      });
    console.log(data);
  }

  setUsersIcons(data: any) {
    let baseIconUrl = `https://www.flickr.com/images/buddyicon.gif`;

    data.forEach((item: any) => {
      if (item.iconfarm && item.iconserver) {
        item.userIcon = `http://farm${item.iconfarm}.staticflickr.com/${item.iconserver}/buddyicons/${item.author}.jpg`
      } else {
        item.userIcon = baseIconUrl;
      }
    });

    return data;
  }
}
