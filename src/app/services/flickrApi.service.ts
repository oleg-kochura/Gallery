import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { GalleryImage } from '../shared/image';

@Injectable()
export class ApiService {
  private api: {
    baseUrl: string,
    api_key: string
  };

  constructor(private http: Http) {
    this.api = {
      baseUrl: 'https://api.flickr.com/services/rest/?method=',
      api_key: `98a0e431c34ee80634479fda5b7971d3`
    };
  }

  // flickr.interestingness.getList
  getPhotos(per_page: number)  {
    return this.http.get(`${this.api.baseUrl}flickr.interestingness.getList&api_key=${this.api.api_key}&per_page=${per_page}&format=json&nojsoncallback=1`)
      .map(res => {
        let photosArr = res.json().photos.photo;
        console.log(photosArr);
        let newArr = photosArr.map((item: any) => {
          let src = `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`;
          let newImage = new GalleryImage(src, item.id);

          return newImage;
        });
        return newArr;
      });
  }

  getCommentsList(id: any) {
    let options = {
      photo_id: id
    };

    return this.http.get(`${this.api.baseUrl}flickr.photos.comments.getList&api_key=${this.api.api_key}&photo_id=${options.photo_id}&format=json&nojsoncallback=1`)
      .map(res => res.json().comments.comment)
  }


  //flickr photos_public
  // getRandomImages() {
  //   let options = {
  //     tags: "mountains",
  //     tagmode: "any",
  //     format: "json"
  //   };
  //   let flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=lions&tagmode=any&format=json&jsoncallback=JSONP_CALLBACK';
  //   return this._jsonp.get(flickerAPI)
  //     .map(res => {
  //       console.log(res.json());
  //       let photosArr = res.json().items;
  //       let newArr = photosArr.map((item: any) => {
  //         let src = item.media.m.replace('_m', '_b');
  //         let newImage = new GalleryImage(src);
  //
  //         return newImage;
  //       });
  //       return newArr;
  //     });
  //   }
}
