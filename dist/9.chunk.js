webpackJsonp([9,15],{

/***/ 1448:
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
var common_1 = __webpack_require__(14);
var contact_component_1 = __webpack_require__(1489);
var router_1 = __webpack_require__(91);
var shared_module_1 = __webpack_require__(737);
var forms_1 = __webpack_require__(4);
var ng2_validation_1 = __webpack_require__(738);
var routes = [
    {
        path: '',
        component: contact_component_1.ContactComponent,
        data: {
            title: 'contact',
        }
    }
];
var ContactModule = (function () {
    function ContactModule() {
    }
    return ContactModule;
}());
ContactModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(routes),
            shared_module_1.SharedModule,
            forms_1.FormsModule,
            ng2_validation_1.CustomFormsModule
        ],
        exports: [router_1.RouterModule],
        declarations: [contact_component_1.ContactComponent]
    })
], ContactModule);
exports.ContactModule = ContactModule;
//# sourceMappingURL=G:/comproject/website-frontend/src/contact.module.js.map

/***/ }),

/***/ 1489:
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
var contact_service_1 = __webpack_require__(1490);
var ContactComponent = (function () {
    function ContactComponent(_contactService) {
        this._contactService = _contactService;
        this.data = {
            email: '',
            name: '',
            phone: '',
            problem: '',
            message: ''
        };
        this.isloading = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.contact = function () {
        var _this = this;
        this.isloading = true;
        this._contactService.consult(this.data).subscribe(function (res) {
            _this.isloading = false;
            if (res) {
                _this.records = res.data;
                console.log("res", _this.data);
            }
            else {
                _this.isloading = false;
                console.log('err');
            }
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'app-contact',
        template: __webpack_require__(1532),
        styles: [__webpack_require__(1507)],
        providers: [contact_service_1.ContactService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof contact_service_1.ContactService !== "undefined" && contact_service_1.ContactService) === "function" && _a || Object])
], ContactComponent);
exports.ContactComponent = ContactComponent;
var _a;
//# sourceMappingURL=G:/comproject/website-frontend/src/contact.component.js.map

/***/ }),

/***/ 1490:
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
var ContactService = (function () {
    function ContactService(_http, _sharedService) {
        this._http = _http;
        this._sharedService = _sharedService;
        this._host = tsConstants.HOST;
    }
    ContactService.prototype.consult = function (data) {
        var headers = this._sharedService.getAuthorizationHeader();
        return this._http.post(this._host + '/consult', data, { headers: headers }).map(function (res) { return res.json(); });
    };
    return ContactService;
}());
ContactService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof shared_service_1.SharedService !== "undefined" && shared_service_1.SharedService) === "function" && _b || Object])
], ContactService);
exports.ContactService = ContactService;
var _a, _b;
//# sourceMappingURL=G:/comproject/website-frontend/src/contact.service.js.map

/***/ }),

/***/ 1507:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1532:
/***/ (function(module, exports) {

module.exports = "<app-loader [isloading]=\"isloading\"></app-loader>\r\n<breadcrumb [id]=\"'banner-crop'\" [class]=\"''\" [page]=\"'Contact'\"></breadcrumb>\r\n\r\n\t\t<!--\r\n\t\t\t\tregistration form start \t  =\r\n\t\t======================================= -->\r\n\t\t<div class=\"container-fluid\">\r\n\t<div class=\"card\">\r\n\t\t<section id=\"contact-page\">\r\n\t\t\t<div class=\"section-padding \">\r\n\t\t\t\t<div class=\"container \">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-7 left-col \">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<h3 class=\"comment-title\">Leave A Request</h3>\r\n\r\n\t\t\t\t\t\t\t\t<!-- <form action=\"#\" (ngSubmit)=\"contact()\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"data.email\" name=\"email\" class=\"pull-left\" placeholder=\"E-mail *\">\r\n\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" #name=\"ngModel\" [(ngModel)]=\"data.name\" name=\"name\" class=\"pull-right\" placeholder=\"Name *\">\r\n\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" #problem=\"ngModel\" [(ngModel)]=\"data.problem\" name=\"problem\" class=\"subjcet\" placeholder=\"problem *\">\r\n\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" #phone=\"ngModel\" [(ngModel)]=\"data.phone\" name=\"phone\" class=\"subjcet\" placeholder=\"mobile no *\">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<textarea name=\"massage\" #massage=\"ngModel\" [(ngModel)]=\"data.message\" name=\"massage\" placeholder=\"Massage\"></textarea>\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn custom-btn\">Submit</button>\r\n\t\t\t\t\t\t\t\t</form> -->\r\n\t\t\t\t\t\t\t\t<form class=\"border border-primary\" (ngSubmit)=\"contact()\">\r\n \t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t    <input type=\"email\" #email=\"ngModel\" [(ngModel)]=\"data.email\" name=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email*\">\r\n\t\t\t\t\t\t\t\t    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t  \t<input type=\"text\" #name=\"ngModel\" [(ngModel)]=\"data.name\" name=\"name\" class=\"form-control\" placeholder=\"Name *\">\r\n\r\n\t\t\t\t\t\t\t\t\t<input type=\"number\" #phone=\"ngModel\" [(ngModel)]=\"data.phone\" name=\"phone\"  class=\"form-control\" placeholder=\"mobile no *\">\r\n\r\n\t\t\t\t\t\t\t\t    <textarea class=\"form-control\" #massage=\"ngModel\" [(ngModel)]=\"data.message\" name=\"massage\" id=\"exampleTextarea\" rows=\"3\" placeholder=\"Enter a massage*\"></textarea>\r\n\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div><!-- /.col-md-6 -->\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-5 right-col\">\r\n\t\t\t\t\t\t\t<div class=\"sidebar\">\r\n\t\t\t\t\t\t\t\t<div class=\"widget\">\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"widget-title\">Fitness24</h4>\r\n\r\n\t\t\t\t\t\t\t\t\t<p class=\"widget-des\"> we are going to setup a venture which will work in different places to reach more peoples easily, so that each and every person can take advantage of this concept.</p>\r\n\r\n\t\t\t\t\t\t\t\t\t<ul class=\"address\">\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-map-marker\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span>New Delhi Ncr</span>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-phone\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span>+918707025813</span>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-envelope\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span><a href=\"#\">fitness24fitness@gmail.com</a></span>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-share\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-pinterest\"></i></a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-vimeo-square\"></i></a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t</div><!-- /.m-share -->\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div><!-- end widge-box-->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div><!-- /.col-md-6 -->\r\n\t\t\t\t\t</div><!-- /.row -->\r\n\t\t\t\t</div><!-- /.container -->\r\n\t\t\t</div><!-- /.section-padding -->\r\n\t\t</section>\r\n\t</div>\r\n\t</div>\r\n"

/***/ })

});
//# sourceMappingURL=9.chunk.js.map