webpackJsonp([11],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_filter__ = __webpack_require__(414);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuFilterPageModule", function() { return MenuFilterPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuFilterPageModule = (function () {
    function MenuFilterPageModule() {
    }
    return MenuFilterPageModule;
}());
MenuFilterPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__menu_filter__["a" /* MenuFilterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu_filter__["a" /* MenuFilterPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__menu_filter__["a" /* MenuFilterPage */]
        ]
    })
], MenuFilterPageModule);

//# sourceMappingURL=menu-filter.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuFilterPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuFilterPage = (function () {
    function MenuFilterPage(navParams, viewCtrl) {
        var _this = this;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.categories = [];
        // passed in array of category names that should be excluded (unchecked)
        var excludedCategoryNames = this.navParams.data.excludeCategories;
        var fixedMenu = this.navParams.data.fixedMenu;
        fixedMenu.forEach(function (category) {
            _this.categories.push({
                name: category.name,
                isChecked: (excludedCategoryNames.indexOf(category.name) === -1)
            });
        });
    }
    MenuFilterPage.prototype.resetFilters = function () {
        // reset all of the toggles to be checked
        this.categories.forEach(function (category) {
            category.isChecked = true;
        });
    };
    MenuFilterPage.prototype.applyFilters = function () {
        // Pass back a new array of category names to exclude
        var excludedCategoryNames = this.categories.filter(function (c) { return !c.isChecked; }).map(function (c) { return c.name; });
        this.dismiss(excludedCategoryNames);
    };
    MenuFilterPage.prototype.dismiss = function (data) {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss(data);
    };
    return MenuFilterPage;
}());
MenuFilterPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-menu-filter',template:/*ion-inline-start:"C:\Users\someb\Documents\Sites\aiguaria-takeaway\src\pages\menu-filter\menu-filter.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">Cancelar</button>\n\n    </ion-buttons>\n\n\n\n    <ion-title>\n\n      Filtrar por categoria\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button (click)="applyFilters()" strong>Ok</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n\n\n  <ion-list>\n\n    <ion-list-header>Categorias</ion-list-header>\n\n\n\n    <ion-item *ngFor="let category of categories" [attr.track]="category.name | lowercase">\n\n      <span item-left class="dot"></span>\n\n      <ion-label>{{category.name}}</ion-label>\n\n      <ion-toggle [(ngModel)]="category.isChecked" color="secondary"></ion-toggle>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n\n      Remover filtros\n\n    </button>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\someb\Documents\Sites\aiguaria-takeaway\src\pages\menu-filter\menu-filter.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], MenuFilterPage);

//# sourceMappingURL=menu-filter.js.map

/***/ })

});
//# sourceMappingURL=11.main.js.map