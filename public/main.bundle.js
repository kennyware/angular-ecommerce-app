webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-navbar/app-navbar.component.css":
/***/ (function(module, exports) {

module.exports = "*{\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nheader{\r\n    width: 100%;\r\n    height: 80px;\r\n    padding: 15px 0;\r\n    color: #1B1D24;\r\n    background: #fff;\r\n}\r\n\r\nheader nav{\r\n    width: 95%;\r\n    margin: 0 auto;\r\n}\r\n\r\na.branding{\r\n    color: #1B1D24;\r\n    font-family: 'Oswald', sans-serif;\r\n    text-decoration: none;\r\n    border: 1px solid;\r\n    padding: 2.5px 15px;\r\n}\r\n\r\na.branding:hover{\r\n    color: #1B1D24;\r\n}\r\n\r\nheader .nav-item{\r\n    font-family: 'Oswald', sans-serif;\r\n    font-size: 1.15rem;\r\n    font-weight: 500;\r\n    position: relative; \r\n    top: 10px;\r\n    -webkit-transition: all 0.3s ease;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.nav-item:hover{\r\n    cursor: pointer;\r\n    color: #af5015;\r\n}\r\n\r\n.cart{\r\n    color: #1B1D24;\r\n    text-decoration: none;\r\n    -webkit-transition: all 0.3s ease;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.background-cover{\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: rgba(0,0,0,0.4);\r\n    z-index: 2;\r\n}\r\n\r\n#sideMenu{\r\n    background-color: #181a35;\r\n    width: 300px;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: 200;\r\n}\r\n\r\n#close-btn{\r\n    position: absolute;\r\n    color: #fff;\r\n    top: 15px;\r\n    right: 20px;\r\n    font-size: 1.5rem;\r\n    font-weight: 500;\r\n    -webkit-transition: all 0.2s ease;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n#close-btn:hover{\r\n    cursor: pointer;\r\n    color: #af5015;\r\n}\r\n\r\n.side-nav{\r\n    padding-top: 100px;\r\n    margin-bottom: 150px;\r\n}\r\n\r\n.side-nav li{\r\n    list-style-type: none;\r\n    \r\n}\r\n\r\n.side-nav li a{\r\n    font-size: 1.5rem;\r\n    text-decoration: none;\r\n    color: #ccc;\r\n    padding: 10px 30px;\r\n    -webkit-transition: all 0.3s ease;\r\n    transition: all 0.3s ease;\r\n    display: block;\r\n}\r\n\r\n.side-nav li a.active{\r\n    border-left: 5px solid #af5015;\r\n    padding-left: 25px;\r\n    color: #fff;\r\n    background-color: #131429;\r\n}\r\n\r\n.side-nav li a:hover{\r\n    border-left: 5px solid #af5015;\r\n    padding-left: 25px;\r\n    color: #fff;\r\n    background-color: #131429;\r\n}\r\n\r\n#sideMenu .legal{\r\n    position: absolute;\r\n    bottom: 25px;\r\n}\r\n\r\n#sideMenu .legal a{\r\n    display: block;\r\n    padding-left: 30px;\r\n}"

/***/ }),

