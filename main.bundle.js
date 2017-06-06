webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n  position: relative;\r\n  width: 1024px;\r\n  height: 768px;\r\n  background: #eceff4;\r\n  margin: auto;\r\n}\r\n\r\n.container {\r\n  width: 974px;\r\n  height: 680px;\r\n  overflow-x: scroll;\r\n}\r\n\r\nh1 {\r\n  color: #8499a7;\r\n  font: bold 24px OpenSans, sans-serif;\r\n  text-transform: uppercase;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <h1>{{title}}</h1>\r\n  <div class=\"container\">\r\n    <pictures-list></pictures-list>\r\n    <!--<placeholder></placeholder>-->\r\n    <popup></popup>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pictures_list_pictures_list_component__ = __webpack_require__("./src/app/pictures-list/pictures-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_packery_js_packery__ = __webpack_require__("./node_modules/packery/js/packery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_packery_js_packery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_packery_js_packery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Welcome to Viseven imagestock';
    }
    AppComponent.prototype.ngAfterViewChecked = function () {
        this.setGrid();
    };
    AppComponent.prototype.setGrid = function () {
        var container = this.container.grid.nativeElement;
        var pckry = new __WEBPACK_IMPORTED_MODULE_2_packery_js_packery___default.a(container, {
            itemSelector: 'gallery-item',
            gutter: 10,
            horizontal: true,
            percentPosition: true,
            transitionDuration: '0.2s'
        });
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__pictures_list_pictures_list_component__["a" /* PicturesListComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pictures_list_pictures_list_component__["a" /* PicturesListComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pictures_list_pictures_list_component__["a" /* PicturesListComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "container", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")],
    })
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pictures_list_pictures_list_component__ = __webpack_require__("./src/app/pictures-list/pictures-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gallery_item_gallery_item_component__ = __webpack_require__("./src/app/gallery-item/gallery-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__placeholder_placeholder_component__ = __webpack_require__("./src/app/placeholder/placeholder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__popup_popup_component__ = __webpack_require__("./src/app/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__form_form_component__ = __webpack_require__("./src/app/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__comments_list_comments_list_component__ = __webpack_require__("./src/app/comments-list/comments-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_gallery_service__ = __webpack_require__("./src/app/services/gallery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_flickrApi_service__ = __webpack_require__("./src/app/services/flickrApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_hammerjs__);
/* unused harmony export CustomMaterialModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// angular-material modules


// components







// services



// custom NgModule, to group all material modules into one module
var CustomMaterialModule = (function () {
    function CustomMaterialModule() {
    }
    return CustomMaterialModule;
}());
CustomMaterialModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdSidenavModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdToolbarModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdSidenavModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdToolbarModule */]],
    })
], CustomMaterialModule);

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            CustomMaterialModule,
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pictures_list_pictures_list_component__["a" /* PicturesListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__gallery_item_gallery_item_component__["a" /* GalleryItemComponent */],
            __WEBPACK_IMPORTED_MODULE_9__placeholder_placeholder_component__["a" /* PlaceholderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__popup_popup_component__["a" /* PopupComponent */],
            __WEBPACK_IMPORTED_MODULE_11__form_form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_12__comments_list_comments_list_component__["a" /* CommentsListComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_gallery_service__["a" /* GalleryService */], __WEBPACK_IMPORTED_MODULE_14__services_flickrApi_service__["a" /* ApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/comments-list/comments-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\r\n  margin: 0;\r\n}\r\n\r\n.esc-button {\r\n  line-height: 13px;\r\n}\r\n\r\n.esc-button span {\r\n  display: block;\r\n  font-size: 10px;\r\n}\r\n\r\n.comments-container {\r\n  height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\n.card-item-avatar {\r\n  /*background: url(\"../../app/shared/img/avat-2.jpg\") center/contain no-repeat;*/\r\n}\r\n\r\nmd-card-header {\r\n  position: relative;\r\n}\r\n\r\n.date {\r\n  font-size: 11px;\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n\r\n.message {\r\n  padding: 0 130px 0 50px;\r\n  font-size: 12px;\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n\r\n.center {\r\n  margin: 130px auto;\r\n  width: 250px;\r\n}\r\n\r\n.center h1 {\r\n  color: rgba(0, 0, 0, 0.54);\r\n  font: 30px Arial;\r\n  text-align: center;\r\n}\r\n\r\n.center i {\r\n  margin: 0 auto;\r\n  font-size: 100px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/comments-list/comments-list.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar *ngIf=\"comments.length\">\r\n  <button md-icon-button class=\"esc-button\" (click)=\"sidenav.toggle()\">\r\n    <i class=\"material-icons md-dark\">close</i>\r\n    <span>ESC</span>\r\n  </button>\r\n  <span class=\"spacer\"></span>\r\n  <h3 class=\"grey\">Comments: <span>{{comments.length}}</span></h3>\r\n</md-toolbar>\r\n<div class=\"comments-container\">\r\n\r\n  <div class=\"center\" *ngIf=\"!comments.length\">\r\n    <h1>Leave your first comment</h1>\r\n    <i class=\"material-icons md-dark\">mail_outline</i>\r\n  </div>\r\n\r\n  <md-card *ngFor=\"let comment of comments\">\r\n    <md-card-header>\r\n      <div md-card-avatar class=\"card-item-avatar\" [ngStyle]=\"{ 'background-image': 'url(' + comment.userIcon + ')' }\"></div>\r\n      <md-card-title>{{comment.authorname}}</md-card-title>\r\n      <span class=\"spacer\"></span>\r\n      <p class=\"date\">{{comment.datecreate | date:'HH:mm:ss'}}</p>\r\n    </md-card-header>\r\n    <md-card-content>\r\n      <p class=\"message\">{{comment._content}}</p>\r\n    </md-card-content>\r\n  </md-card>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/comments-list/comments-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentsListComponent = (function () {
    function CommentsListComponent() {
    }
    return CommentsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], CommentsListComponent.prototype, "comments", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], CommentsListComponent.prototype, "sidenav", void 0);
CommentsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'comments-list',
        template: __webpack_require__("./src/app/comments-list/comments-list.component.html"),
        styles: [__webpack_require__("./src/app/comments-list/comments-list.component.css")]
    })
], CommentsListComponent);

//# sourceMappingURL=comments-list.component.js.map

/***/ }),

/***/ "./src/app/form/form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-comment-form {\r\n  padding: 10px 20px;\r\n}\r\n\r\nmd-input-container {\r\n  width: 50%;\r\n}\r\n\r\n.message-container {\r\n  width: 65%;\r\n}\r\n\r\n.row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.add-comment-form button {\r\n  margin-left: 40px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"add-comment-form\" (ngSubmit)=\"addComment(commentsForm); commentsForm.resetForm()\" #commentsForm=\"ngForm\">\r\n  <md-input-container>\r\n    <input mdInput name=\"author\" ngModel placeholder=\"Nickname\">\r\n  </md-input-container>\r\n  <div class=\"row\">\r\n    <md-input-container class=\"message-container\">\r\n      <textarea mdInput name=\"message\" ngModel placeholder=\"Your comment...\"></textarea>\r\n    </md-input-container>\r\n    <span class=\"spacer\"></span>\r\n    <button md-raised-button color=\"primary\">SEND</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("./src/app/models.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = (function () {
    function FormComponent() {
        this.onAddNewComment = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    FormComponent.prototype.addComment = function (comment) {
        if (this.isValid(comment.value)) {
            this.newComment = new __WEBPACK_IMPORTED_MODULE_1__models__["b" /* Comment */](comment.value.author, new Date(), comment.value.message);
            this.onAddNewComment.emit(this.newComment);
        }
    };
    FormComponent.prototype.isValid = function (obj) {
        return Object.keys(obj).every(function (key) { return obj[key]; });
    };
    return FormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], FormComponent.prototype, "onAddNewComment", void 0);
FormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'comments-form',
        template: __webpack_require__("./src/app/form/form.component.html"),
        styles: [__webpack_require__("./src/app/form/form.component.css")]
    })
], FormComponent);

