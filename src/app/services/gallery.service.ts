import {Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import {Http, Headers, Response, RequestOptions} from '@angular/http';

import { images } from '../shared/data';
import { GalleryImage } from '../shared/image';

import {Jsonp} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class GalleryService {
  images: GalleryImage[] = images;
  imagesTest: any = [];
  baseUrl: string = 'https://www.flickr.com/photos/';

  constructor(private http: Http, private _jsonp: Jsonp) {
    this.getRandomImages();
    this.testApi();
    this.getCommentsList();
  }

  // Observable string sources
  private missionAnnouncedSource = new Subject<GalleryImage>();
  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();

  // getImages(): GalleryImage[] {
  //   return this.images;
  // }


  //photos_public
  getRandomImages() {
    let options = {
      tags: "mountains",
      tagmode: "any",
      format: "json"
    };
    let flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=lions&tagmode=any&format=json&jsoncallback=JSONP_CALLBACK';
    return this._jsonp.get(flickerAPI)
      .map(res => {
        console.log(res.json());
        let photosArr = res.json().items;
        let newArr = photosArr.map((item: any) => {
          let src = item.media.m.replace('_m', '_b');
          let newImage = new GalleryImage(src);

          return newImage;
        });
        return newArr;
      });
    }

  getCommentsList() {
    return this.http.get('https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=7ede1469cfab29f1cf9c03fc77ef1e11&photo_id=15280531798&format=json&nojsoncallback=1')
      .map(res => res.json().comment)
  }



  // flickr.interestingness.getList
  testApi() {
    return this.http.get(' https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=7ede1469cfab29f1cf9c03fc77ef1e11&per_page=20&format=json&nojsoncallback=1&auth_token=72157682667838466-b7a098dd26111ee7&api_sig=bfa4a75bc5fa2975a02707be70b47e47')
      .map(res => {
        let photosArr = res.json().photos.photo;
        let newArr = photosArr.map(item => {
          let src = `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`;
          let newImage = new GalleryImage(src);

          return newImage;
        });
        return newArr;
      });
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
