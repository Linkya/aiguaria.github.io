webpackJsonp([3],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(415);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = (function () {
    function MenuPageModule() {
    }
    return MenuPageModule;
}());
MenuPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]
        ]
    })
], MenuPageModule);

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var of_1 = __webpack_require__(282);
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayObservable_1 = __webpack_require__(199);
exports.of = ArrayObservable_1.ArrayObservable.of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsService = (function () {
    function SettingsService(http, userService) {
        this.http = http;
        this.userService = userService;
        // API_URL = 'http://172.24.62.104/link.eddmi.com/index.php/takeaway/';
        this.API_URL = 'https://link.eddmi.com/takeaway/';
        this.ENTITY_ID = 277;
        // console.log('Hello SettingsService Provider');
    }
    SettingsService.prototype.get = function () {
        var _this = this;
        if (this.about) {
            return Promise.resolve(this.about);
        }
        return new Promise(function (resolve, reject) {
            var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': _this.ENTITY_ID });
            var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: _headers });
            var url = _this.API_URL + "settings/one";
            _this.http.get(url, _options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.about = data.data.settings;
                // console.log(this.about);
                resolve(_this.about);
            }, function (error) {
                reject(error);
            });
        });
    };
    SettingsService.prototype.getPath = function () {
        var _this = this;
        if (this.path) {
            return Promise.resolve(this.path);
        }
        return new Promise(function (resolve, reject) {
            var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': _this.ENTITY_ID });
            var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: _headers });
            var url = _this.API_URL + "settings/path/";
            _this.http.get(url, _options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.path = data.data.settings.path;
                resolve(_this.path);
            }, function (error) {
                reject(error);
            });
        });
    };
    SettingsService.prototype.getFixedFee = function () {
        var _this = this;
        if (this.path) {
            return Promise.resolve(this.path);
        }
        return new Promise(function (resolve, reject) {
            _this.userService.getToken().then(function (data) {
                var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': _this.ENTITY_ID });
                var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: _headers });
                var url = _this.API_URL + "settings/fixedFee/";
                _this.http.get(url, _options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    var fee = data.data.fee;
                    resolve(fee);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    SettingsService.prototype.getFees = function () {
        var _this = this;
        if (this.path) {
            return Promise.resolve(this.path);
        }
        return new Promise(function (resolve, reject) {
            _this.userService.getToken().then(function (data) {
                var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': _this.ENTITY_ID });
                var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: _headers });
                var url = _this.API_URL + "settings/fees/";
                _this.http.get(url, _options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    var fees = data.data.fees;
                    resolve(fees);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    SettingsService.prototype.getOpeningTimes = function () {
        var _this = this;
        if (this.path) {
            return Promise.resolve(this.path);
        }
        return new Promise(function (resolve, reject) {
            _this.userService.getToken().then(function (data) {
                var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': _this.ENTITY_ID });
                var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: _headers });
                var url = _this.API_URL + "settings/schedule/";
                _this.http.get(url, _options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    var opening_times = data.data;
                    if (data.data) {
                        opening_times = data.data.opening_times;
                    }
                    resolve(opening_times);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    SettingsService.prototype.computeTotalDistance = function (result) {
        var total = 0;
        var myroute = result.routes[0];
        for (var i = 0; i < myroute.legs.length; i++) {
            total += myroute.legs[i].distance.value;
        }
        total = total / 1000;
        return total;
    };
    SettingsService.prototype.getDistance = function (address) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getPath().then(function (data) {
                var decodedPath = google.maps.geometry.encoding.decodePath(data);
                var qt = { lat: 41.3354534, lng: -8.5601993 };
                var response = {
                    status: "",
                    valid: "",
                    distance: 0,
                    address: "",
                    locality: ""
                };
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({ 'address': address }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var request = {
                            destination: results[0].geometry.location,
                            origin: qt,
                            travelMode: google.maps.TravelMode.DRIVING
                        };
                        var locality = results[0].address_components[1].long_name;
                        var address = results[0].formatted_address;
                        var directionsService = new google.maps.DirectionsService();
                        directionsService.route(request, function (result, status) {
                            if (status == google.maps.DirectionsStatus.OK) {
                                var polygon = new google.maps.Polygon({ paths: decodedPath });
                                response.valid = google.maps.geometry.poly.containsLocation(results[0].geometry.location, polygon);
                                if (response.valid) {
                                    for (var i = 0; i < result.routes[0].legs.length; i++) {
                                        response.distance += result.routes[0].legs[i].distance.value;
                                    }
                                    response.distance = response.distance / 1000;
                                }
                                response.status = "success";
                                response.address = address;
                                response.locality = locality;
                                // console.log(response.distance, response.address);
                                resolve(response);
                            }
                            else {
                                response.status = "error";
                                reject(response);
                            }
                        });
                    }
                    else {
                        response.status = "error";
                        reject(response);
                    }
                });
            });
        });
    };
    ;
    return SettingsService;
}());
SettingsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
], SettingsService);

//# sourceMappingURL=settings-service.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Cart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Cart = (function () {
    function Cart() {
        this.items = [];
        this.totalPrice = 0;
        this.totalQuantity = 0;
        this.items = [];
    }
    return Cart;
}());

var Order = (function () {
    function Order() {
        this.payment_method_id = null;
        this.postal_code = null;
        this.hour = null;
    }
    return Order;
}());

var CartService = (function () {
    // API_URL = 'http://localhost/quero-takeaway/index.php/';
    function CartService(events, storage, http) {
        this.events = events;
        this.storage = storage;
        this.http = http;
        // API_URL = 'http://172.24.62.104/link.eddmi.com/index.php/takeaway/';
        this.API_URL = 'https://link.eddmi.com/takeaway/';
        this.ENTITY_ID = 277;
    }
    CartService.prototype.addItem = function (item, measure) {
        var _this = this;
        return this.get().then(function (cart) {
            // console.log(cart);
            var auxItem = cart.items.find(function (p) { return p.id === item.id && p.measure_name === measure.name; });
            if (!auxItem) {
                var newItem = item;
                newItem.measure_name = measure.name;
                newItem.price = measure.value;
                newItem.quantity = 1;
                cart.totalQuantity++;
                cart.items.push(newItem);
            }
            else {
                var index = cart.items.indexOf(auxItem);
                cart.items[index].quantity++;
            }
            cart.totalPrice += Number(measure.value);
            cart.totalPrice = Number(cart.totalPrice.toFixed(2));
            _this.set(cart);
            return cart;
        });
    };
    CartService.prototype.incrementQuantity = function (item) {
        var _this = this;
        return this.get().then(function (cart) {
            // console.log(cart);
            var auxItem = cart.items.find(function (p) { return p.id === item.id && p.measure_name === item.measure_name; });
            var index = cart.items.indexOf(auxItem);
            cart.items[index].quantity++;
            cart.totalPrice += Number(cart.items[index].price);
            cart.totalPrice = Number(cart.totalPrice.toFixed(2));
            _this.set(cart);
            return cart;
        });
    };
    CartService.prototype.decrementQuantity = function (item) {
        var _this = this;
        return this.get().then(function (cart) {
            var auxItem = cart.items.find(function (p) { return p.id === item.id && p.measure_name === item.measure_name; });
            var index = cart.items.indexOf(auxItem);
            if (cart.items[index].quantity > 1) {
                cart.items[index].quantity--;
                cart.totalPrice -= Number(cart.items[index].price);
                cart.totalPrice = Number(cart.totalPrice.toFixed(2));
                _this.set(cart);
            }
            return cart;
        });
    };
    CartService.prototype.removeItem = function (item) {
        var _this = this;
        return this.get().then(function (cart) {
            var auxItem = cart.items.find(function (p) { return p.id === item.id && p.measure_name === item.measure_name; });
            var index = cart.items.indexOf(auxItem);
            if (index > -1) {
                cart.totalQuantity--;
                cart.totalPrice -= auxItem.quantity * Number(auxItem.price);
                cart.totalPrice = Number(cart.totalPrice.toFixed(2));
                cart.items.splice(index, 1);
            }
            _this.set(cart);
            return cart;
        });
    };
    CartService.prototype.set = function (cart) {
        this.storage.set('cart', cart);
    };
    ;
    CartService.prototype.get = function () {
        var _this = this;
        return this.storage.get('cart').then(function (value) {
            if (value) {
                return value;
            }
            else {
                var cart = new Cart();
                _this.set(cart);
                return cart;
            }
        });
    };
    ;
    CartService.prototype.paymentMethods = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var url = _this.API_URL + '/payment/all';
            var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': _this.ENTITY_ID });
            var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: _headers });
            _this.http.get(url, _options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    return CartService;
}());
CartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]])
], CartService);

