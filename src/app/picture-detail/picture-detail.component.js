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
var router_1 = require("@angular/router");
// import { Comment, GalleryImage } from '../models';
var PictureDetail = (function () {
    function PictureDetail(galleryService, route) {
        this.galleryService = galleryService;
        this.route = route;
    }
    PictureDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.data = _this.galleryService.getPhotoById(id);
        });
    };
    return PictureDetail;
}());
PictureDetail = __decorate([
    core_1.Component({
        selector: 'picture-detail',
        templateUrl: './picture-detail.component.html',
        styleUrls: ['./picture-detail.component.css'],
    }),
    __metadata("design:paramtypes", [gallery_service_1.GalleryService,
        router_1.ActivatedRoute])
], PictureDetail);
exports.PictureDetail = PictureDetail;
//# sourceMappingURL=picture-detail.component.js.map