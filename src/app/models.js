"use strict";
var Comment = (function () {
    function Comment(authorname, datecreate, _content, userIcon) {
        if (userIcon === void 0) { userIcon = 'https://www.flickr.com/images/buddyicon.gif'; }
        this.authorname = authorname;
        this.datecreate = datecreate;
        this._content = _content;
        this.userIcon = userIcon;
    }
    return Comment;
}());
exports.Comment = Comment;
var GalleryImage = (function () {
    function GalleryImage(src, id) {
        this.comments = [];
        this.likes = 0;
        this.dislikes = 0;
        this.ratio = 'default';
        this.src = src || '';
        this.id = id;
    }
    return GalleryImage;
}());
exports.GalleryImage = GalleryImage;
//# sourceMappingURL=models.js.map