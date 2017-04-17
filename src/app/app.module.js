"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
// angular-material modules
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
// components
var app_component_1 = require("./app.component");
var pictures_list_component_1 = require("./pictures-list/pictures-list.component");
var gallery_item_component_1 = require("./gallery-item/gallery-item.component");
var placeholder_component_1 = require("./placeholder/placeholder.component");
var popup_component_1 = require("./popup/popup.component");
var form_component_1 = require("./form/form.component");
var comments_list_component_1 = require("./comments-list/comments-list.component");
// services
var gallery_service_1 = require("./services/gallery.service");
require("hammerjs");
// custom NgModule, to group all material modules into one module
var CustomMaterialModule = (function () {
    function CustomMaterialModule() {
    }
    return CustomMaterialModule;
}());
CustomMaterialModule = __decorate([
    core_1.NgModule({
        imports: [material_1.MdButtonModule, material_1.MdInputModule, material_1.MdIconModule, material_1.MdCardModule, material_1.MdSidenavModule, material_1.MdToolbarModule],
        exports: [material_1.MdButtonModule, material_1.MdInputModule, material_1.MdIconModule, material_1.MdCardModule, material_1.MdSidenavModule, material_1.MdToolbarModule],
    })
], CustomMaterialModule);
exports.CustomMaterialModule = CustomMaterialModule;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            animations_1.BrowserAnimationsModule,
            CustomMaterialModule,
            http_2.JsonpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            pictures_list_component_1.PicturesListComponent,
            gallery_item_component_1.GalleryItemComponent,
            placeholder_component_1.PlaceholderComponent,
            popup_component_1.PopupComponent,
            form_component_1.FormComponent,
            comments_list_component_1.CommentsListComponent
        ],
        providers: [gallery_service_1.GalleryService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map