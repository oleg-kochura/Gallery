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
    }
    // getImages(): GalleryImage[] {
    //   return this.images;
    // }
    GalleryService.prototype.getRandomImages = function () {
        var options = {
            tags: "mountains",
            tagmode: "any",
            format: "json"
        };
        var flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=africa&tagmode=any&format=json&jsoncallback=JSONP_CALLBACK';
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
    GalleryService.prototype.testApi = function () {
        return this.http.get(' https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=e9a8cf28694771511e7cc036d86ef637&photo_id=15280531798&format=json&nojsoncallback=1')
            .subscribe(function (res) { return console.log(res.json()); });
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