//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "./src/app/gallery-item/gallery-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n\r\n:host:nth-child(3n+3) {\r\n  width: 236px;\r\n  height: 200px;\r\n}\r\n\r\n:host:nth-child(3n+2) {\r\n  width: 236px;\r\n  height: 410px;\r\n}\r\n\r\n:host:nth-child(3n+1) {\r\n  width: 482px;\r\n  height: 200px;\r\n}\r\n\r\n.gallery-item {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.gallery-item-image {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n.social {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 60px;\r\n  background: #f4f4f3;\r\n  transition: 0.3s ease-out;\r\n  -webkit-transform: translateY(60px);\r\n          transform: translateY(60px);\r\n}\r\n\r\n:host:hover .social {\r\n  transition: 0.3s ease-out;\r\n  -webkit-transform: translateY(0);\r\n          transform: translateY(0);\r\n}\r\n\r\n.social div {\r\n  position: relative;\r\n}\r\n\r\n.social > div:first-of-type i {\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n}\r\n\r\n.social .counter {\r\n  width: 17px;\r\n  height: 17px;\r\n  color: #0d7f8a;\r\n  font: 11px OpenSans;\r\n  line-height: 13px;\r\n  text-align: center;\r\n  border: 2px solid rgba(0, 0, 0, 0.54);\r\n  border-radius: 50%;\r\n  background: rgba(255,255,255,1);\r\n  box-sizing: border-box;\r\n}\r\n\r\n.social > div:first-child {\r\n  float: left;\r\n  margin: 15px 0 0 32px;\r\n}\r\n\r\n.social > div:nth-child(2),\r\n.social > div:nth-child(3) { float: right; }\r\n\r\n.social > div:nth-child(2) { margin: 15px 15px 0 0; }\r\n.social > div:nth-child(3) { margin: 15px 37px 0 0; }\r\n\r\n.material-icons {\r\n  position: absolute;\r\n  top: 2px;\r\n  left: -20px;\r\n  font-size: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/gallery-item/gallery-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-item\" (click)=\"openInfo()\">\r\n  <div class=\"gallery-item-image\" [ngStyle]=\"{ 'background-image': 'url(' + galleryItem.src + ')' }\"></div>\r\n</div>\r\n<div class=\"social\">\r\n  <div>\r\n    <i class=\"material-icons md-dark\">comment</i>\r\n    <div class=\"counter\">{{galleryItem.comments.length}}</div>\r\n  </div>\r\n  <div>\r\n    <i class=\"material-icons md-dark\">thumb_up</i>\r\n    <div class=\"counter\">{{galleryItem.likes}}</div>\r\n  </div>\r\n  <div>\r\n    <i class=\"material-icons md-dark\">thumb_down</i>\r\n    <div class=\"counter\">{{galleryItem.dislikes}}</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/gallery-item/gallery-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("./src/app/models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_gallery_service__ = __webpack_require__("./src/app/services/gallery.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryItemComponent = (function () {
    function GalleryItemComponent(galleryService) {
        this.galleryService = galleryService;
    }
    GalleryItemComponent.prototype.openInfo = function () {
        this.galleryService.openPopup(this.galleryItem);
    };
    return GalleryItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models__["a" /* GalleryImage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models__["a" /* GalleryImage */]) === "function" && _a || Object)
], GalleryItemComponent.prototype, "galleryItem", void 0);
GalleryItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'gallery-item',
        template: __webpack_require__("./src/app/gallery-item/gallery-item.component.html"),
        styles: [__webpack_require__("./src/app/gallery-item/gallery-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_gallery_service__["a" /* GalleryService */]) === "function" && _b || Object])
], GalleryItemComponent);

var _a, _b;
//# sourceMappingURL=gallery-item.component.js.map

/***/ }),

/***/ "./src/app/models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryImage; });
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

var GalleryImage = (function () {
    function GalleryImage(src, id) {
        this.comments = [];
        this.likes = 0;
        this.dislikes = 0;
        this.src = src || '';
        this.id = id;
    }
    return GalleryImage;
}());

//# sourceMappingURL=models.js.map

/***/ }),

/***/ "./src/app/pictures-list/pictures-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: block;\r\n}\r\n.grid {\r\n  height: 640px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/pictures-list/pictures-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div #grid class=\"gallery-list grid\">\r\n  <gallery-item *ngFor=\"let img of images | async\" [galleryItem]=\"img\"></gallery-item>\r\n  <placeholder></placeholder>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pictures-list/pictures-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__ = __webpack_require__("./src/app/services/gallery.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicturesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PicturesListComponent = (function () {
    function PicturesListComponent(galleryService) {
        this.galleryService = galleryService;
    }
    PicturesListComponent.prototype.ngOnInit = function () {
        var photosPerPage = 10;
        this.galleryService.getPhotos(photosPerPage);
        this.images = this.galleryService.photos;
    };
    return PicturesListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChild */])('grid'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], PicturesListComponent.prototype, "grid", void 0);
PicturesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'pictures-list',
        template: __webpack_require__("./src/app/pictures-list/pictures-list.component.html"),
        styles: [__webpack_require__("./src/app/pictures-list/pictures-list.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__["a" /* GalleryService */]) === "function" && _b || Object])
], PicturesListComponent);

