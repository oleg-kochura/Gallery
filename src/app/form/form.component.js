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
var comment_1 = require("../shared/comment");
var FormComponent = (function () {
    function FormComponent() {
        this.onAddNewComment = new core_1.EventEmitter();
    }
    FormComponent.prototype.addComment = function (comment) {
        if (this.isValid(comment.value)) {
            this.newComment = new comment_1.Comment(comment.value.author, new Date(), comment.value.message);
            this.onAddNewComment.emit(this.newComment);
        }
    };
    FormComponent.prototype.isValid = function (obj) {
        return Object.keys(obj).every(function (key) { return obj[key]; });
    };
    return FormComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FormComponent.prototype, "onAddNewComment", void 0);
FormComponent = __decorate([
    core_1.Component({
        selector: 'comments-form',
        templateUrl: './form.component.html',
        styleUrls: ['./form.component.css']
    })
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map