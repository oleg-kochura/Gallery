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
//# sourceMappingURL=comment.js.map