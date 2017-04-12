"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var data_1 = require("../shared/data");
var image_1 = require("../shared/image");
var GalleryService = (function () {
    function GalleryService() {
        this.images = data_1.images;
        // Observable string sources
        this.missionAnnouncedSource = new Subject_1.Subject();
        // Observable string streams
        this.missionAnnounced$ = this.missionAnnouncedSource.asObservable();
    }
    GalleryService.prototype.getImages = function () {
        return this.images;
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
    core_1.Injectable()
], GalleryService);
exports.GalleryService = GalleryService;
//# sourceMappingURL=gallery.service.js.map