var _a, _b;
//# sourceMappingURL=pictures-list.component.js.map

/***/ }),

/***/ "./src/app/placeholder/placeholder.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: block;\r\n  position: absolute;\r\n  right: -246px;\r\n  width: 236px;\r\n  height: 200px;\r\n  padding: 8px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.placeholder input {\r\n  display: none;\r\n}\r\n\r\n.placeholder {\r\n  height: 100%;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  background-color: #efefef;\r\n  background-color: rgba(0, 0, 0, 0.02);\r\n  cursor: pointer;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  outline: 3px dashed #ccc;\r\n  outline-offset: 5px;\r\n}\r\n\r\n.placeholder i {\r\n  pointer-events: none;\r\n}\r\n\r\n.placeholder,\r\n.placeholder i {\r\n  transition: all 100ms ease-in;\r\n}\r\n\r\n.placeholder i {\r\n  color: #eee;\r\n  color: rgba(0, 0, 0, 0.2);\r\n  font-size: 5em;\r\n}\r\n\r\n\r\n/*.placeholder {*/\r\n  /*display: block;*/\r\n  /*position: absolute;*/\r\n  /*width: 236px;*/\r\n  /*height: 200px;*/\r\n  /*background: #fff;*/\r\n  /*right: -246px;*/\r\n/*}*/\r\n\r\n/*.placeholder:before {*/\r\n  /*position: absolute;*/\r\n  /*content: '';*/\r\n  /*width: 50px;*/\r\n  /*height: 50px;*/\r\n  /*!*background: url(../shared/img/plus-icon.png) no-repeat 50% #21b8c6;*!*/\r\n  /*border-radius: 50%;*/\r\n  /*top: 64px;*/\r\n  /*left: 70px;*/\r\n/*}*/\r\n\r\n/*.placeholder input {*/\r\n  /*display: none;*/\r\n/*}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/placeholder/placeholder.component.html":
/***/ (function(module, exports) {

module.exports = "<label class=\"placeholder\">\r\n  <i class=\"material-icons icon icon-upload\">file_upload</i>\r\n  <input type=\"file\" name=\"file\" accept=\"image/*\"\r\n         (change)=\"handleInputChange($event)\">\r\n</label>\r\n\r\n<!--<label class=\"placeholder\">Add your picture-->\r\n  <!--<input type=\"file\" (change)=\"onChange($event)\">-->\r\n<!--</label>-->\r\n"

/***/ }),

/***/ "./src/app/placeholder/placeholder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__ = __webpack_require__("./src/app/services/gallery.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceholderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'placeholder',
        template: __webpack_require__("./src/app/placeholder/placeholder.component.html"),
        styles: [__webpack_require__("./src/app/placeholder/placeholder.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__["a" /* GalleryService */]) === "function" && _a || Object])
], PlaceholderComponent);

var _a;
//# sourceMappingURL=placeholder.component.js.map

/***/ }),

/***/ "./src/app/popup/popup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".popup {\r\n  position: absolute;\r\n  /*top: 50%;*/\r\n  /*left: 50%;*/\r\n  /*transform: translate(-50%, -50%);*/\r\n\r\n  top: 62px;\r\n  left: 107px;\r\n  width: 810px;\r\n  background: #fff;\r\n  box-sizing: border-box;\r\n}\r\n\r\nmd-sidenav {\r\n  width: 50%;\r\n}\r\n\r\n.image-wrapper {\r\n  width: 100%;\r\n  height: 515px;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.like,\r\n.dislike {\r\n  width: 50px;\r\n  height: 50px;\r\n  min-width: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/popup/popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"popup\" *ngIf=\"opened\">\r\n  <md-sidenav-container class=\"sidenav-container\">\r\n\r\n    <md-toolbar>\r\n      <span class=\"spacer\"></span>\r\n      <button md-icon-button (click)=\"close()\">\r\n        <i class=\"material-icons\">close</i>\r\n      </button>\r\n    </md-toolbar>\r\n\r\n    <div class=\"image-wrapper\" [ngStyle]=\"{ 'background-image': 'url(' + data.src + ')'  }\"></div>\r\n    <md-toolbar>\r\n      <button md-icon-button class=\"like\" (click)=\"inc('likes')\">\r\n        <i class=\"material-icons md-dark\">thumb_up</i>\r\n      </button>\r\n      <button md-icon-button class=\"dislike\" (click)=\"inc('dislikes')\">\r\n        <i class=\"material-icons md-dark\">thumb_down</i>\r\n      </button>\r\n      <span class=\"spacer\"></span>\r\n      <button md-mini-fab color=\"primary\" (click)=\"sidenav.toggle()\">\r\n        <i class=\"material-icons md-light\">add</i>\r\n      </button>\r\n    </md-toolbar>\r\n\r\n    <md-sidenav #sidenav mode=\"over\" opened=\"false\" align=\"end\">\r\n      <comments-list [comments]=\"data.comments\" [sidenav]=\"sidenav\"></comments-list>\r\n      <comments-form (onAddNewComment)=\"addNewComment($event)\"></comments-form>\r\n    </md-sidenav>\r\n\r\n  </md-sidenav-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/popup/popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__ = __webpack_require__("./src/app/services/gallery.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'popup',
        template: __webpack_require__("./src/app/popup/popup.component.html"),
        styles: [__webpack_require__("./src/app/popup/popup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__["a" /* GalleryService */]) === "function" && _a || Object])
], PopupComponent);

var _a;
//# sourceMappingURL=popup.component.js.map

/***/ }),