//# sourceMappingURL=cart-service.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderService = (function () {
    function OrderService(http, userService) {
        this.http = http;
        this.userService = userService;
        // API_URL = 'http://172.24.62.104/link.eddmi.com/index.php/takeaway/';
        this.API_URL = 'https://link.eddmi.com/takeaway/';
        // console.log('Hello OrderService Provider');
    }
    OrderService.prototype.all = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getToken().then(function (data) {
                var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': data });
                var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: _headers });
                var url = _this.API_URL + 'order/all/';
                _this.http.get(url, _options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.orders = data.data.orders;
                    resolve(_this.orders);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    OrderService.prototype.create = function (order) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getToken().then(function (data) {
                var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': data });
                var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: _headers });
                var url = _this.API_URL + 'order/new';
                _this.http.post(url, order, _options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    // console.log(data);
                    resolve(data);
                }, function (error) {
                    // console.log(error);
                    reject(error);
                });
            });
        });
    };
    ;
    return OrderService;
}());
OrderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
], OrderService);

//# sourceMappingURL=order-service.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        // API_URL = 'http://172.24.62.104/link.eddmi.com/index.php/takeaway/';
        this.API_URL = 'https://link.eddmi.com/takeaway/';
        this.ENTITY_ID = 277;
        // console.log('Hello ProductService Provider');
    }
    ProductService.prototype.getFixed = function (local) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.API_URL + 'product/fixed?local=' + local;
            var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': _this.ENTITY_ID });
            var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: _headers });
            _this.http.get(url, _options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.fixedMenu = _this.organizeByCategory(data.data.products);
                resolve(_this.fixedMenu);
            }, function (error) {
                // console.log(error);
                reject(error);
            });
        });
    };
    ProductService.prototype.getDaily = function (local) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.API_URL + 'product/daily?local=' + local;
            var _headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': _this.ENTITY_ID });
            var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: _headers });
            _this.http.get(url, _options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.dailyMenu = _this.organizeByCategory(data.data.products);
                resolve(_this.dailyMenu);
            }, function (error) {
                // console.log(error);
                reject(error);
            });
        });
    };
    ProductService.prototype.organizeByCategory = function (products) {
        var auxCategory = '';
        var organized = [];
        products.forEach(function (product) {
            if (!(organized.find(function (p) { return p.name === product.category; }))) {
                auxCategory = product.category;
                var group = {
                    name: auxCategory,
                    items: products.filter(function (p) { return p.category === auxCategory; })
                };
                organized.push(group);
            }
        });
        return organized;
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]])
], ProductService);

