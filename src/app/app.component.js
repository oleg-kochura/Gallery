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
var pictures_list_component_1 = require("./pictures-list/pictures-list.component");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Welcome to Viseven imagestock';
    }
    AppComponent.prototype.ngAfterViewChecked = function () {
        // this.setGrid();
    };
    AppComponent.prototype.setGrid = function () {
        var container = this.container.grid.nativeElement;
        var pckry = new Packery(container, {
            itemSelector: 'gallery-item',
            gutter: 10,
            transitionDuration: '0.2s'
        });
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(pictures_list_component_1.PicturesListComponent),
    __metadata("design:type", pictures_list_component_1.PicturesListComponent)
], AppComponent.prototype, "container", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map