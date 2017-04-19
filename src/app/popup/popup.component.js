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
var PopupComponent = (function () {
    function PopupComponent(galleryService) {
        this.galleryService = galleryService;
    }
    PopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.galleryService.popupData.subscribe(function (data) {
            _this.data = data;
            _this.open();
        });
    };
    PopupComponent.prototype.inc = function (value) {
        this.data[value]++;
    };
    PopupComponent.prototype.open = function () {
        this.opened = true;
    };
    PopupComponent.prototype.close = function () {
        this.opened = false;
    };
    PopupComponent.prototype.addNewComment = function (newComment) {
        this.data.comments.push(newComment);
    };
    return PopupComponent;
}());
PopupComponent = __decorate([
    core_1.Component({
        selector: 'popup',
        templateUrl: './popup.component.html',
        styleUrls: ['./popup.component.css']
    }),
    __metadata("design:paramtypes", [gallery_service_1.GalleryService])
], PopupComponent);
exports.PopupComponent = PopupComponent;
//# sourceMappingURL=popup.component.js.map