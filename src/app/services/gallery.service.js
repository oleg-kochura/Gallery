"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var http_1 = require("@angular/http");
var data_1 = require("../shared/data");
var image_1 = require("../shared/image");
var http_2 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var GalleryService = (function () {
    function GalleryService(http, _jsonp) {
        this.http = http;
        this._jsonp = _jsonp;
        this.images = data_1.images;
        this.imagesTest = [];
        this.baseUrl = 'https://www.flickr.com/photos/';
        // Observable string sources
        this.missionAnnouncedSource = new Subject_1.Subject();
        // Observable string streams
        this.missionAnnounced$ = this.missionAnnouncedSource.asObservable();
        this.getRandomImages();
        this.testApi();
        this.getCommentsList();
    }
    // getImages(): GalleryImage[] {
    //   return this.images;
    // }
    //photos_public
    GalleryService.prototype.getRandomImages = function () {
        var options = {
            tags: "mountains",
            tagmode: "any",
            format: "json"
        };
        var flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=lions&tagmode=any&format=json&jsoncallback=JSONP_CALLBACK';
        return this._jsonp.get(flickerAPI)
            .map(function (res) {
            console.log(res.json());
            var photosArr = res.json().items;
            var newArr = photosArr.map(function (item) {
                var src = item.media.m.replace('_m', '_b');
                var newImage = new image_1.GalleryImage(src);
                return newImage;
            });
            return newArr;
        });
    };
    GalleryService.prototype.getCommentsList = function () {
        return this.http.get('https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=7ede1469cfab29f1cf9c03fc77ef1e11&photo_id=15280531798&format=json&nojsoncallback=1')
            .map(function (res) { return res.json().comment; });
    };
    // flickr.interestingness.getList
    GalleryService.prototype.testApi = function () {
        return this.http.get(' https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=7ede1469cfab29f1cf9c03fc77ef1e11&per_page=20&format=json&nojsoncallback=1&auth_token=72157682667838466-b7a098dd26111ee7&api_sig=bfa4a75bc5fa2975a02707be70b47e47')
            .map(function (res) {
            var photosArr = res.json().photos.photo;
            var newArr = photosArr.map(function (item) {
                var src = "https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_b.jpg";
                var newImage = new image_1.GalleryImage(src);
                return newImage;
            });
            return newArr;
        });
    };
    GalleryService.prototype.createImage = function (src) {
        var newImage = new image_1.GalleryImage(src);
        this.images.push(newImage);
        console.log(this.images);
    };
    GalleryService.prototype.openPopup = function (data) {
        this.missionAnnouncedSource.next(data);
    };
    return GalleryService;
}());
GalleryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, http_2.Jsonp])
], GalleryService);
exports.GalleryService = GalleryService;
//# sourceMappingURL=gallery.service.js.map