//# sourceMappingURL=menu-service.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_menu_service__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings_service__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_cart_service__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_order_service__ = __webpack_require__(400);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
    To learn how to use third party libs in an
    Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';





var MenuPage = (function () {
    function MenuPage(alertCtrl, app, loadingCtrl, modalCtrl, navCtrl, toastCtrl, productService, cartService, orderService, user, plt, storage, settingsService) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.productService = productService;
        this.cartService = cartService;
        this.orderService = orderService;
        this.user = user;
        this.plt = plt;
        this.storage = storage;
        this.settingsService = settingsService;
        this.queryText = '';
        this.segment = 'daily';
        this.excludeCategories = [];
        this.shownSessions = [];
        this.groups = [];
        this.fixedMenu = [];
        this.dailyMenu = [];
        this.cart = new __WEBPACK_IMPORTED_MODULE_6__providers_cart_service__["c" /* Cart */]();
        this.cartService.get().then(function (cart) {
            _this.cart = cart;
        });
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.app.setTitle('menu');
        // this.cartService.set(this.cart);
        this.user.hasLoggedIn().then(function (data) {
            // console.log("user", data);
        });
        if (this.plt.is('core')) {
            this.platform = "desktop";
        }
        else if (this.plt.is('ios')) {
            this.platform = "ios";
        }
        else {
            this.platform = "android";
        }
        var alert = this.alertCtrl.create({
            title: 'Local de Entrega',
            enableBackdropDismiss: false
        });
        alert.addButton({
            text: 'Domícilio',
            handler: function (data) {
                _this.changeLocal('Domícilio');
            }
        });
        alert.addButton({
            text: 'Loja',
            handler: function (data) {
                _this.changeLocal('Loja');
            }
        });
        alert.present();
    };
    MenuPage.prototype.changeLocal = function (local) {
        var _this = this;
        this.local = local;
        this.storage.get('local').then(function (value) {
            if (value && value != _this.local) {
                _this.cleanCart();
            }
            _this.storage.set('local', _this.local);
            _this.loadMenu(_this.local);
        });
    };
    MenuPage.prototype.cartSegment = function () {
        this.segment = 'cart';
    };
    MenuPage.prototype.addToCart = function (product, measure) {
        var _this = this;
        this.cartService.addItem(product, measure).then(function (cart) {
            if (typeof measure.quantity == "undefined")
                measure.quantity = 0;
            measure.quantity++;
            _this.cart = cart;
            // const toast = this.toastCtrl.create({
            // 	message: product.name + ' adicionado ao carrinho',
            // 	duration: 1000
            // });
            // toast.present();
        });
    };
    MenuPage.prototype.incrementQuantity = function (product) {
        var _this = this;
        this.cartService.incrementQuantity(product).then(function (cart) {
            var auxCategory = _this.fixedMenu.find(function (p) { return p.name === product.category; });
            var auxItem = auxCategory.items.find(function (p) { return p.id === product.id; });
            if (!auxItem) {
                auxCategory = _this.dailyMenu.find(function (p) { return p.name === product.category; });
                auxItem = auxCategory.items.find(function (p) { return p.id === product.id; });
            }
            if (auxItem) {
                var auxMeasure = auxItem.measures.find(function (m) { return m.name === product.measure_name; });
                if (auxMeasure) {
                    auxMeasure.quantity = product.quantity + 1;
                }
            }
            _this.cart = cart;
        });
    };
    MenuPage.prototype.decrementQuantity = function (product) {
        var _this = this;
        this.cartService.decrementQuantity(product).then(function (cart) {
            var auxCategory = _this.fixedMenu.find(function (p) { return p.name === product.category; });
            var auxItem = auxCategory.items.find(function (p) { return p.id === product.id; });
            if (auxItem) {
                var auxMeasure = auxItem.measures.find(function (m) { return m.name === product.measure_name; });
                if (auxMeasure) {
                    auxMeasure.quantity = product.quantity - 1;
                }
            }
            _this.cart = cart;
        });
    };
    MenuPage.prototype.removeFromCart = function (product) {
        var _this = this;
        this.cartService.removeItem(product).then(function (cart) {
            var auxCategory = _this.fixedMenu.find(function (p) { return p.name === product.category; });
            var auxProduct = auxCategory.items.find(function (p) { return p.name === product.name; });
            auxProduct.measures.forEach(function (measure) {
                if (product.measure_name == measure.name)
                    measure.quantity = 0;
            });
            auxCategory = _this.dailyMenu.find(function (p) { return p.name === product.category; });
            if (auxCategory) {
                auxProduct = auxCategory.items.find(function (p) { return p.name === product.name; });
                auxProduct.measures.forEach(function (measure) {
                    if (product.measure_name == measure.name)
                        measure.quantity = 0;
                });
            }
            _this.cart = cart;
            var toast = _this.toastCtrl.create({
                message: product.name + ' removido do carrinho',
                duration: 1000
            });
            toast.present();
        });
    };
    MenuPage.prototype.cleanCart = function () {
        this.cart = new __WEBPACK_IMPORTED_MODULE_6__providers_cart_service__["c" /* Cart */]();
        this.cartService.set(this.cart);
        this.fixedMenu.forEach(function (category) {
            category.items.forEach(function (item) {
                item.measures.forEach(function (measure) {
                    measure.quantity = 0;
                });
            });
        });
        this.dailyMenu.forEach(function (category) {
            category.items.forEach(function (item) {
                item.measures.forEach(function (measure) {
                    measure.quantity = 0;
                });
            });
        });
    };
    MenuPage.prototype.loadMenu = function (local) {
        var _this = this;
        this.loading = this.loadingCtrl.create();
        this.loading.present().then(function () {
            _this.productService.getFixed(local)
                .then(function (data) {
                _this.fixedMenu = _this.addMeasures(data);
                _this.productService.getDaily(local)
                    .then(function (data) {
                    _this.dailyMenu = _this.addMeasures(data);
                    _this.loading.dismiss();
                }, function (error) {
                    _this.alert("Erro", "Verifique a sua ligação à rede e tente novamente.");
                    _this.loading.dismiss();
                });
            }, function (error) {
                _this.alert("Erro", "Verifique a sua ligação à rede e tente novamente.");
                _this.loading.dismiss();
            });
        });
    };
    MenuPage.prototype.addMeasures = function (menu) {
        var _this = this;
        var aux = menu;
        aux.forEach(function (category) {
            category.items.forEach(function (item) {
                item.measures.forEach(function (measure) {
                    var auxItem = _this.cart.items.find(function (p) { return p.id === item.id && p.measure_name === measure.name; });
                    if (auxItem)
                        measure.quantity = auxItem.quantity;
                });
            });
        });
        return aux;
    };
    MenuPage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create('MenuFilterPage', { fixedMenu: this.fixedMenu, excludeCategories: this.excludeCategories });
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.excludeCategories = data;
                _this.applyFilter();
            }
        });
    };
    MenuPage.prototype.applyFilter = function () {
        var _this = this;
        this.fixedMenu.forEach(function (fixed) {
            fixed.hide = false;
            _this.excludeCategories.forEach(function (category) {
                if (fixed.name == category) {
                    fixed.hide = true;
                }
            });
        });
        this.dailyMenu.forEach(function (daily) {
            daily.hide = false;
            _this.excludeCategories.forEach(function (category) {
                if (daily.name == category) {
                    daily.hide = true;
                }
            });
        });
    };
    MenuPage.prototype.goToCheckoutPage = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create();
        this.loading.present().then(function () {
            if (_this.cart.totalPrice > 0) {
                _this.user.hasLoggedIn().then(function (data) {
                    if (data) {
                        _this.settingsService.getOpeningTimes().then(function (data) {
                            if (data) {
                                _this.loading.dismiss();
                                _this.navCtrl.push('CheckoutPage', {
                                    cart: _this.cart,
                                    local: _this.local,
                                    openingTimes: data
                                });
                            }
                            else {
                                _this.loading.dismiss();
                                _this.alert("Atenção", "O estabelecimento hoje encontra-se encerrado.");
                            }
                        }, function (error) {
                            _this.loading.dismiss();
                        });
                    }
                    else {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Necessário login',
                            message: 'Faça login ou registe-se para prosseguir'
                        });
                        alert_1.addButton({
                            text: 'Login',
                            handler: function (data) {
                                _this.navCtrl.push('LoginPage');
                            }
                        });
                        alert_1.addButton({
                            text: 'Registo',
                            handler: function (data) {
                                _this.navCtrl.push('SignupPage');
                            }
                        });
                        _this.loading.dismiss();
                        alert_1.present();
                    }
                });
            }
        });
    };
    MenuPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.productService.getFixed(this.local)
            .then(function (data) {
            _this.fixedMenu = _this.addMeasures(data);
            _this.productService.getDaily(_this.local)
                .then(function (data) {
                _this.dailyMenu = _this.addMeasures(data);
                refresher.complete();
            }, function (error) {
                _this.alert("Erro", "Verifique a sua ligação à rede e tente novamente.");
                refresher.complete();
            });
        }, function (error) {
            _this.alert("Erro", "Verifique a sua ligação à rede e tente novamente.");
            refresher.complete();
        });
    };
    MenuPage.prototype.alert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    return MenuPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('scheduleList', { read: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* List */] }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* List */])
], MenuPage.prototype, "scheduleList", void 0);
MenuPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"C:\Users\someb\Documents\Sites\aiguaria-takeaway\src\pages\menu\menu.html"*/'<ion-header>\n\n	<ion-navbar no-border-bottom>\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n\n\n		<ion-title [hidden]="true">Ementa</ion-title>\n\n\n\n		<ion-segment [(ngModel)]="segment">\n\n			<ion-segment-button value="daily">\n\n				Ementa Diária\n\n			</ion-segment-button>\n\n			<ion-segment-button value="fixed">\n\n				Ementa Fixa\n\n			</ion-segment-button>\n\n		</ion-segment>\n\n\n\n		<ion-buttons end>\n\n			<button ion-button icon-only (click)="presentFilter()">\n\n				<ion-icon name="options"></ion-icon>\n\n			</button>\n\n		<button ion-button icon-only (click)="cartSegment()">\n\n				<ion-icon name="basket"></ion-icon>\n\n				<ion-badge item-right>{{cart.totalQuantity}}</ion-badge>\n\n			</button>\n\n		</ion-buttons>\n\n	</ion-navbar>\n\n\n\n	<!--<ion-toolbar no-border-top>\n\n		<ion-searchbar color="primary"\n\n									 [(ngModel)]="queryText"\n\n									 (ionInput)="updateSchedule()"\n\n									 placeholder="Search">\n\n		</ion-searchbar>\n\n	</ion-toolbar>-->\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-refresher (ionRefresh)="doRefresh($event)">\n\n    	<ion-refresher-content></ion-refresher-content>\n\n  	</ion-refresher>\n\n	<div [ngSwitch]="segment">\n\n	 <ion-list *ngSwitchCase="\'fixed\'">\n\n		 <ion-item-group *ngFor="let category of fixedMenu" [hidden]="category.hide">\n\n			<ion-item-divider sticky>\n\n        		<ion-label>\n\n          		{{category.name}}\n\n        		</ion-label>\n\n      		</ion-item-divider>\n\n			<ion-item *ngFor="let product of category.items" [attr.track]="product.category | lowercase">\n\n				<h2>{{product.name}}</h2>\n\n				<p>{{product.description}}</p>\n\n				<button outline ion-button *ngFor="let measure of product.measures" (click)="addToCart(product, measure)">\n\n					<span style="margin-right: 10px">{{measure.name}}</span>\n\n					<span>{{measure.value}}€</span>\n\n					<span *ngIf="measure.quantity > 0" style="margin-left: 10px">{{measure.quantity}}</span>\n\n				</button>\n\n			</ion-item>\n\n		 </ion-item-group>\n\n	 </ion-list>\n\n	 <ion-list *ngSwitchCase="\'daily\'">\n\n		 <ion-item-group *ngFor="let category of dailyMenu" [hidden]="category.hide">\n\n			<ion-item-divider sticky>\n\n        		<ion-label>\n\n          		{{category.name}}\n\n        		</ion-label>\n\n      		</ion-item-divider>\n\n			<ion-item *ngFor="let product of category.items" [attr.track]="product.category | lowercase">\n\n				<h2>{{product.name}}</h2>\n\n				<p>{{product.description}}</p>\n\n				<button outline ion-button *ngFor="let measure of product.measures" (click)="addToCart(product, measure)">\n\n					<span style="margin-right: 10px">{{measure.name}}</span>\n\n					<span>{{measure.value}}€</span>\n\n					<span *ngIf="measure.quantity > 0" style="margin-left: 10px">{{measure.quantity}}</span>\n\n				</button>\n\n			</ion-item>\n\n		 </ion-item-group>\n\n	 </ion-list>\n\n	 <ion-list *ngSwitchCase="\'cart\'">\n\n		 <ion-item-sliding  *ngFor="let product of cart.items">\n\n			<ion-item [attr.track]="product.category | lowercase">\n\n			<h2>{{product.name}}</h2>\n\n			<p>{{product.description}}</p>\n\n			<p>{{product.measure_name}}</p>\n\n			<div class="item-note" item-right>\n\n				<ion-row align-items-center>\n\n					<ion-col text-right>\n\n						<div text-center style="min-width: 110px">\n\n							<ion-icon name="arrow-back" (click)="decrementQuantity(product)"></ion-icon>\n\n							<div style="font-size: 20px; display: inline-block; width: 25px">{{product.quantity}}</div>\n\n							<ion-icon name="arrow-forward"  (click)="incrementQuantity(product)"></ion-icon>\n\n						</div>\n\n					</ion-col>\n\n					<ion-col text-right [hidden]="platform != \'desktop\'" style="max-width: 80px">\n\n						<button color="danger" outline ion-button icon-only (click)="removeFromCart(product)">\n\n							<ion-icon name="trash"></ion-icon>\n\n						</button>\n\n					</ion-col>\n\n				</ion-row>\n\n			</div>\n\n			</ion-item>\n\n			<ion-item-options side="right" [hidden]="platform == \'desktop\'">\n\n      			<button color="danger" ion-button (click)="removeFromCart(product)">\n\n					<ion-icon name="trash"></ion-icon>\n\n					Remover\n\n				</button>\n\n    		</ion-item-options>\n\n		</ion-item-sliding>\n\n	 </ion-list>\n\n	</div>\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n	<ion-toolbar>\n\n		<ion-title>Total: {{cart.totalPrice}}€</ion-title>\n\n		<button ion-button color="light" (click)="cleanCart()">\n\n			Esvaziar\n\n		</button>\n\n		<button ion-button color="primary" (click)="goToCheckoutPage()" [disabled]="cart.totalPrice == 0">\n\n			Checkout\n\n		</button>\n\n	</ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\someb\Documents\Sites\aiguaria-takeaway\src\pages\menu\menu.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_menu_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_6__providers_cart_service__["b" /* CartService */], __WEBPACK_IMPORTED_MODULE_7__providers_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_5__providers_settings_service__["a" /* SettingsService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_menu_service__["a" /* ProductService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_cart_service__["b" /* CartService */],
        __WEBPACK_IMPORTED_MODULE_7__providers_order_service__["a" /* OrderService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__providers_settings_service__["a" /* SettingsService */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map