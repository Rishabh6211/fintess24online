webpackJsonp([10,15],{

/***/ 1441:
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
var common_1 = __webpack_require__(13);
var aboutus_component_1 = __webpack_require__(1472);
var router_1 = __webpack_require__(91);
var shared_module_1 = __webpack_require__(737);
var routes = [
    {
        path: '',
        component: aboutus_component_1.AboutusComponent,
        data: {
            title: 'About us',
        }
    }
];
var AboutusModule = (function () {
    function AboutusModule() {
    }
    return AboutusModule;
}());
AboutusModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(routes),
            shared_module_1.SharedModule
        ],
        exports: [router_1.RouterModule],
        declarations: [aboutus_component_1.AboutusComponent]
    })
], AboutusModule);
exports.AboutusModule = AboutusModule;
//# sourceMappingURL=G:/comproject/website-frontend/src/aboutus.module.js.map

/***/ }),

/***/ 1472:
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
var AboutusComponent = (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    return AboutusComponent;
}());
AboutusComponent = __decorate([
    core_1.Component({
        selector: 'app-aboutus',
        template: __webpack_require__(1525),
        styles: [__webpack_require__(1502)]
    }),
    __metadata("design:paramtypes", [])
], AboutusComponent);
exports.AboutusComponent = AboutusComponent;
//# sourceMappingURL=G:/comproject/website-frontend/src/aboutus.component.js.map

/***/ }),

/***/ 1502:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1525:
/***/ (function(module, exports) {

module.exports = "\r\n\t\t\t\r\n\t\t\t<breadcrumb [id]=\"'banner-crop'\" [class]=\"''\" [page]=\"'about us'\"></breadcrumb>\r\n\t\r\n\r\n\t\t\r\n\t\t\t\t<!--\r\n\t\t\t\tAbout we do section start  \t  =\r\n\t\t======================================= -->\r\n\t<div class=\"card\">\r\n\t\t<section id=\"about-we-do\">\r\n\t\t\t<div class=\"section-padding\">\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t\t<div class=\"about-img\">\r\n\t\t\t\t\t\t\t\t<img src=\"assets/img/about.png\" alt=\"aboutus\" class=\"img-thumbnail\">\r\n\t\t\t\t\t\t\t</div><!-- /.about-img -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-7\">\r\n\t\t\t\t\t\t\t<div class=\"about-content\">\r\n\t\t\t\t\t\t\t\t<h1>What We Do</h1>\r\n\t\t\t\t\t\t\t\t<p><strong>Aim of FITNESSS 24</strong>, is to encourage a positive and healthy lifestyle for Physical, Mental and Emotional health of peoples.If you’re seeking motivation to keep up your daily yoga practice, FITNESSS 24 gives you several of reasons to get you back on your yoga mat every day.\r\n\t\t\t\t\t\t\t\tPick a suitable class and center for your level and approach it with an open mind-you’ll feel different, more open present and happier.\r\n\t\t\t\t\t\t\t\tThese techniques are the demand of today’s life. We have to know about it and it’s our responsibility to spread knowledge of it. If we follow our ancient technology we can fight with these new diseases and create a healthy, fit world.</p>\r\n\t\t\t\t\t\t\t\t<p>Further we are going to setup a venture which will work in different places to reach more peoples easily, so that each and every person can take advantage of this concept.</p>\r\n\t\t\t\t\t\t\t</div><!-- /.about-content -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div><!-- /.row -->\r\n\t\t\t\t</div><!-- /.container -->\r\n\t\t\t</div><!-- /.section-padding -->\r\n\t\t</section>\r\n\t\r\n\r\n\r\n\r\n\t\t<!--\r\n\t\t\t\tPro Trainer section start  \t  =\r\n\t\t======================================= -->\r\n\t\t\r\n\t\t<section id=\"pro-trainer\">\r\n\t\t\t<div class=\"section-padding\">\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<h2 class=\"section-title\"><span>Professional</span><br> Team</h2>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"card-deck\">\r\n\t\t\t\t\t\t<div class=\"col-sm-2 col-md-4\">\r\n\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t    <img class=\"card-img-top\" src=\"assets/img/team.jpg\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t    <div class=\"card-block\">\r\n\t\t\t\t\t\t      <h1 class=\"card-title\">Fitness24 Team</h1>\r\n\t\t\t\t\t\t      <p class=\"card-text\">Main focus of team to add kind of centers in this platform, where everyone easily get their services. We are laso with Fitness24 consult team.</p>\r\n\t\t\t\t\t\t      \r\n\t\t\t\t\t\t    </div>\r\n  \t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2 col-md-4\">\r\n\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t    <img class=\"card-img-top\" src=\"assets/img/development.jpg\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t    <div class=\"card-block\">\r\n\t\t\t\t\t\t      <h1 class=\"card-title\">Development Team</h1>\r\n\t\t\t\t\t\t      <p class=\"card-text\">We have a team where every member strong in his/her field like Web Development, Android development, Photoshop, Yoga. We are laso provide these services on requirments </p>\r\n\t\t\t\t\t\t     \r\n\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-2 col-md-4\">\r\n\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t    <img class=\"card-img-top\" src=\"assets/img/aboutus.png\" alt=\"fitnesstech\">\r\n\t\t\t\t\t\t\t    <div class=\"card-block\">\r\n\t\t\t\t\t\t\t      <h1 class=\"card-title\">Fitness Tech</h1>\r\n\t\t\t\t\t\t\t      <p class=\"card-text\">If you are looking for best supportive team for build your startup with best solution related IT software and web development then go with us.And join us to development.</p>\r\n\t\t\t\t\t\t\t      \r\n\t\t\t\t\t\t\t    </div>\r\n  \t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div><!-- /.row -->\r\n\t\t\t\t</div><!-- /.container -->\r\n\t\t\t</div><!-- /.section-padding -->\r\n\t\t</section>\r\n\t\t\r\n\t\t\r\n\t\t</div>\r\n\r\n\t\r\n\t\t\r\n\r\n"

/***/ })

});
//# sourceMappingURL=10.chunk.js.map