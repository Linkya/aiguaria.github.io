webpackJsonp([13],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(408);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountPageModule = (function () {
    function AccountPageModule() {
    }
    return AccountPageModule;
}());
AccountPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]
        ]
    })
], AccountPageModule);

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountPage = (function () {
    function AccountPage(alertCtrl, nav, userService, modalCtrl, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.userService = userService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    AccountPage.prototype.ngAfterViewInit = function () {
        // this.userService.getUser().then(data => {
        // 	this.user = data;
        // })
    };
    AccountPage.prototype.ionViewDidLoad = function () {
        // this.cartService.set(this.cart);
        this.loadUser();
    };
    AccountPage.prototype.loadUser = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create();
        this.loading.present().then(function () {
            _this.userService.get()
                .then(function (data) {
                _this.loading.dismiss();
                _this.user = data;
            }, function (error) {
                _this.loading.dismiss();
                // console.log(error);
            });
        });
    };
    AccountPage.prototype.presentUpdate = function () {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["b" /* User */](this.user);
        var modal = this.modalCtrl.create('AccountUpdatePage', { user: user });
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.user = data;
            }
            console.log(data);
            console.log(_this.user);
        });
    };
    // Present an alert with the current username populated
    // clicking OK will update the username and display it
    // clicking Cancel will close the alert and do nothing
    AccountPage.prototype.changePassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alterar password',
            buttons: [
                'Cancelar'
            ]
        });
        alert.addInput({
            name: 'password',
            value: this.user.password,
            placeholder: 'Password'
        });
        alert.addInput({
            name: 'newPassword',
            value: this.user.newPassword,
            placeholder: 'Nova Password'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.loading = _this.loadingCtrl.create();
                _this.loading.present().then(function () {
                    _this.userService.changePassword(data.password, data.newPassword).then(function (data) {
                        _this.loading.dismiss();
                        _this.alert('Sucesso', 'Password alterada com sucesso.');
                    }, function (error) {
                        _this.loading.dismiss();
                        switch (error.status) {
                            case 403:
                                _this.alert('Erro', 'Password errada.');
                                break;
                            default:
                                _this.alert('Erro', 'Ocorreu um erro a alterar a password.');
                                break;
                        }
                    });
                });
            }
        });
        alert.present();
    };
    AccountPage.prototype.logout = function () {
        this.userService.logout();
        this.nav.setRoot('LoginPage');
    };
    AccountPage.prototype.alert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    return AccountPage;
}());
AccountPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"/home/lribeiro/Sites/aiguaria-takeaway/src/pages/account/account.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Conta</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div padding text-center *ngIf="user">\n	 	<ion-list no-lines>\n			<ion-item>\n				<h1>{{user.name}}</h1>\n			</ion-item>\n			<ion-item>\n				<ion-icon name="mail" item-left></ion-icon>\n				<ion-label>{{user.email}}</ion-label>\n			</ion-item>\n			<ion-item>\n				<ion-icon name="call" item-left></ion-icon>\n				<ion-label>{{user.mobile}}</ion-label>\n			</ion-item>\n			<ion-item>\n				<ion-icon name="locate" item-left></ion-icon>\n				<ion-label>\n					{{user.address}}\n					<br>\n					{{user.postal_code}} {{user.locality}}\n				</ion-label>\n			</ion-item>\n		</ion-list>\n\n		<ion-row responsive-sm>\n			<ion-col col-12>\n				<button ion-button (click)="presentUpdate()" block>Alterar dados</button>\n			</ion-col>\n			<ion-col col-12>\n				<button ion-button color="light" (click)="changePassword()" block>Alterar password</button>\n			</ion-col>\n			<ion-col col-12>\n				<button ion-button color="light" (click)="logout()" block>Logout</button>\n			</ion-col>\n		</ion-row>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/lribeiro/Sites/aiguaria-takeaway/src/pages/account/account.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=13.main.js.map