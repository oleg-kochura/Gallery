"use strict";
var Comment = (function () {
    function Comment(author, date, message) {
        if (date === void 0) { date = new Date(); }
        this.author = author;
        this.date = date;
        this.message = message;
    }
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map