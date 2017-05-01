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
var http_1 = require("@angular/http");
var models_1 = require("../models");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.api = {
            baseUrl: 'https://api.flickr.com/services/rest/?method=',
            api_key: '98a0e431c34ee80634479fda5b7971d3' //my private api_key for flickr.com  NOT FOR USE!
        };
    }
    //Api method:  flickr.interestingness.getList
    ApiService.prototype.getPhotos = function (per_page) {
        return this.http.get(this.api.baseUrl + "flickr.interestingness.getList&api_key=" + this.api.api_key + "&per_page=" + per_page + "&format=json&nojsoncallback=1")
            .map(function (res) {
            var photosArr = res.json().photos.photo;
            console.log(photosArr);
            var newArr = photosArr.map(function (item) {
                var src = "https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_b.jpg";
                var newImage = new models_1.GalleryImage(src, item.id);
                return newImage;
            });
            return newArr;
        });
    };
    ApiService.prototype.getCommentsList = function (id) {
        var options = {
            photo_id: id
        };
        return this.http.get(this.api.baseUrl + "flickr.photos.comments.getList&api_key=" + this.api.api_key + "&photo_id=" + options.photo_id + "&format=json&nojsoncallback=1")
            .map(function (res) { return res.json().comments.comment; });
    };
    return ApiService;
}());
ApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=flickrApi.service.js.map