/***/ "./src/app/app-navbar/app-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <nav class=\"row\">\n    <div class=\"col-2\">\n     <span class=\"nav-item\" (click)=\"showMenu = true\"><i class=\"fas fa-bars\"></i> <span class=\"nav-item-text\">Menu</span></span>\n    </div>\n    <div class=\"col-8 text-center\">\n      <h2><a routerLink=\"/\" class=\"branding\" (click)=\"showMenu = false\">FLY AMER1CA</a></h2>\n    </div>\n    <div class=\"col-2 text-right\">\n      <a routerLink=\"/cart\" class=\"nav-item cart\" (click)=\"showMenu = false\"><span class=\"nav-item-text\">Cart</span> <i class=\"fas fa-shopping-cart\"></i></a>\n    </div>\n  </nav>  \n</header>\n\n<div class=\"background-cover\" [style.display]=\"showMenu ? 'initial' : 'none'\" (click)=\"showMenu = false\">\n</div>\n<div id=\"sideMenu\" [style.display]=\"showMenu ? 'initial' : 'none'\">\n  <div id=\"close-btn\" (click)=\"showMenu = false\">x</div>\n  <nav class=\"side-nav\">\n    <ul>\n      <li><a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"showMenu = false\">Home</a></li>\n      <li><a routerLink=\"/shop\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"showMenu = false\">Shop</a></li>\n      <li *ngIf=\"!userService.loggedIn()\"><a routerLink=\"/login\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"showMenu = false\">Login</a></li>\n      <li *ngIf=\"!userService.loggedIn()\"><a routerLink=\"/register\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"showMenu = false\">Register</a></li>\n      <li *ngIf=\"userService.loggedIn()\"><a routerLink=\"/\" (click)=\"showMenu = false; logout()\">Logout</a></li>\n    </ul>\n  </nav>\n  <div class=\"legal\">\n    <a href=\"#\" (click)=\"showMenu = false\">Return Policy</a>\n    <a href=\"#\" (click)=\"showMenu = false\">Disclaimer</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app-navbar/app-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_service__ = __webpack_require__("./src/app/services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppNavbarComponent = /** @class */ (function () {
    function AppNavbarComponent(userService, productService) {
        this.userService = userService;
        this.productService = productService;
        this.showMenu = false;
    }
    AppNavbarComponent.prototype.ngOnInit = function () {
        this.cartTotal = this.productService.costString;
    };
    AppNavbarComponent.prototype.logout = function () {
        this.userService.logout();
    };
    AppNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/app-navbar/app-navbar.component.html"),
            styles: [__webpack_require__("./src/app/app-navbar/app-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */]])
    ], AppNavbarComponent);
    return AppNavbarComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body{\r\n    background: #F5F5F5;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routing_routing_module__ = __webpack_require__("./src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_navbar_app_navbar_component__ = __webpack_require__("./src/app/app-navbar/app-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shop_shop_component__ = __webpack_require__("./src/app/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cart_cart_component__ = __webpack_require__("./src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_product_component__ = __webpack_require__("./src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_auth_module__ = __webpack_require__("./src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_auth_guard__ = __webpack_require__("./src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_products_service__ = __webpack_require__("./src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__app_navbar_app_navbar_component__["a" /* AppNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shop_shop_component__["a" /* ShopComponent */],
                __WEBPACK_IMPORTED_MODULE_11__cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_12__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_17__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__routing_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__services_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_15__services_products_service__["a" /* ProductsService */],
                __WEBPACK_IMPORTED_MODULE_14__auth_auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.auth.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthConfig"]({
        globalHeaders: [{ 'Content-Type': 'application/json' }]
    }), http, options);
}
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"],
                    useFactory: authHttpServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]]
                }
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/***/ (function(module, exports) {

module.exports = "th, td{\r\n    padding: 20px;\r\n}\r\n\r\n.remove-btn{\r\n    position: absolute;\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%;\r\n    background-color: hsl(0, 24%, 60%);\r\n    font-size: 3rem;\r\n    color: hsl(0, 40%, 51%);\r\n    line-height: 0.4;\r\n    padding: 4px 3.5px;\r\n    right: 5px;\r\n    bottom: 15px;\r\n}\r\n\r\n@media only screen and (max-width: 415px){\r\n    table .row p{\r\n        font-size: 0.95rem;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Cart</h1>\n  <div *ngIf=\"items.length != 0\">\n    <table id=\"cart-table\">\n      <tr>\n        <th style=\"width: 200px;\"></th>\n        <th style=\"width: 446px;\">Item Name</th> \n        <th style=\"width: 124px;\">Size</th>\n        <th style=\"width: 138px;\">Price</th>\n        <th></th>\n      </tr>\n      <tr *ngFor=\"let item of items\">\n        <td><img src=\"..\\..\\assets\\img\\{{item.img_path}}\" class=\"img-fluid\"></td>\n        <td>{{item.product_name}}</td> \n        <td>{{item.size}}</td>\n        <td>${{item.price}}</td>\n        <td><button (click)=\"removeItem(item)\">Remove</button></td>\n      </tr>\n    </table>\n    <!-- Responsive Table -->\n    <table id=\"cart-table-responsive\">\n      <tr>\n        <th></th>\n      </tr>\n      <tr *ngFor=\"let item of items\">\n        <td>\n          <div class=\"row\">\n            <div class=\"col-5\"><img src=\"..\\..\\assets\\img\\{{item.img_path}}\" class=\"img-fluid\"></div>\n            <div class=\"col-7\">\n              <p>{{item.product_name}}</p>\n              <p>Size: {{item.size}}</p>\n              <p>${{item.price}}</p>\n              <div class=\"remove-btn\" (click)=\"removeItem(item)\">-</div>\n            </div>\n          </div>\n        </td>\n      </tr>\n    </table>\n    <!-- /Responsive Table -->\n  </div>\n  <div id=\"responsive-cart\">\n    \n  </div>\n  <div *ngIf=\"items.length == 0\">\n    <p>You do not have any items in your cart</p>\n  </div>\n  <p>\n    Total: ${{cartTotal}}\n  </p>\n\n  <button *ngIf=\"items.length != 0\" class=\"btn btn-danger\" (click)=\"clearCart()\">Clear Cart</button>\n  <button *ngIf=\"items.length != 0\" class=\"btn btn-success float-right\" (click)=\"checkout()\">Check Out</button>\n</div>"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__("./src/app/services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = /** @class */ (function () {
    function CartComponent(productService) {
        this.productService = productService;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.cart = this.productService.cart;
        this.cartTotal = this.productService.calculateCart(0, null);
        this.items = this.cart.products;
    };
    CartComponent.prototype.clearCart = function () {
        this.productService.clearCart();
        this.cartTotal = this.productService.calculateCart(0, null);
        this.items = this.cart.products;
    };
    CartComponent.prototype.removeItem = function (item) {
        var itemToRemove;
        for (var i = 0; i < this.cart.products.length; i++) {
            if (this.cart.products[i] === item) {
                itemToRemove = this.cart.products[i];
                this.cart.products.splice(i, 1);
                this.cartTotal = this.productService.calculateCart(-itemToRemove.price, null);
            }
        }
    };
    CartComponent.prototype.checkout = function () {
        alert('This is as far as this demo goes.');
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__("./src/app/cart/cart.component.html"),
            styles: [__webpack_require__("./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "#home{\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    text-align: center;\r\n}\r\n\r\n.cover{\r\n    background-color: rgba(0,0,0,0.4);\r\n    height: inherit;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n\r\n#home button{\r\n    background-color: #af5015;\r\n    border: none;\r\n    color: #fff;\r\n    padding: 10px 40px;\r\n    -webkit-transition: all 0.3s ease;\r\n    transition: all 0.3s ease;\r\n    z-index: 3;\r\n    position: absolute;\r\n    bottom: 20%;\r\n    right: 45%;\r\n    height: 45px;\r\n}\r\n\r\n#home button:hover{\r\n    background-color: #fff;\r\n    color: #000;\r\n    cursor: pointer;\r\n    font-weight: 500;\r\n}\r\n\r\n.carousel{\r\n    height: inherit;\r\n}\r\n\r\n.carousel-inner{\r\n    height: inherit;\r\n}\r\n\r\n.carousel-item{\r\n    height: inherit;\r\n    opacity: 0;\r\n    -webkit-transition: all 1s ease;\r\n    transition: all 1s ease;\r\n}\r\n\r\n.carousel-item.active{\r\n    opacity: 1 !important;\r\n}\r\n\r\n.carousel-img{\r\n    width: 100%;\r\n    height: inherit;\r\n    -webkit-transition: all 1s ease;\r\n    transition: all 1s ease;\r\n    opacity: 0;\r\n}\r\n\r\n.carousel-item.active .carousel-img{\r\n    opacity: 1 !important;\r\n}\r\n\r\n.carousel-indicators, .carousel-control-prev, .carousel-control-next{\r\n    display: none;\r\n}\r\n\r\n@media only screen and (max-width: 415px){\r\n    .carousel-img{\r\n        position: absolute;\r\n        width: 200% !important;\r\n        right: -180px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"home\">\r\n    <div class=\"cover\"></div>\r\n    <ngb-carousel *ngIf=\"images\">\r\n        <ng-template *ngFor=\"let image of images\" ngbSlide>\r\n            <img [src]=\"image\" alt=\"\" class=\"carousel-img\">\r\n        </ng-template>\r\n    </ngb-carousel>\r\n    <button routerLink=\"/shop\">Shop Now</button>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.images = ['../../assets/img/carousel-img_1.jpg', '../../assets/img/carousel-img_2.jpg', '../../assets/img/carousel-img_4.jpg'];
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n@media only screen and (max-width: 415px){\r\n    #login-form{\r\n        padding-top: 0;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"submission-area\">\n  <div class=\"ad\">\n    <h2 class=\"branding\">FLY AMER1CA</h2>\n    <div class=\"show\">\n      \n    </div>\n  </div>\n  <div class=\"container\">\n      <h2 class=\"my-5\">Login</h2>\n      \n      <form (submit)=\"login()\" id=\"login-form\">\n        <div class=\"error-wrapper\">\n          <div *ngIf=\"msg\" class=\"error-msg\">\n            {{msg}}\n          </div>\n        </div>\n          \n        <div class=\"form-group\">\n          <input type=\"text\" id=\"username\" [(ngModel)]=\"user.username\" name=\"username\" class=\"form-control\" placeholder=\"Username*\" required>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" id=\"password\" [(ngModel)]=\"user.password\" name=\"password\" class=\"form-control\" placeholder=\"Password*\" required minlength=\"6\">\n        </div>\n        <button type=\"submit\">Login</button>\n      </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = {
            username: '',
            password: ''
        };
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.user.password !== '' && this.user.username !== '') {
            this.usersService.login(this.user).subscribe(function (res) {
                if (res.success === false) {
                    return _this.msg = res.msg;
                }
                _this.router.navigate(['/']);
            });
        }
        else {
            return this.msg = 'Please fill in all fields';
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ".product-details{\r\n    margin: 130px auto;\r\n    width: 450px;\r\n}\r\n\r\n.buy-btn{\r\n    background: #181a35;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    padding: 15px;\r\n    margin: 40px auto;\r\n    -webkit-transition: all 0.3s ease-in-out;\r\n    transition: all 0.3s ease-in-out;\r\n    border: 1.5px solid #fff;\r\n}\r\n\r\n.buy-btn-disabled{\r\n    background: none;\r\n    border: 1.5px solid #181a35;\r\n    color: #181a35;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    padding: 15px;\r\n    margin: 40px auto;\r\n    -webkit-transition: all 0.3s ease-in-out;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.buy-btn:hover{\r\n    cursor: pointer;\r\n    background: none;\r\n    border-color: #181a35;\r\n    color: #181a35;\r\n}\r\n\r\n.catalog-btn{\r\n    color: #1B1D24;\r\n    -webkit-transition: all 0.3s ease;\r\n    transition: all 0.3s ease;\r\n    text-decoration: none;\r\n    position: absolute;\r\n    top: 85px;\r\n    right: 150px;\r\n    z-index: 2;\r\n}\r\n\r\n.catalog-btn:hover{\r\n    color: #af5015;\r\n}\r\n\r\n.size{\r\n    margin-top: 30px;\r\n}\r\n\r\n.size select{\r\n    border: none;\r\n}\r\n\r\nlabel{\r\n    font-weight: 500;\r\n}\r\n\r\n.msg{\r\n    font-weight: 600;\r\n    color: #af5015;\r\n}"

/***/ }),

/***/ "./src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"product\">\n  <div class=\"container\">\n      <h3 class=\"product-name text-center\">{{product.product_name}}</h3>\n      <a routerLink=\"/shop\" class=\"catalog-btn\"><i class=\"fab fa-buromobelexperte fa-2x\"></i></a>\n      <div class=\"row\">\n        <div class=\"col-12 col-md-6 text-center\">\n          <img *ngIf=\"product.img_path != ''\" src=\"..\\..\\assets\\img\\{{product.img_path}}\" class=\"img-fluid\">\n        </div>\n        <div class=\"col-12 col-md-6\">\n          <div class=\"product-details\">\n            <p>\n              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse pariatur iste minus quae quos reiciendis quis velit, veniam a vitae atque molestias ratione quia sit voluptates praesentium necessitatibus. Maxime fugit iste exercitationem cupiditate quia debitis asperiores veniam enim necessitatibus laudantium architecto, non doloribus optio officia adipisci minus reprehenderit, aspernatur a?\n            </p>\n            <div class=\"size\">\n              <label for=\"size\">CHOOSE SIZE:</label>\n              <select [(ngModel)]=\"product.size\" name=\"size\" (change)=\"added = false\">\n                <option [value]=\"7\">M 7</option>\n                <option [value]=\"7.5\">M 7.5</option>\n                <option [value]=\"8\">M 8</option>\n                <option [value]=\"8.5\">M 8.5</option>\n                <option [value]=\"9\">M 9</option>\n                <option [value]=\"9.5\">M 9.5</option>\n                <option [value]=\"10\">M 10</option>\n                <option [value]=\"10.5\">M 10.5</option>\n                <option [value]=\"11\">M 11</option>\n                <option [value]=\"11.5\">M 11.5</option>\n                <option [value]=\"12\">M 12</option>\n                <option [value]=\"12.5\">M 12.5</option>\n                <option [value]=\"13\">M 13</option>\n                <option [value]=\"13.5\">M 13.5</option>\n                <option [value]=\"14\">M 14</option>\n              </select>\n            </div>\n            <div *ngIf=\"!added\" class=\"buy-btn\" (click)=\"addProduct(product)\">Add To Cart ${{product.price}}</div>\n            <div *ngIf=\"added\" class=\"buy-btn-disabled\">Added To Cart</div>\n            <div *ngIf=\"msg\" class=\"msg\">{{msg}}</div>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_service__ = __webpack_require__("./src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = /** @class */ (function () {
    function ProductComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.product = {
            product_name: '',
            price: 0,
            colors: [],
            brand: '',
            section: '',
            img_path: '',
            size: 0
        };
        this.added = false;
        this.getProduct();
    };
    ProductComponent.prototype.getProduct = function () {
        var _this = this;
        this.route.paramMap.switchMap(function (params) { return _this.service.getProduct(params.get('id')); }).subscribe(function (product) {
            _this.product = {
                product_name: product.product_name,
                price: product.price,
                colors: product.colors,
                brand: product.brand,
                section: product.section,
                img_path: product.img_path,
                size: 0
            };
        });
    };
    ProductComponent.prototype.addProduct = function (product) {
        var _this = this;
        if (product.size === 0) {
            this.added = false;
            this.msg = 'Please choose a size.';
            setTimeout(function () {
                _this.msg = null;
            }, 2500);
        }
        else {
            this.service.calculateCart(product.price, product);
            this.added = true;
        }
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/product/product.component.html"),
            styles: [__webpack_require__("./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".addy{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 35% 35% 1fr;\r\n        grid-template-columns: 35% 35% 1fr;\r\n    grid-column-gap: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 415px){\r\n    .addy{\r\n        -ms-grid-columns: 1fr;\r\n            grid-template-columns: 1fr;\r\n        grid-column-gap: 0;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"submission-area\">\n  <div class=\"ad\">\n    <h2>FLY AMER1CA</h2>\n    <div class=\"show\"></div>\n  </div>\n  <div class=\"container\">\n      <h2 class=\"text-center my-5\">Register</h2>\n    <form (submit)=\"register()\" id=\"register-form\">\n      <div class=\"error-wrapper\">\n        <div *ngIf=\"msg\" class=\"error-msg\">\n          {{msg}}\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"user.username\" id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username*\" required>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"user.email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email*\" required>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" [(ngModel)]=\"user.password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password*\" required minlength=\"6\" >\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" [(ngModel)]=\"confirmPassword\" id=\"confirmPassword\" name=\"confirmPassword\" class=\"form-control\" placeholder=\"Confirm Password*\" required >\n      </div>\n      <h5 class=\"my-4\">Address</h5>\n      <div class=\"form-group\">\n        <input type=\"text\" [(ngModel)]=\"user.address.street\" name=\"street\" class=\"form-control\" placeholder=\"Street*\" required>\n      </div>\n      <div class=\"addy\">\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"user.address.city\" name=\"city\" class=\"form-control\" placeholder=\"City*\" required>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"user.address.state\" name=\"state\" class=\"form-control\" placeholder=\"State*\" required>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"user.address.zip_code\" name=\"zip_code\" class=\"form-control\" placeholder=\"Zip Code*\" required>\n        </div>\n      </div>\n      <button type=\"submit\">Register</button>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = {
            username: '',
            password: '',
            email: '',
            address: {
                street: '',
                city: '',
                state: '',
                zip_code: null
            }
        };
        this.confirmPassword = '';
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.user.username === '' || this.user.password === '' || this.confirmPassword === '' || this.user.address === null) {
            return this.msg = 'Please fill in all fields';
        }
        if (this.user.password !== this.confirmPassword) {
            return this.msg = 'Passwords do not match';
        }
        this.service.createUser(this.user).subscribe(function (res) {
            if (res.success === false) {
                return _this.msg = res.msg;
            }
            _this.router.navigate(['/login']);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shop_shop_component__ = __webpack_require__("./src/app/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart_component__ = __webpack_require__("./src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_product_component__ = __webpack_require__("./src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_guard__ = __webpack_require__("./src/app/auth/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'shop',
        component: __WEBPACK_IMPORTED_MODULE_4__shop_shop_component__["a" /* ShopComponent */]
    },
    {
        path: 'cart',
        component: __WEBPACK_IMPORTED_MODULE_5__cart_cart_component__["a" /* CartComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'product/:id',
        component: __WEBPACK_IMPORTED_MODULE_8__product_product_component__["a" /* ProductComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_auth_guard__["a" /* AuthGuard */]]
    }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsService = /** @class */ (function () {
    function ProductsService(auth, http) {
        this.auth = auth;
        this.http = http;
        this.api = 'products/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
        this.costTotal = 0.00;
        this.costString = '';
        this.cart = {
            products: []
        };
    }
    ProductsService.prototype.getProducts = function () {
        return this.http.get(this.api).map(function (res) { return res.json(); });
    };
    ProductsService.prototype.getProduct = function (_id) {
        return this.http.get(this.api + _id).map(function (res) { return res.json(); });
    };
    ProductsService.prototype.calculateCart = function (cost, product) {
        var total = this.costTotal + cost;
        if (product != null) {
            // const newProduct = Object.assign({}, product);
            var newProduct = __assign({}, product);
            this.cart.products.push(newProduct);
        }
        this.costTotal = total;
        this.costString = total.toString();
        var decimalPos = this.costString.indexOf('.');
        if (decimalPos < 0) {
            return this.costString.concat('.', '00');
        }
        return this.costString;
    };
    ProductsService.prototype.clearCart = function () {
        this.costTotal = 0;
        this.costString = '';
        this.cart.products = [];
    };
    ProductsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersService = /** @class */ (function () {
    function UsersService(http, authH) {
        this.http = http;
        this.authH = authH;
        this.api = 'users/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
    }
    UsersService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    UsersService.prototype.login = function (user) {
        var _this = this;
        var body = '{"username":"' + user.username + '","password":"' + user.password + '"}';
        return this.http.post(this.api + 'authenticate', body, this.options).map(function (res) {
            var token = res.json().token;
            var username = res.json().username;
            if (token) {
                localStorage.setItem('token', token);
                var decodedToken = _this.jwtHelper.decodeToken(token);
                localStorage.setItem('username', decodedToken.data.username);
            }
            return res.json();
        });
    };
    UsersService.prototype.logout = function () {
        localStorage.clear();
    };
    UsersService.prototype.getUsers = function () {
        return this.authH.get(this.api).map(function (res) { return res.json(); });
    };
    UsersService.prototype.createUser = function (user) {
        return this.http.post(this.api + 'register', user, this.options).map(function (res) { return res.json(); });
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/shop/shop.component.css":
/***/ (function(module, exports) {

module.exports = ".product{\r\n    -webkit-transition: all 0.3s ease;\r\n    transition: all 0.3s ease;\r\n    z-index: -200;\r\n}\r\n\r\n.product:hover{\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n}\r\n\r\n.product img {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filter text-center mb-5\">\n  <span>Sort By <select [(ngModel)]=\"sorting\" name=\"sorting\" (change)=\"sortProducts()\">\n      <option value=\"name:a-z\" selected>Name: A-Z</option>\n      <option value=\"name:z-a\">Name: Z-A</option>\n      <option value=\"price:h-l\">Price: High to Low</option>\n      <option value=\"price:l-h\">Price: Low to High</option>\n    </select>\n  </span>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-6 text-center\" *ngFor=\"let product of products\">\n      <div class=\"product\">\n        <img src=\"..\\..\\assets\\img\\{{product.img_path}}\" class=\"img-fluid\" (click)=\"gotoProduct(product._id)\">\n        <div>\n            <h5>{{product.product_name}}</h5>\n            <h6>${{product.price}}</h6>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_service__ = __webpack_require__("./src/app/services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopComponent = /** @class */ (function () {
    function ShopComponent(productsService, router) {
        this.productsService = productsService;
        this.router = router;
        this.sorting = 'name:a-z';
    }
    ShopComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ShopComponent.prototype.getProducts = function () {
        var _this = this;
        this.productsService.getProducts().subscribe(function (products) {
            _this.products = products;
            _this.sortProducts();
        });
    };
    ShopComponent.prototype.sortProducts = function () {
        switch (this.sorting) {
            case 'name:a-z':
                this.products.sort(function (a, b) {
                    var x = a.product_name.toLowerCase();
                    var y = b.product_name.toLowerCase();
                    if (x < y) {
                        return -1;
                    }
                    if (x > y) {
                        return 1;
                    }
                    return 0;
                });
                break;
            case 'name:z-a':
                this.products.sort(function (a, b) {
                    var x = a.product_name.toLowerCase();
                    var y = b.product_name.toLowerCase();
                    if (x > y) {
                        return -1;
                    }
                    if (x < y) {
                        return 1;
                    }
                    return 0;
                });
                break;
            case 'price:l-h':
                this.products.sort(function (a, b) { return a.price - b.price; });
                break;
            case 'price:h-l':
                this.products.sort(function (a, b) { return b.price - a.price; });
                break;
        }
    };
    ShopComponent.prototype.gotoProduct = function (id) {
        this.router.navigate(['product', id]);
    };
    ShopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__("./src/app/shop/shop.component.html"),
            styles: [__webpack_require__("./src/app/shop/shop.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map