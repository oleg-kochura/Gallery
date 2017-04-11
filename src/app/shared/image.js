"use strict";
var GalleryImage = (function () {
    function GalleryImage(src) {
        this.comments = [];
        this.likes = 0;
        this.dislikes = 0;
        this.src = "url(" + src + ")";
    }
    return GalleryImage;
}());
exports.GalleryImage = GalleryImage;
//# sourceMappingURL=image.js.map