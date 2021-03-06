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
var models_1 = require("../models");
var flickrApi_service_1 = require("./flickrApi.service");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/catch");
var GalleryService = (function () {
    function GalleryService(api) {
        this.api = api;
        this.dataStore = {
            photos: []
        };
        this._photos = new Subject_1.Subject();
        this._popupData = new Subject_1.Subject();
        this.photos = this._photos.asObservable();
        this.popupData = this._popupData.asObservable();
    }
    GalleryService.prototype.getPhotos = function (per_page) {
        var _this = this;
        this.api.getPhotos(per_page).subscribe(function (res) {
            _this.dataStore.photos = res;
            _this._photos.next(res);
        });
    };
    GalleryService.prototype.getCommentsList = function (id) {
        return this.api.getCommentsList(id);
    };
    GalleryService.prototype.createImage = function (src) {
        var newImage = new models_1.GalleryImage(src);
        this.dataStore.photos.push(newImage);
        this._photos.next(this.dataStore.photos);
    };
    GalleryService.prototype.openPopup = function (data) {
        var _this = this;
        this._popupData.next(data);
        this.getCommentsList(data.id)
            .subscribe(function (comments) {
            data.comments = _this.setUsersIcons(comments);
            _this._popupData.next(data);
        });
    };
    GalleryService.prototype.setUsersIcons = function (data) {
        var baseIconUrl = "https://www.flickr.com/images/buddyicon.gif";
        data.forEach(function (item) {
            if (item.iconfarm && item.iconserver) {
                item.userIcon = "http://farm" + item.iconfarm + ".staticflickr.com/" + item.iconserver + "/buddyicons/" + item.author + ".jpg";
            }
            else {
                item.userIcon = baseIconUrl;
            }
        });
        return data;
    };
    return GalleryService;
}());
GalleryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [flickrApi_service_1.ApiService])
], GalleryService);
exports.GalleryService = GalleryService;
//# sourceMappingURL=gallery.service.js.map