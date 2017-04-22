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
var gallery_service_1 = require("../services/gallery.service");
var PicturesListComponent = (function () {
    function PicturesListComponent(galleryService) {
        this.galleryService = galleryService;
    }
    PicturesListComponent.prototype.ngOnInit = function () {
        var photosPerPage = 4;
        this.galleryService.getPhotos(photosPerPage);
        this.images = this.galleryService.photos;
    };
    return PicturesListComponent;
}());
__decorate([
    core_1.ViewChild('grid'),
    __metadata("design:type", core_1.ElementRef)
], PicturesListComponent.prototype, "grid", void 0);
PicturesListComponent = __decorate([
    core_1.Component({
        selector: 'pictures-list',
        templateUrl: './pictures-list.component.html',
        styleUrls: ['./pictures-list.component.css'],
    }),
    __metadata("design:paramtypes", [gallery_service_1.GalleryService])
], PicturesListComponent);
exports.PicturesListComponent = PicturesListComponent;
//# sourceMappingURL=pictures-list.component.js.map