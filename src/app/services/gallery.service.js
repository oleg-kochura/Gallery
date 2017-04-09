"use strict";
var data_1 = require("../shared/data");
var image_1 = require("../shared/image");
var GalleryService = (function () {
    function GalleryService() {
        this.images = data_1.images;
    }
    GalleryService.prototype.getImages = function () {
        return this.images;
    };
    GalleryService.prototype.createImage = function (src) {
        var newImage = new image_1.GalleryImage(src);
        this.images.push(newImage);
        console.log(this.images);
    };
    return GalleryService;
}());
exports.GalleryService = GalleryService;
//# sourceMappingURL=gallery.service.js.map