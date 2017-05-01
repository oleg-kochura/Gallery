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
var PlaceholderComponent = (function () {
    function PlaceholderComponent(galleryService) {
        this.galleryService = galleryService;
    }
    PlaceholderComponent.prototype.handleInputChange = function (event) {
        var file = event.srcElement.files[0];
        var reader = new FileReader();
        reader.onload = this.handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    PlaceholderComponent.prototype.handleReaderLoaded = function (e) {
        var reader = e.target.result;
        this.galleryService.createImage(reader);
    };
    return PlaceholderComponent;
}());
PlaceholderComponent = __decorate([
    core_1.Component({
        selector: 'placeholder',
        templateUrl: './placeholder.component.html',
        styleUrls: ['./placeholder.component.css'],
    }),
    __metadata("design:paramtypes", [gallery_service_1.GalleryService])
], PlaceholderComponent);
exports.PlaceholderComponent = PlaceholderComponent;
//# sourceMappingURL=placeholder.component.js.map