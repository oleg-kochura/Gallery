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
    });
  }

  getCommentsList(id) {
    this.api.getCommentsList(id);
  }

  // getCommentsList() {
  //   return this.http.get('https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=98a0e431c34ee80634479fda5b7971d3&photo_id=33724465430&format=json&nojsoncallback=1')
  //     .map(res => res)
  //     .subscribe(res => console.log(res.json().comments.comment));
  // }

  createImage(src: string) {
    let newImage = new GalleryImage(src);
    this.dataStore.photos.push(newImage);
    this._photos.next(this.dataStore.photos);
  }

  openPopup(data: GalleryImage) {
    this._popupData.next(data);
    console.log(data);
  }

}
