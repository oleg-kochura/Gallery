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
  }

  // Observable string sources
  private missionAnnouncedSource = new Subject<GalleryImage>();
  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();

  // getImages(): GalleryImage[] {
  //   return this.images;
  // }

  getRandomImages() {
    let options = {
      tags: "mountains",
      tagmode: "any",
      format: "json"
    };
    let flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=africa&tagmode=any&format=json&jsoncallback=JSONP_CALLBACK';
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


  testApi() {
    return this.http.get(' https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=e9a8cf28694771511e7cc036d86ef637&photo_id=15280531798&format=json&nojsoncallback=1')
      .subscribe(res => console.log(res.json()));
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
