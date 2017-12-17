webpackJsonp([8,15],{

/***/ 1449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng2_charts_1 = __webpack_require__(742);
var shared_module_1 = __webpack_require__(737);
var dashboard_component_1 = __webpack_require__(1461);
var dashboard_routing_module_1 = __webpack_require__(1491);
var common_1 = __webpack_require__(14);
var forms_1 = __webpack_require__(4);
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            dashboard_routing_module_1.DashboardRoutingModule,
            ng2_charts_1.ChartsModule,
            shared_module_1.SharedModule,
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        declarations: [dashboard_component_1.DashboardComponent]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=G:/comproject/website-frontend/src/dashboard.module.js.map

/***/ }),

/***/ 1461:
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ngx_cookie_1 = __webpack_require__(112);
var dashboard_service_1 = __webpack_require__(1492);
var DashboardComponent = (function () {
    function DashboardComponent(_cookieService, _dashboardService) {
        this._cookieService = _cookieService;
        this._dashboardService = _dashboardService;
        this.isLoggedIn = false;
        this.isloading = true;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.profileLike();
        this.setData();
    };
    DashboardComponent.prototype.setData = function () {
        if (this._cookieService.get('token')) {
            this.isLoggedIn = true;
            this.userData = this._cookieService.getObject('userData');
        }
    };
    DashboardComponent.prototype.profileLike = function () {
        var _this = this;
        this.userData = this._cookieService.getObject('userData');
        this.userId = this.userData.id;
        console.log("user", this.userId);
        this._dashboardService.getProfile(this.userId).subscribe(function (res) {
            if (res) {
                _this.array = res.message;
                console.log("array", _this.array);
            }
            else {
                console.log("err");
            }
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(1533),
        providers: [dashboard_service_1.DashboardService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof ngx_cookie_1.CookieService !== "undefined" && ngx_cookie_1.CookieService) === "function" && _a || Object, typeof (_b = typeof dashboard_service_1.DashboardService !== "undefined" && dashboard_service_1.DashboardService) === "function" && _b || Object])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
var _a, _b;
//# sourceMappingURL=G:/comproject/website-frontend/src/dashboard.component.js.map

/***/ }),

/***/ 1491:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(91);
var dashboard_component_1 = __webpack_require__(1461);
var routes = [
    {
        path: '',
        component: dashboard_component_1.DashboardComponent,
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], DashboardRoutingModule);
exports.DashboardRoutingModule = DashboardRoutingModule;
//# sourceMappingURL=G:/comproject/website-frontend/src/dashboard-routing.module.js.map

/***/ }),

/***/ 1492:
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(347);
__webpack_require__(224);
var tsConstants = __webpack_require__(346);
var shared_service_1 = __webpack_require__(152);
var DashboardService = (function () {
    function DashboardService(_http, _sharedService) {
        this._http = _http;
        this._sharedService = _sharedService;
        this._host = tsConstants.HOST;
    }
    DashboardService.prototype.getProfile = function (userId) {
        var headers = this._sharedService.getAuthorizationHeader();
        var url = this._host + '/likeProfile/' + userId;
        return this._http.get(url, { headers: headers }).map(function (res) { return res.json(); });
    };
    return DashboardService;
}());
DashboardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof shared_service_1.SharedService !== "undefined" && shared_service_1.SharedService) === "function" && _b || Object])
], DashboardService);
exports.DashboardService = DashboardService;
var _a, _b;
//# sourceMappingURL=G:/comproject/website-frontend/src/dashboard.service.js.map

/***/ }),

/***/ 1533:
/***/ (function(module, exports) {

module.exports = "\r\n<section id=\"about-we-do\" style=\"margin-top: 108px;\">\r\n\t\t\t<div class=\"section-padding\">\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\" >\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!-- <div class=\"about-img\">\r\n\t\t\t\t\t\t\t\t<img src=\"assets/img/logo.jpg\" alt=\"aboutus\" class=\"img-thumbnail\" style=\"height: 150px;margin-top: 30px;max-width: 100%\" >\r\n\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"about-content\">\r\n\t\t\t\t\t\t\t\t<h1><span style=\"color: black\">Welcome<br/></span>  <span style=\"color: #43aea8;font-size: larger;\">{{ (userData?.username) ? (userData?.username | truncate : 13 : \"…\"): (userData?.username | truncate : 13 : \"…\")}}</span></h1>\r\n\t\t\t\t\t\t\t\t<p><strong>FITNESSS 24</strong></p>\r\n\t\t\t\t\t\t\t\t<section id=\"classby\">\r\n\t\t\t<div class=\"section-padding\">\r\n\t\t\t\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<!-- related post  -->\r\n\t\t\t\t\t\t<div class=\"related-post comment-area class-grid\" *ngFor=\"let obj of array\">\r\n\t\t\t\t\t\t\t<h3>Your Centers</h3>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xs-6 col-sm-4 col-md-3\" >\r\n\t\t\t\t\t\t\t\t<div class=\"f-product-box\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"box-img\">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"obj.centerId.image\" class=\"card-img-top img-fluid\" src=\"{{_host}}/images/yoga/{{obj?.centerId?.image}}\"  alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!obj.centerId.image\" class=\"card-img-top img-fluid\" src=\"http://www.vacationrentalestates.com/images/no-image-available2.jpg\" alt=\"\"> \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"overlay\"></div><!-- /.overlay -->\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div><!-- /.box-img -->\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"fp-info\">\r\n\t\t\t\t\t\t\t\t\t\t<h4><a href=\"#\"></a></h4>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"price-rating\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-price\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>{{obj.centerId.name}}</span><br/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>{{obj.centerId.phone}}</span><br/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-home\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>{{obj.centerId.location}}</span><br/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-street-view\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>{{obj.centerId.address}}</span><br/>\r\n\t\t\t\t\t\t\t\t\t\t\t</div><!-- /.product-price -->\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</div><!-- /.price-rating -->\r\n\t\t\t\t\t\t\t\t\t</div><!-- /.image-des -->\r\n\t\t\t\t\t\t\t\t</div><!-- /.image-box -->\r\n\t\t\t\t\t\t\t</div><!-- /.col-sm-3 col-md-3 -->\r\n\r\n\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div><!-- end tabpanel -->\r\n\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div><!-- /.container -->\r\n\t\t\t\t\r\n\t\t\t</div><!-- /.section-padding -->\r\n\t\t</section>\r\n\t\t\t\t\t\t\t</div><!-- /.about-content -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div><!-- /.row -->\r\n\t\t\t\t</div><!-- /.container -->\r\n\t\t\t</div><!-- /.section-padding -->\r\n\t\t</section>\r\n\r\n\r\n\r\n\r\n"

/***/ })

});
//# sourceMappingURL=8.chunk.js.map