/***/ "./src/app/services/flickrApi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("./src/app/models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.api = {
            baseUrl: 'https://api.flickr.com/services/rest/?method=',
            api_key: '98a0e431c34ee80634479fda5b7971d3' //my private api_key for flickr.com  NOT FOR USE!
        };
    }
    //Api method:  flickr.interestingness.getList
    ApiService.prototype.getPhotos = function (per_page) {
        return this.http.get(this.api.baseUrl + "flickr.interestingness.getList&api_key=" + this.api.api_key + "&per_page=" + per_page + "&format=json&nojsoncallback=1")
            .map(function (res) {
            var photosArr = res.json().photos.photo;
            var newArr = photosArr.map(function (item) {
                var src = "https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_b.jpg";
                var newImage = new __WEBPACK_IMPORTED_MODULE_2__models__["a" /* GalleryImage */](src, item.id);
                return newImage;
            });
            return newArr;
        });
    };
    ApiService.prototype.getCommentsList = function (id) {
        var options = {
            photo_id: id
        };
        return this.http.get(this.api.baseUrl + "flickr.photos.comments.getList&api_key=" + this.api.api_key + "&photo_id=" + options.photo_id + "&format=json&nojsoncallback=1")
            .map(function (res) { return res.json().comments.comment; });
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=flickrApi.service.js.map

/***/ }),

/***/ "./src/app/services/gallery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("./src/app/models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flickrApi_service__ = __webpack_require__("./src/app/services/flickrApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GalleryService = (function () {
    function GalleryService(api) {
        this.api = api;
        this.dataStore = {
            photos: []
        };
        this._photos = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this._popupData = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.photos = this._photos.asObservable();
        this.popupData = this._popupData.asObservable();
    }
    GalleryService.prototype.getPhotos = function (per_page) {
        var _this = this;
        this.api.getPhotos(per_page).subscribe(function (res) {
            _this.dataStore.photos = res;
            _this._photos.next(res);
        });
    };
    GalleryService.prototype.getCommentsList = function (id) {
        return this.api.getCommentsList(id);
    };
    GalleryService.prototype.createImage = function (src) {
        var newImage = new __WEBPACK_IMPORTED_MODULE_1__models__["a" /* GalleryImage */](src);
        this.dataStore.photos.push(newImage);
        this._photos.next(this.dataStore.photos);
    };
    GalleryService.prototype.openPopup = function (data) {
        var _this = this;
        this._popupData.next(data);
        this.getCommentsList(data.id)
            .subscribe(function (comments) {
            data.comments = _this.setUsersIcons(comments);
            _this._popupData.next(data);
        });
    };
    GalleryService.prototype.setUsersIcons = function (data) {
        var baseIconUrl = "https://www.flickr.com/images/buddyicon.gif";
        data.forEach(function (item) {
            if (item.iconfarm && item.iconserver) {
                item.userIcon = "http://farm" + item.iconfarm + ".staticflickr.com/" + item.iconserver + "/buddyicons/" + item.author + ".jpg";
            }
            else {
                item.userIcon = baseIconUrl;
            }
        });
        return data;
    };
    return GalleryService;
}());
GalleryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__flickrApi_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__flickrApi_service__["a" /* ApiService */]) === "function" && _a || Object])
], GalleryService);

var _a;
//# sourceMappingURL=gallery.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map