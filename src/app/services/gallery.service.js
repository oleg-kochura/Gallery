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
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var flickrApi_service_1 = require("./flickrApi.service");
var GalleryService = (function () {
    function GalleryService(http, api) {
        this.http = http;
        this.api = api;
        this.baseUrl = 'https://www.flickr.com/photos/';
        this.dataStore = { photos: [] };
        this._photos = new Subject_1.Subject();
        this.photos = this._photos.asObservable();
        this._popupData = new Subject_1.Subject();
        this.popupData = this._popupData.asObservable();
    }
    GalleryService.prototype.getPhotos = function () {
        var _this = this;
        this.api.getPhotos().subscribe(function (res) {
            _this.dataStore.photos = res;
            _this._photos.next(res);
            console.log(res);
        });
    };
    GalleryService.prototype.getCommentsList = function (id) {
        return this.api.getCommentsList(id);
    };
    // getCommentsList() {
    //   return this.http.get('https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=98a0e431c34ee80634479fda5b7971d3&photo_id=33724465430&format=json&nojsoncallback=1')
    //     .map(res => res)
    //     .subscribe(res => console.log(res.json().comments.comment));
    // }
    GalleryService.prototype.createImage = function (src) {
        // let newImage = new GalleryImage(src);
        // this.dataStore.photos.push(newImage);
        // this._photos.next(this.dataStore.photos);
    };
    GalleryService.prototype.openPopup = function (data) {
        this.getCommentsList(data.id).subscribe(function (res) { return console.log(res.json().comments.comment); });
        // this._popupData.next(data);
        // console.log(data);
    };
    return GalleryService;
}());
GalleryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, flickrApi_service_1.ApiService])
], GalleryService);
exports.GalleryService = GalleryService;
//# sourceMappingURL=gallery.service.js.map