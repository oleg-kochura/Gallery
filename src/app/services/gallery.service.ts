import {Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { GalleryImage } from '../shared/image';

import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Jsonp} from '@angular/http';
import { images } from '../shared/data';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './flickrApi.service'

@Injectable()
export class GalleryService {
  private baseUrl: string;
  private dataStore: {
    photos: GalleryImage[]
  };

  private _photos: Subject<GalleryImage[]>;
  private _popupData: Subject<GalleryImage>;

  photos: Observable<GalleryImage[]>;
  popupData: Observable<GalleryImage>;

  constructor(private http: Http, public api: ApiService) {
    this.baseUrl = 'https://www.flickr.com/photos/';
    this.dataStore = { photos: [] };
    this._photos = new Subject<GalleryImage[]>();
    this.photos = this._photos.asObservable();
    this._popupData = new Subject<GalleryImage>();
    this.popupData = this._popupData.asObservable();
  }

  getPhotos() {
    this.api.getPhotos().subscribe(res => {
      this.dataStore.photos = res;
      this._photos.next(res);
      console.log(res);
    });
  }

  getCommentsList(id: any) {
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
    data.forEach((item: any) => {
      item.userIcon = `http://farm${item.iconfarm}.staticflickr.com/${item.iconserver}/buddyicons/${item.author}.jpg`
    });

    return data;
  }
}
