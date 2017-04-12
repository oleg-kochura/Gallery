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
var app_component_1 = require("./app.component");
var pictures_list_component_1 = require("./pictures-list/pictures-list.component");
var gallery_item_component_1 = require("./gallery-item/gallery-item.component");
var placeholder_component_1 = require("./placeholder/placeholder.component");
var popup_component_1 = require("./popup/popup.component");
var gallery_service_1 = require("./services/gallery.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            pictures_list_component_1.PicturesListComponent,
            gallery_item_component_1.GalleryItemComponent,
            placeholder_component_1.PlaceholderComponent,
            popup_component_1.PopupComponent
        ],
        providers: [gallery_service_1.GalleryService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map