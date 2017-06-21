webpackJsonp([12],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(412);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(navCtrl, alertCtrl, UserService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.UserService = UserService;
        this.loadingCtrl = loadingCtrl;
        this.login = {};
        this.submitted = false;
        // this.loading = this.loadingCtrl.create();
    }
    LoginPage.prototype.onLogin = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.loading = this.loadingCtrl.create();
            this.loading.present().then(function () {
                _this.UserService.login(_this.login.email, _this.login.password).then(function (value) {
                    _this.loading.dismiss();
                    _this.navCtrl.setRoot('MenuPage');
                }, function (error) {
                    _this.loading.dismiss();
                    switch (error.status) {
                        case 400:
                            _this.alert("Erro", "Password errada");
                            break;
                        case 404:
                            _this.alert("Erro", "O email não está registado");
                            break;
                        default:
                            _this.alert("Erro", "Ocorreu um erro");
                            break;
                    }
                });
            });
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push('SignupPage');
    };
    LoginPage.prototype.recoverPassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Recuperar password',
            buttons: [
                'Cancelar'
            ]
        });
        alert.addInput({
            name: 'email',
            value: this.login.email,
            placeholder: 'Email'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.UserService.recoverPassword(data.email).then(function (data) {
                    _this.alert('Sucesso', 'Pedido efectuado com sucesso. A nova password foi enviada para o seu email.');
                }, function (error) {
                    switch (error.status) {
                        case 404:
                            _this.alert('Erro', 'O email não está registado.');
                            break;
                        default:
                            _this.alert('Erro', 'Ocorreu um erro a alterar a password.');
                            break;
                    }
                });
            }
        });
        alert.present();
    };
    LoginPage.prototype.alert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/home/lribeiro/Sites/aiguaria-takeaway/src/pages/login/login.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="logo">\n		<h1>A Iguaria</h1>\n	</div>\n\n	<form #loginForm="ngForm" novalidate>\n		<ion-list>\n			<ion-item>\n				<ion-label stacked color="primary">Email</ion-label>\n				<ion-input [(ngModel)]="login.email" name="email" type="email" email #email="ngModel" spellcheck="false" autocapitalize="off"\n					required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n				Email obrigatório.\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Password</ion-label>\n				<ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Password obrigatória.\n			</p>\n		</ion-list>\n\n		<ion-row responsive-sm>\n			<ion-col col-12 padding-left padding-right>\n				<button ion-button (click)="onLogin(loginForm)" type="submit" block>Login</button>\n			</ion-col>\n			<ion-col col-12 padding-left padding-right>\n				<button ion-button (click)="onSignup()" color="light" block>Registar</button>\n			</ion-col>\n			<ion-col col-12 padding-left padding-right>\n				<button ion-button (click)="recoverPassword()" color="light" block>Recuperar Password</button>\n			</ion-col>\n		</ion-row>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/lribeiro/Sites/aiguaria-takeaway/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=12.main.js.map