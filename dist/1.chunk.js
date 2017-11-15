webpackJsonp([1,15],{

/***/ 1444:
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
var forms_1 = __webpack_require__(4);
var ng2_validation_1 = __webpack_require__(737);
var home_component_1 = __webpack_require__(1456);
var home_routing_module_1 = __webpack_require__(1480);
var shared_module_1 = __webpack_require__(736);
var ngx_slick_1 = __webpack_require__(1504);
var ngx_swiper_wrapper_1 = __webpack_require__(1464);
var ngx_gallery_1 = __webpack_require__(349);
var SWIPER_CONFIG = {
    direction: 'horizontal',
    threshold: 50,
    spaceBetween: 3,
    slidesPerView: 3,
    centeredSlides: true,
    keyboardControl: true
};
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            ng2_validation_1.CustomFormsModule,
            home_routing_module_1.HomeRoutingModule,
            shared_module_1.SharedModule,
            ngx_gallery_1.NgxGalleryModule,
            ngx_slick_1.SlickModule.forRoot(),
            ngx_swiper_wrapper_1.SwiperModule.forRoot(SWIPER_CONFIG),
        ],
        declarations: [home_component_1.HomeComponent]
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=/home/rishabhg/Documents/mygit/demo/fintess24online/src/home.module.js.map

/***/ }),

/***/ 1447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// http://idangero.us/swiper/api/#emitter

exports.SwiperEvents = [
    'init',
    'destroy',
    'scroll',
    'progress',
    'setTranslate',
    'setTransition',
    'autoplay',
    'autoplayStart',
    'autoplayStop',
    'reachBeginning',
    'reachEnd',
    'slideChangeEnd',
    'slideChangeStart',
    'slideNextStart',
    'slideNextEnd',
    'slidePrevStart',
    'slidePrevEnd',
    'sliderMove',
    'swiperClick',
    'swiperTap',
    'swiperDoubleTap',
    'swiperTouchStart',
    'swiperTouchMove',
    'swiperTouchMoveOpposite',
    'swiperTouchEnd',
    'swiperTransitionStart',
    'swiperTransitionEnd',
    'imagesReady',
    'lazyImageLoad',
    'lazyImageReady',
    'paginationRendered'
];
var fadeObject = (function () {
    function fadeObject() {
    }
    return fadeObject;
}());
exports.fadeObject = fadeObject;
var flipObject = (function () {
    function flipObject() {
    }
    return flipObject;
}());
exports.flipObject = flipObject;
var cubeObject = (function () {
    function cubeObject() {
    }
    return cubeObject;
}());
exports.cubeObject = cubeObject;
var coverflowObject = (function () {
    function coverflowObject() {
    }
    return coverflowObject;
}());
exports.coverflowObject = coverflowObject;
var SwiperConfig = (function () {
    function SwiperConfig(config) {
        if (config === void 0) { config = {}; }
        this.assign(config);
    }
    SwiperConfig.prototype.assign = function (config) {
        if (config === void 0) { config = {}; }
        for (var key in config) {
            this[key] = config[key];
        }
    };
    return SwiperConfig;
}());
exports.SwiperConfig = SwiperConfig;
//# sourceMappingURL=swiper.interfaces.js.map

/***/ }),

/***/ 1449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Swiper = __webpack_require__(1519);
var core_1 = __webpack_require__(0);
var core_2 = __webpack_require__(0);
var core_3 = __webpack_require__(0);
var swiper_interfaces_1 = __webpack_require__(1447);
var SwiperDirective = (function () {
    function SwiperDirective(zone, elementRef, differs, defaults) {
        this.zone = zone;
        this.elementRef = elementRef;
        this.differs = differs;
        this.defaults = defaults;
        this.fxShow = true;
        this.fxHide = false;
        this.hidden = false;
        this.disabled = false;
        this.useSwiperClass = true;
        this.runInsideAngular = false;
        this.indexChange = new core_3.EventEmitter();
        this.S_INIT = new core_3.EventEmitter();
        this.S_DESTROY = new core_3.EventEmitter();
        this.S_SCROLL = new core_3.EventEmitter();
        this.S_PROGRESS = new core_3.EventEmitter();
        this.S_SETTRANSLATE = new core_3.EventEmitter();
        this.S_SETTRANSITION = new core_3.EventEmitter();
        this.S_AUTOPLAY = new core_3.EventEmitter();
        this.S_AUTOPLAYSTART = new core_3.EventEmitter();
        this.S_AUTOPLAYSTOP = new core_3.EventEmitter();
        this.S_REACHBEGINNING = new core_3.EventEmitter();
        this.S_REACHEND = new core_3.EventEmitter();
        this.S_SLIDECHANGESTART = new core_3.EventEmitter();
        this.S_SLIDECHANGEEND = new core_3.EventEmitter();
        this.S_SLIDENEXTSTART = new core_3.EventEmitter();
        this.S_SLIDENEXTEND = new core_3.EventEmitter();
        this.S_SLIDEPREVSTART = new core_3.EventEmitter();
        this.S_SLIDEPREVEND = new core_3.EventEmitter();
        this.S_SLIDERMOVE = new core_3.EventEmitter();
        this.S_CLICK = new core_3.EventEmitter();
        this.S_TAP = new core_3.EventEmitter();
        this.S_DOUBLETAP = new core_3.EventEmitter();
        this.S_TOUCHSTART = new core_3.EventEmitter();
        this.S_TOUCHMOVE = new core_3.EventEmitter();
        this.S_TOUCHMOVEOPPOSITE = new core_3.EventEmitter();
        this.S_TOUCHEND = new core_3.EventEmitter();
        this.S_TRANSITIONSTART = new core_3.EventEmitter();
        this.S_TRANSITIONEND = new core_3.EventEmitter();
        this.S_IMAGESREADY = new core_3.EventEmitter();
        this.S_LAZYIMAGELOAD = new core_3.EventEmitter();
        this.S_LAZYIMAGEREADY = new core_3.EventEmitter();
        this.S_PAGINATIONRENDERED = new core_3.EventEmitter();
    }
    Object.defineProperty(SwiperDirective.prototype, "index", {
        set: function (index) {
            if (index != null) {
                this.setIndex(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    SwiperDirective.prototype.ngOnInit = function () {
        var _this = this;
        var element = this.elementRef.nativeElement;
        var options = new swiper_interfaces_1.SwiperConfig(this.defaults);
        options.assign(this.config); // Custom config
        if (this.initialIndex != null) {
            options.initialSlide = this.initialIndex;
        }
        var onSlideChangeStart = options.onSlideChangeStart;
        var onScrollbarDragEnd = options.onScrollbarDragEnd;
        options.onSlideChangeStart = function (swiper) {
            if (onSlideChangeStart) {
                onSlideChangeStart(swiper);
            }
            _this.zone.run(function () {
                _this.indexChange.emit(swiper.snapIndex);
            });
        };
        options.onScrollbarDragEnd = function (swiper) {
            if (onScrollbarDragEnd) {
                onScrollbarDragEnd(swiper);
            }
            _this.zone.run(function () {
                _this.indexChange.emit(swiper.snapIndex);
            });
        };
        if (typeof options.scrollbar === 'string') {
            options.scrollbar = element.querySelector(options.scrollbar);
        }
        if (typeof options.pagination === 'string') {
            options.pagination = element.querySelector(options.pagination);
        }
        if (typeof options.prevButton === 'string') {
            options.prevButton = element.querySelector(options.prevButton);
        }
        if (typeof options.nextButton === 'string') {
            options.nextButton = element.querySelector(options.nextButton);
        }
        if (this.runInsideAngular) {
            this.swiper = new Swiper(element, options);
        }
        else {
            this.zone.runOutsideAngular(function () {
                _this.swiper = new Swiper(element, options);
            });
        }
        this.S_INIT.emit(this.swiper);
        // Add native swiper event handling
        swiper_interfaces_1.SwiperEvents.forEach(function (eventName) {
            eventName = eventName.replace('swiper', '');
            eventName = eventName.charAt(0).toLowerCase() + eventName.slice(1);
            _this.swiper.on(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args.length === 1) {
                    args = args[0];
                }
                if (_this["S_" + eventName.toUpperCase()]) {
                    _this["S_" + eventName.toUpperCase()].emit(args);
                }
            });
        });
        if (!this.configDiff) {
            this.configDiff = this.differs.find(this.config || {}).create(null);
        }
    };
    SwiperDirective.prototype.ngDoCheck = function () {
        var _this = this;
        var changes = this.configDiff.diff(this.config || {});
        if (changes) {
            this.initialIndex = this.getIndex();
            changes.forEachAddedItem(function (changed) {
                if (changed.key === 'initialSlide') {
                    _this.initialIndex = _this.config.initialSlide;
                }
            });
            this.ngOnDestroy();
            // Timeout is needed for the styles to update properly
            setTimeout(function () {
                _this.ngOnInit();
            }, 0);
        }
    };
    SwiperDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.swiper) {
            if (this.runInsideAngular) {
                this.swiper.destroy(true, true);
            }
            else {
                this.zone.runOutsideAngular(function () {
                    _this.swiper.destroy(true, true);
                });
            }
            this.swiper = null;
        }
    };
    SwiperDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.swiper && ((changes['hidden'] && this.hidden) ||
            (changes['fxHide'] && this.fxHide) || (changes['fxShow'] && !this.fxShow))) {
            // For some reason resize causes Swiper to change index when hidden
            this.initialIndex = this.swiper.activeIndex || 0;
        }
        if (this.swiper && ((changes['hidden'] && !this.hidden) ||
            (changes['fxHide'] && !this.fxHide) || (changes['fxShow'] && this.fxShow))) {
            // For some reason resize causes Swiper to change index when hidden
            this.swiper.activeIndex = this.initialIndex || 0;
            this.update(true);
        }
        if (this.swiper && changes['disabled']) {
            if (changes['disabled'].currentValue != changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    if (this.runInsideAngular) {
                        this.swiper.lockSwipes();
                    }
                    else {
                        this.zone.runOutsideAngular(function () {
                            _this.swiper.lockSwipes();
                        });
                    }
                }
                else if (changes['disabled'].currentValue === false) {
                    if (this.runInsideAngular) {
                        this.swiper.unlockSwipes();
                    }
                    else {
                        this.zone.runOutsideAngular(function () {
                            _this.swiper.unlockSwipes();
                        });
                    }
                }
            }
        }
    };
    SwiperDirective.prototype.update = function (updateTranslate) {
        var _this = this;
        setTimeout(function () {
            if (_this.swiper) {
                if (_this.runInsideAngular) {
                    _this.swiper.update();
                    if (updateTranslate) {
                        setTimeout(function () {
                            if (_this.swiper) {
                                _this.swiper.update(true);
                            }
                        }, 0);
                    }
                }
                else {
                    _this.zone.runOutsideAngular(function () {
                        _this.swiper.update();
                        if (updateTranslate) {
                            setTimeout(function () {
                                if (_this.swiper) {
                                    _this.swiper.update(true);
                                }
                            }, 0);
                        }
                    });
                }
            }
        }, 0);
    };
    SwiperDirective.prototype.getIndex = function () {
        if (!this.swiper) {
            return this.initialIndex;
        }
        else {
            var index = this.swiper.activeIndex;
            if (this.swiper.params.loop) {
                var slidesCount = this.swiper.slides.length - 2 * this.swiper.loopedSlides;
                index -= this.swiper.loopedSlides;
                if (index < 0) {
                    index += slidesCount;
                }
                else if (index >= slidesCount) {
                    index -= slidesCount;
                }
            }
            return index;
        }
    };
    SwiperDirective.prototype.setIndex = function (index, speed, silent) {
        var _this = this;
        if (!this.swiper || this.hidden || this.fxHide || !this.fxShow) {
            this.initialIndex = index;
        }
        else {
            var realIndex = index * this.swiper.params.slidesPerGroup;
            if (this.swiper.params.loop) {
                realIndex += this.swiper.loopedSlides;
            }
            if (this.runInsideAngular) {
                this.swiper.slideTo(index, speed, !silent);
            }
            else {
                this.zone.runOutsideAngular(function () {
                    _this.swiper.slideTo(index, speed, !silent);
                });
            }
        }
    };
    SwiperDirective.prototype.prevSlide = function (speed, silent) {
        var _this = this;
        if (this.swiper) {
            if (this.runInsideAngular) {
                this.swiper.slidePrev(!silent, speed);
            }
            else {
                this.zone.runOutsideAngular(function () {
                    _this.swiper.slidePrev(!silent, speed);
                });
            }
        }
    };
    SwiperDirective.prototype.nextSlide = function (speed, silent) {
        var _this = this;
        if (this.swiper) {
            if (this.runInsideAngular) {
                this.swiper.slideNext(!silent, speed);
            }
            else {
                this.zone.runOutsideAngular(function () {
                    _this.swiper.slideNext(!silent, speed);
                });
            }
        }
    };
    SwiperDirective.prototype.stopAutoplay = function (reset) {
        var _this = this;
        if (reset) {
            this.setIndex(0);
        }
        if (this.swiper) {
            if (this.runInsideAngular) {
                this.swiper.stopAutoplay();
            }
            else {
                this.zone.runOutsideAngular(function () {
                    _this.swiper.stopAutoplay();
                });
            }
        }
    };
    SwiperDirective.prototype.startAutoplay = function (reset) {
        var _this = this;
        if (reset) {
            this.setIndex(0);
        }
        if (this.swiper) {
            if (this.runInsideAngular) {
                this.swiper.startAutoplay();
            }
            else {
                this.zone.runOutsideAngular(function () {
                    _this.swiper.startAutoplay();
                });
            }
        }
    };
    return SwiperDirective;
}());
SwiperDirective.decorators = [
    { type: core_2.Directive, args: [{
                selector: '[swiper]'
            },] },
];
/** @nocollapse */
SwiperDirective.ctorParameters = function () { return [
    { type: core_1.NgZone, },
    { type: core_3.ElementRef, },
    { type: core_1.KeyValueDiffers, },
    { type: swiper_interfaces_1.SwiperConfig, decorators: [{ type: core_2.Optional },] },
]; };
SwiperDirective.propDecorators = {
    'index': [{ type: core_3.Input },],
    'fxShow': [{ type: core_3.Input },],
    'fxHide': [{ type: core_3.Input },],
    'hidden': [{ type: core_3.Input },],
    'disabled': [{ type: core_3.Input },],
    'useSwiperClass': [{ type: core_3.HostBinding, args: ['class.swiper',] }, { type: core_3.Input },],
    'runInsideAngular': [{ type: core_3.Input },],
    'config': [{ type: core_3.Input, args: ['swiper',] },],
    'indexChange': [{ type: core_3.Output },],
    'S_INIT': [{ type: core_3.Output, args: ['init',] },],
    'S_DESTROY': [{ type: core_3.Output, args: ['destroy',] },],
    'S_SCROLL': [{ type: core_3.Output, args: ['scroll',] },],
    'S_PROGRESS': [{ type: core_3.Output, args: ['progress',] },],
    'S_SETTRANSLATE': [{ type: core_3.Output, args: ['setTranslate',] },],
    'S_SETTRANSITION': [{ type: core_3.Output, args: ['setTransition',] },],
    'S_AUTOPLAY': [{ type: core_3.Output, args: ['autoplay',] },],
    'S_AUTOPLAYSTART': [{ type: core_3.Output, args: ['autoplayStart',] },],
    'S_AUTOPLAYSTOP': [{ type: core_3.Output, args: ['autoplayStop',] },],
    'S_REACHBEGINNING': [{ type: core_3.Output, args: ['reachBeginning',] },],
    'S_REACHEND': [{ type: core_3.Output, args: ['reachEnd',] },],
    'S_SLIDECHANGESTART': [{ type: core_3.Output, args: ['slideChangeStart',] },],
    'S_SLIDECHANGEEND': [{ type: core_3.Output, args: ['slideChangeEnd',] },],
    'S_SLIDENEXTSTART': [{ type: core_3.Output, args: ['slideNextStart',] },],
    'S_SLIDENEXTEND': [{ type: core_3.Output, args: ['slideNextEnd',] },],
    'S_SLIDEPREVSTART': [{ type: core_3.Output, args: ['slidePrevStart',] },],
    'S_SLIDEPREVEND': [{ type: core_3.Output, args: ['slidePrevEnd',] },],
    'S_SLIDERMOVE': [{ type: core_3.Output, args: ['sliderMove',] },],
    'S_CLICK': [{ type: core_3.Output, args: ['swiperClick',] },],
    'S_TAP': [{ type: core_3.Output, args: ['swiperTap',] },],
    'S_DOUBLETAP': [{ type: core_3.Output, args: ['swiperDoubleTap',] },],
    'S_TOUCHSTART': [{ type: core_3.Output, args: ['swiperTouchStart',] },],
    'S_TOUCHMOVE': [{ type: core_3.Output, args: ['swiperTouchMove',] },],
    'S_TOUCHMOVEOPPOSITE': [{ type: core_3.Output, args: ['swiperTouchMoveOpposite',] },],
    'S_TOUCHEND': [{ type: core_3.Output, args: ['swiperTouchEnd',] },],
    'S_TRANSITIONSTART': [{ type: core_3.Output, args: ['swiperTransitionStart',] },],
    'S_TRANSITIONEND': [{ type: core_3.Output, args: ['swiperTransitionEnd',] },],
    'S_IMAGESREADY': [{ type: core_3.Output, args: ['imagesReady',] },],
    'S_LAZYIMAGELOAD': [{ type: core_3.Output, args: ['lazyImageLoad',] },],
    'S_LAZYIMAGEREADY': [{ type: core_3.Output, args: ['lazyImageReady',] },],
    'S_PAGINATIONRENDERED': [{ type: core_3.Output, args: ['paginationRendered',] },],
};
exports.SwiperDirective = SwiperDirective;
//# sourceMappingURL=swiper.directive.js.map

/***/ }),

/***/ 1456:
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
var ngx_swiper_wrapper_1 = __webpack_require__(1464);
__webpack_require__(350);
__webpack_require__(223);
__webpack_require__(351);
var shared_service_1 = __webpack_require__(346);
var home_service_1 = __webpack_require__(1481);
var tsConstants = __webpack_require__(345);
var HomeComponent = (function () {
    function HomeComponent(_sharedService, _homeService) {
        this._sharedService = _sharedService;
        this._homeService = _homeService;
        this._host = tsConstants.HOST;
        this.offers = 'offers';
        this.isloading = false;
        this.config = {
            scrollbar: null,
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 4,
            centeredSlides: false,
            paginationClickable: true,
            spaceBetween: 30,
        };
        this.slickModal = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.findOffers();
        this.galleryOptions = [
            {
                image: false,
                height: "125px",
                width: "100%",
                thumbnailsColumns: 4
            },
            // max-width 800
            {
                breakpoint: 500,
                height: "130px",
                width: "100%"
            },
        ];
        this.galleryImages = [
            {
                small: 'assets/images/flex-img1.jpg',
                medium: 'assets/images/flex-img1.jpg',
                big: 'assets/images/flex-img1.jpg'
            },
            {
                small: 'assets/images/flex-img2.jpg',
                medium: 'assets/images/flex-img2.jpg',
                big: 'assets/images/flex-img2.jpg'
            },
            {
                small: 'assets/images/flex-img3.jpg',
                medium: 'assets/images/flex-img3.jpg',
                big: 'assets/3-big.jpg'
            },
            {
                small: 'assets/images/flex-img2.jpg',
                medium: 'assets/images/flex-img2.jpg',
                big: 'assets/images/flex-img2.jpg'
            },
            {
                small: 'assets/images/flex-img2.jpg',
                medium: 'assets/images/flex-img2.jpg',
                big: 'assets/images/flex-img2.jpg'
            },
            {
                small: 'assets/images/flex-img2.jpg',
                medium: 'assets/images/flex-img2.jpg',
                big: 'assets/images/flex-img2.jpg'
            },
            {
                small: 'assets/images/flex-img3.jpg',
                medium: 'assets/images/flex-img3.jpg',
                big: 'assets/3-big.jpg'
            },
            {
                small: 'assets/images/flex-img3.jpg',
                medium: 'assets/images/flex-img3.jpg',
                big: 'assets/3-big.jpg'
            },
            {
                small: 'assets/images/flex-img3.jpg',
                medium: 'assets/images/flex-img3.jpg',
                big: 'assets/3-big.jpg'
            },
            {
                small: 'assets/images/flex-img3.jpg',
                medium: 'assets/images/flex-img3.jpg',
                big: 'assets/3-big.jpg'
            },
            {
                small: 'assets/images/flex-img3.jpg',
                medium: 'assets/images/flex-img3.jpg',
                big: 'assets/3-big.jpg'
            },
            {
                small: 'assets/images/flex-img3.jpg',
                medium: 'assets/images/flex-img3.jpg',
                big: 'assets/3-big.jpg'
            }
        ];
    };
    /*this.slides = [
        {img: "http://placehold.it/350x150/000000"},
        {img: "http://placehold.it/350x150/111111"},
        {img: "http://placehold.it/350x150/333333"},
        {img: "http://placehold.it/350x150/666666"}
    ];
    this.slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};*/
    // this.afterChange;
    HomeComponent.prototype.getData = function () {
        console.log("This is a test!");
        console.log("origin ", this.origin);
        console.log("destination ", this.destination);
        this._sharedService.getDistance(this.origin, this.destination).subscribe(function (res) {
            var response = res.json();
            // console.log( "response ", response );
            /*if( response == 'undefined' ) {
                this.distance = "Input address not valid";
            } else {
                this.distance = response.data.distances.rows.elements.distance.text;
            }*/
            if (response.success == "false") {
                console.log("response1 ", response.message);
            }
            else {
                // console.log( "response3 ", response.data );
                console.log("response4 ", response.data.distance.text);
                console.log("response4 ", response.data.distance.value);
            }
        });
    };
    HomeComponent.prototype.onIndexChange = function (index) {
        console.log('Swiper index: ' + index);
    };
    HomeComponent.prototype.findOffers = function () {
        var _this = this;
        console.log("in offers");
        this.isloading = false;
        this._homeService.getOffers(this.offers).subscribe(function (res) {
            if (res) {
                console.log("res", res);
                _this.isloading = true;
                _this.data = res.data;
                console.log("data", _this.data);
            }
            else {
                _this.isloading = false;
                console.log("err");
            }
        }, function (err) {
            _this.isloading = false;
            console.log("err");
        });
    };
    return HomeComponent;
}());
__decorate([
    core_1.ViewChild(ngx_swiper_wrapper_1.SwiperComponent),
    __metadata("design:type", typeof (_a = typeof ngx_swiper_wrapper_1.SwiperComponent !== "undefined" && ngx_swiper_wrapper_1.SwiperComponent) === "function" && _a || Object)
], HomeComponent.prototype, "swiperView", void 0);
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        template: __webpack_require__(1516),
        styles: [__webpack_require__(1487)],
        providers: [home_service_1.HomeService]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof shared_service_1.SharedService !== "undefined" && shared_service_1.SharedService) === "function" && _b || Object, typeof (_c = typeof home_service_1.HomeService !== "undefined" && home_service_1.HomeService) === "function" && _c || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var _a, _b, _c;
//# sourceMappingURL=/home/rishabhg/Documents/mygit/demo/fintess24online/src/home.component.js.map

/***/ }),

/***/ 1464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(1505);
exports.SwiperComponent = index_1.SwiperComponent;
exports.SwiperDirective = index_1.SwiperDirective;
exports.coverflowObject = index_1.coverflowObject;
exports.cubeObject = index_1.cubeObject;
exports.fadeObject = index_1.fadeObject;
exports.flipObject = index_1.flipObject;
exports.SwiperConfig = index_1.SwiperConfig;
exports.SwiperEvents = index_1.SwiperEvents;
exports.provideDefaultConfig = index_1.provideDefaultConfig;
exports.provideForRootGuard = index_1.provideForRootGuard;
exports.SWIPER_CONFIG = index_1.SWIPER_CONFIG;
exports.SWIPER_GUARD = index_1.SWIPER_GUARD;
exports.SwiperModule = index_1.SwiperModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var swiper_directive_1 = __webpack_require__(1449);
var swiper_interfaces_1 = __webpack_require__(1447);
var SwiperComponent = (function () {
    function SwiperComponent(elementRef, defaults) {
        this.elementRef = elementRef;
        this.defaults = defaults;
        this.index = null;
        this.fxShow = true;
        this.fxHide = false;
        this.hidden = false;
        this.disabled = false;
        this.useSwiperClass = true;
        this.runInsideAngular = false;
        this.useSwiperWrapperClass = true;
        this.indexChange = new core_1.EventEmitter();
        this.S_INIT = new core_1.EventEmitter();
        this.S_DESTROY = new core_1.EventEmitter();
        this.S_SCROLL = new core_1.EventEmitter();
        this.S_PROGRESS = new core_1.EventEmitter();
        this.S_SETTRANSLATE = new core_1.EventEmitter();
        this.S_SETTRANSITION = new core_1.EventEmitter();
        this.S_AUTOPLAY = new core_1.EventEmitter();
        this.S_AUTOPLAYSTART = new core_1.EventEmitter();
        this.S_AUTOPLAYSTOP = new core_1.EventEmitter();
        this.S_REACHBEGINNING = new core_1.EventEmitter();
        this.S_REACHEND = new core_1.EventEmitter();
        this.S_SLIDECHANGESTART = new core_1.EventEmitter();
        this.S_SLIDECHANGEEND = new core_1.EventEmitter();
        this.S_SLIDENEXTSTART = new core_1.EventEmitter();
        this.S_SLIDENEXTEND = new core_1.EventEmitter();
        this.S_SLIDEPREVSTART = new core_1.EventEmitter();
        this.S_SLIDEPREVEND = new core_1.EventEmitter();
        this.S_SLIDERMOVE = new core_1.EventEmitter();
        this.S_CLICK = new core_1.EventEmitter();
        this.S_TAP = new core_1.EventEmitter();
        this.S_DOUBLETAP = new core_1.EventEmitter();
        this.S_TOUCHSTART = new core_1.EventEmitter();
        this.S_TOUCHMOVE = new core_1.EventEmitter();
        this.S_TOUCHMOVEOPPOSITE = new core_1.EventEmitter();
        this.S_TOUCHEND = new core_1.EventEmitter();
        this.S_TRANSITIONSTART = new core_1.EventEmitter();
        this.S_TRANSITIONEND = new core_1.EventEmitter();
        this.S_IMAGESREADY = new core_1.EventEmitter();
        this.S_LAZYIMAGELOAD = new core_1.EventEmitter();
        this.S_LAZYIMAGEREADY = new core_1.EventEmitter();
        this.S_PAGINATIONRENDERED = new core_1.EventEmitter();
    }
    Object.defineProperty(SwiperComponent.prototype, "isAtLast", {
        get: function () {
            return (!this.directiveRef || !this.directiveRef.swiper) ?
                false : this.directiveRef.swiper.isEnd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiperComponent.prototype, "isAtFirst", {
        get: function () {
            return (!this.directiveRef || !this.directiveRef.swiper) ?
                false : this.directiveRef.swiper.isBeginning;
        },
        enumerable: true,
        configurable: true
    });
    SwiperComponent.prototype.ngDoCheck = function () {
        if (this.swiperSlides) {
            var children = this.swiperSlides.nativeElement.children.length;
            if (children !== this.childrenDiff) {
                this.childrenDiff = children;
                for (var i = 0; i < this.swiperSlides.nativeElement.children.length; i++) {
                    this.swiperSlides.nativeElement.children[i].classList.add('swiper-slide');
                }
                this.directiveRef.update();
            }
        }
    };
    SwiperComponent.prototype.getConfig = function () {
        this.config = this.config || {};
        var options = new swiper_interfaces_1.SwiperConfig(this.defaults);
        options.assign(this.config); // Custom config
        if (options.scrollbar === true) {
            options.scrollbar = '.swiper-scrollbar';
        }
        if (options.pagination === true) {
            options.pagination = '.swiper-pagination';
        }
        if (options.prevButton === true) {
            options.prevButton = '.swiper-button-prev';
        }
        if (options.nextButton === true) {
            options.nextButton = '.swiper-button-next';
        }
        if (options.pagination === '.swiper-pagination' && !options.paginationBulletRender) {
            if (!this.paginationBulletRender) {
                this.paginationBulletRender = function (swiper, index, className) {
                    if (index === 0) {
                        return '<span class="swiper-pagination-handle" index=' + index + '>' +
                            '<span class="' + className + ' ' + className + '-first"></span></span>';
                    }
                    else if (index === (swiper.slides.length - 1)) {
                        return '<span class="swiper-pagination-handle" index=' + index + '>' +
                            '<span class="' + className + ' ' + className + '-last"></span></span>';
                    }
                    else {
                        return '<span class="swiper-pagination-handle" index=' + index + '>' +
                            '<span class="' + className + ' ' + className + '-middle"></span></span>';
                    }
                };
            }
            options.paginationBulletRender = this.paginationBulletRender;
        }
        return options;
    };
    SwiperComponent.prototype.update = function (updateTranslate) {
        console.warn('Deprecated function, update needs to be called through directiveRef!');
        this.directiveRef.update(updateTranslate);
    };
    SwiperComponent.prototype.getIndex = function () {
        console.warn('Deprecated function, getIndex needs to be called through directiveRef!');
        return this.directiveRef.getIndex();
    };
    SwiperComponent.prototype.setIndex = function (index, speed, callbacks) {
        console.warn('Deprecated function, setIndex needs to be called through directiveRef!');
        this.directiveRef.setIndex(index, speed, callbacks);
    };
    SwiperComponent.prototype.prevSlide = function (callbacks, speed) {
        console.warn('Deprecated function, prevSlide needs to be called through directiveRef!');
        this.directiveRef.prevSlide(speed, callbacks);
    };
    SwiperComponent.prototype.nextSlide = function (callbacks, speed) {
        console.warn('Deprecated function, nextSlide needs to be called through directiveRef!');
        this.directiveRef.nextSlide(speed, callbacks);
    };
    SwiperComponent.prototype.stopAutoplay = function () {
        console.warn('Deprecated function, stopAutoplay needs to be called through directiveRef!');
        this.directiveRef.stopAutoplay();
    };
    SwiperComponent.prototype.startAutoplay = function () {
        console.warn('Deprecated function, startAutoplay needs to be called through directiveRef!');
        this.directiveRef.startAutoplay();
    };
    return SwiperComponent;
}());
SwiperComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'swiper',
                template: '<div class="swiper-container" [swiper]="getConfig()" [index]="index" [hidden]="hidden" [fxHide]="fxHide" [fxShow]="fxShow" [disabled]="disabled" [useSwiperClass]="useSwiperClass" [runInsideAngular]="runInsideAngular" (indexChange)="indexChange.emit($event)" (init)="S_INIT.emit($event)" (destroy)="S_DESTROY.emit($event)" (scroll)="S_SCROLL.emit($event)" (progress)="S_PROGRESS.emit($event)" (setTranslate)="S_SETTRANSLATE.emit($event)" (setTransition)="S_SETTRANSITION.emit($event)" (autoplay)="S_AUTOPLAY.emit($event)" (autoplayStart)="S_AUTOPLAYSTART.emit($event)" (autoplayStop)="S_AUTOPLAYSTOP.emit($event)" (reachBeginning)="S_REACHBEGINNING.emit($event)" (reachEnd)="S_REACHEND.emit($event)" (slideChangeStart)="S_SLIDECHANGESTART.emit($event)" (slideChangeEnd)="S_SLIDECHANGEEND.emit($event)" (slideNextStart)="S_SLIDENEXTSTART.emit($event)" (slideNextEnd)="S_SLIDENEXTEND.emit($event)" (slidePrevStart)="S_SLIDEPREVSTART.emit($event)" (slidePrevEnd)="S_SLIDEPREVEND.emit($event)" (sliderMove)="S_SLIDERMOVE.emit($event)" (swiperClick)="S_CLICK.emit($event)" (swiperTap)="S_TAP.emit($event)" (swiperDoubleTap)="S_DOUBLETAP.emit($event)" (swiperTouchStart)="S_TOUCHSTART.emit($event)" (swiperTouchMove)="S_TOUCHMOVE.emit($event)" (swiperTouchMoveOpposite)="S_TOUCHMOVEOPPOSITE.emit($event)" (swiperTouchEnd)="S_TOUCHEND.emit($event)" (swiperTransitionStart)="S_TRANSITIONSTART.emit($event)" (swiperTransitionEnd)="S_TRANSITIONEND.emit($event)" (imagesReady)="S_IMAGESREADY.emit($event)" (lazyImageLoad)="S_LAZYIMAGELOAD.emit($event)" (lazyImageReady)="S_LAZYIMAGEREADY.emit($event)" (paginationRendered)="S_PAGINATIONRENDERED.emit($event)"><div #swiperSlides class="swiper-wrapper"><ng-content></ng-content></div><div [hidden]="!config?.scrollbar" class="swiper-scrollbar"></div><div [hidden]="!config?.prevButton" class="swiper-button-prev" [attr.disabled]="isAtFirst"></div><div [hidden]="!config?.nextButton" class="swiper-button-next" [attr.disabled]="isAtLast"></div><div [hidden]="!config?.pagination" class="swiper-pagination" (click)="directiveRef.setIndex($event.target.attributes.index.value)"></div></div>',
                styles: ['.swiper-slide,.swiper-wrapper{width:100%;height:100%;position:relative}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-moz-box-orient:vertical;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.swiper-wrapper{z-index:1;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-transition-property:-webkit-transform;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-o-transform:translate(0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.swiper-container-multirow>.swiper-wrapper{-webkit-box-lines:multiple;-moz-box-lines:multiple;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex:0 0 auto;flex-shrink:0}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-transition-property:-webkit-transform,height;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform,height}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-wp8-horizontal{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-wp8-vertical{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;-moz-background-size:27px 44px;-webkit-background-size:27px 44px;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z\'%20fill%3D\'%23007aff\'%2F%3E%3C%2Fsvg%3E");left:10px;right:auto}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z\'%20fill%3D\'%23000000\'%2F%3E%3C%2Fsvg%3E")}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z\'%20fill%3D\'%23ffffff\'%2F%3E%3C%2Fsvg%3E")}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z\'%20fill%3D\'%23007aff\'%2F%3E%3C%2Fsvg%3E");right:10px;left:auto}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z\'%20fill%3D\'%23000000\'%2F%3E%3C%2Fsvg%3E")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20viewBox%3D\'0%200%2027%2044\'%3E%3Cpath%20d%3D\'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z\'%20fill%3D\'%23ffffff\'%2F%3E%3C%2Fsvg%3E")}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-white .swiper-pagination-bullet{background:#fff}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);-moz-transform:translate3d(0,-50%,0);-o-transform:translate(0,-50%);-ms-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:5px 0;display:block}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 5px}.swiper-pagination-progress{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progress .swiper-pagination-progressbar{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);-o-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-moz-transform-origin:left top;-ms-transform-origin:left top;-o-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar{-webkit-transform-origin:right top;-moz-transform-origin:right top;-ms-transform-origin:right top;-o-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progress{width:100%;height:4px;left:0;top:0}.swiper-container-vertical>.swiper-pagination-progress{width:4px;height:100%;left:0;top:0}.swiper-pagination-progress.swiper-pagination-white{background:rgba(255,255,255,.5)}.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar{background:#fff}.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar{background:#000}.swiper-container-3d{-webkit-perspective:1200px;-moz-perspective:1200px;-o-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),transparent);background-image:-moz-linear-gradient(right,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(right,rgba(0,0,0,.5),transparent);background-image:linear-gradient(to left,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),transparent);background-image:-moz-linear-gradient(left,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(left,rgba(0,0,0,.5),transparent);background-image:linear-gradient(to right,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),transparent);background-image:-moz-linear-gradient(bottom,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),transparent);background-image:linear-gradient(to top,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),transparent);background-image:-moz-linear-gradient(top,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(top,rgba(0,0,0,.5),transparent);background-image:linear-gradient(to bottom,rgba(0,0,0,.5),transparent)}.swiper-container-coverflow .swiper-wrapper,.swiper-container-flip .swiper-wrapper{-ms-perspective:1200px}.swiper-container-cube,.swiper-container-flip{overflow:visible}.swiper-container-cube .swiper-slide,.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-cube .swiper-slide .swiper-slide,.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active,.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-slide{visibility:hidden;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-moz-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-moz-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-moz-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;-moz-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}.swiper-lazy-preloader:after{display:block;content:"";width:100%;height:100%;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D\'0%200%20120%20120\'%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20xmlns%3Axlink%3D\'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink\'%3E%3Cdefs%3E%3Cline%20id%3D\'l\'%20x1%3D\'60\'%20x2%3D\'60\'%20y1%3D\'7\'%20y2%3D\'27\'%20stroke%3D\'%236c6c6c\'%20stroke-width%3D\'11\'%20stroke-linecap%3D\'round\'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(30%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(60%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(90%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(120%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(150%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.37\'%20transform%3D\'rotate(180%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.46\'%20transform%3D\'rotate(210%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.56\'%20transform%3D\'rotate(240%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.66\'%20transform%3D\'rotate(270%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.75\'%20transform%3D\'rotate(300%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.85\'%20transform%3D\'rotate(330%2060%2C60)\'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");background-position:50%;-webkit-background-size:100%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D\'0%200%20120%20120\'%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%20xmlns%3Axlink%3D\'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink\'%3E%3Cdefs%3E%3Cline%20id%3D\'l\'%20x1%3D\'60\'%20x2%3D\'60\'%20y1%3D\'7\'%20y2%3D\'27\'%20stroke%3D\'%23fff\'%20stroke-width%3D\'11\'%20stroke-linecap%3D\'round\'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(30%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(60%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(90%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(120%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.27\'%20transform%3D\'rotate(150%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.37\'%20transform%3D\'rotate(180%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.46\'%20transform%3D\'rotate(210%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.56\'%20transform%3D\'rotate(240%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.66\'%20transform%3D\'rotate(270%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.75\'%20transform%3D\'rotate(300%2060%2C60)\'%2F%3E%3Cuse%20xlink%3Ahref%3D\'%23l\'%20opacity%3D\'.85\'%20transform%3D\'rotate(330%2060%2C60)\'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}swiper.s-wrapper[fxflex],swiper.s-wrapper[fxflexfill],swiper.s-wrapper[fxlayout]{display:flex;flex-direction:inherit;-webkit-box-orient:inherit;-webkit-box-direction:inherit;align-item:inherit;place-content:inherit;-webkit-box-pack:inherit;-webkit-box-align:inherit}swiper.s-wrapper[fxflex]>.swiper,swiper.s-wrapper[fxflexfill]>.swiper,swiper.s-wrapper[fxlayout]>.swiper{display:flex;flex:1 1 auto;-webkit-box-flex:1;-ms-flex:1 1 auto;flex-direction:inherit;-webkit-box-orient:inherit;-webkit-box-direction:inherit;align-item:inherit;place-content:inherit;-webkit-box-pack:inherit;-webkit-box-align:inherit}swiper.s-wrapper>.swiper{width:100%;height:100%}swiper.s-wrapper>.swiper .swiper-wrapper .swiper-slide,swiper.s-wrapper>.swiper .swiper-wrapper .swiper-slide-content{overflow:auto;width:100%;height:100%;max-width:100%;max-height:100%}swiper.s-wrapper>.swiper .swiper-pagination{pointer-events:none}swiper.s-wrapper>.swiper .swiper-pagination .swiper-pagination-handle{margin:2px;cursor:pointer;pointer-events:all}swiper.s-wrapper>.swiper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet{pointer-events:none}swiper.s-wrapper>.swiper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet-first,swiper.s-wrapper>.swiper .swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet-last{border:1px solid rgba(0,0,0,.5)}swiper.s-wrapper>.swiper.swiper-container-vertical>.swiper-button-prev{top:10px;left:50%;margin-top:0;margin-left:-13px;transform:rotate(90deg)}swiper.s-wrapper>.swiper.swiper-container-vertical>.swiper-button-next{top:auto;bottom:10px;left:50%;margin-top:0;margin-left:-13px;transform:rotate(90deg)}swiper.s-wrapper>.swiper.swiper-container-vertical>.swiper-scrollbar{width:8px;transition:width 250ms ease-in-out}swiper.s-wrapper>.swiper.swiper-container-vertical>.swiper-scrollbar:hover{width:16px}swiper.s-wrapper>.swiper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle{display:block}swiper.s-wrapper>.swiper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet{display:inline-block}swiper.s-wrapper>.swiper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper.s-wrapper>.swiper.swiper-container-vertical>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{margin:5px -1px}swiper.s-wrapper>.swiper.swiper-container-horizontal>.swiper-scrollbar{height:8px;transition:height 250ms ease-in-out}swiper.s-wrapper>.swiper.swiper-container-horizontal>.swiper-scrollbar:hover{height:16px}swiper.s-wrapper>.swiper.swiper-container-horizontal>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-first,swiper.s-wrapper>.swiper.swiper-container-horizontal>.swiper-pagination .swiper-pagination-handle .swiper-pagination-bullet.swiper-pagination-bullet-last{margin:-1px 5px}'],
                encapsulation: core_1.ViewEncapsulation.None
            },] },
];
/** @nocollapse */
SwiperComponent.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: swiper_interfaces_1.SwiperConfig, decorators: [{ type: core_1.Optional },] },
]; };
SwiperComponent.propDecorators = {
    'index': [{ type: core_1.Input },],
    'fxShow': [{ type: core_1.Input },],
    'fxHide': [{ type: core_1.Input },],
    'hidden': [{ type: core_1.HostBinding, args: ['hidden',] }, { type: core_1.Input },],
    'disabled': [{ type: core_1.Input },],
    'config': [{ type: core_1.Input },],
    'useSwiperClass': [{ type: core_1.Input },],
    'runInsideAngular': [{ type: core_1.Input },],
    'useSwiperWrapperClass': [{ type: core_1.HostBinding, args: ['class.s-wrapper',] }, { type: core_1.Input },],
    'indexChange': [{ type: core_1.Output },],
    'swiperSlides': [{ type: core_1.ViewChild, args: ['swiperSlides',] },],
    'directiveRef': [{ type: core_1.ViewChild, args: [swiper_directive_1.SwiperDirective,] },],
    'S_INIT': [{ type: core_1.Output, args: ['init',] },],
    'S_DESTROY': [{ type: core_1.Output, args: ['destroy',] },],
    'S_SCROLL': [{ type: core_1.Output, args: ['scroll',] },],
    'S_PROGRESS': [{ type: core_1.Output, args: ['progress',] },],
    'S_SETTRANSLATE': [{ type: core_1.Output, args: ['setTranslate',] },],
    'S_SETTRANSITION': [{ type: core_1.Output, args: ['setTransition',] },],
    'S_AUTOPLAY': [{ type: core_1.Output, args: ['autoplay',] },],
    'S_AUTOPLAYSTART': [{ type: core_1.Output, args: ['autoplayStart',] },],
    'S_AUTOPLAYSTOP': [{ type: core_1.Output, args: ['autoplayStop',] },],
    'S_REACHBEGINNING': [{ type: core_1.Output, args: ['reachBeginning',] },],
    'S_REACHEND': [{ type: core_1.Output, args: ['reachEnd',] },],
    'S_SLIDECHANGESTART': [{ type: core_1.Output, args: ['slideChangeStart',] },],
    'S_SLIDECHANGEEND': [{ type: core_1.Output, args: ['slideChangeEnd',] },],
    'S_SLIDENEXTSTART': [{ type: core_1.Output, args: ['slideNextStart',] },],
    'S_SLIDENEXTEND': [{ type: core_1.Output, args: ['slideNextEnd',] },],
    'S_SLIDEPREVSTART': [{ type: core_1.Output, args: ['slidePrevStart',] },],
    'S_SLIDEPREVEND': [{ type: core_1.Output, args: ['slidePrevEnd',] },],
    'S_SLIDERMOVE': [{ type: core_1.Output, args: ['sliderMove',] },],
    'S_CLICK': [{ type: core_1.Output, args: ['swiperClick',] },],
    'S_TAP': [{ type: core_1.Output, args: ['swiperTap',] },],
    'S_DOUBLETAP': [{ type: core_1.Output, args: ['swiperDoubleTap',] },],
    'S_TOUCHSTART': [{ type: core_1.Output, args: ['swiperTouchStart',] },],
    'S_TOUCHMOVE': [{ type: core_1.Output, args: ['swiperTouchMove',] },],
    'S_TOUCHMOVEOPPOSITE': [{ type: core_1.Output, args: ['swiperTouchMoveOpposite',] },],
    'S_TOUCHEND': [{ type: core_1.Output, args: ['swiperTouchEnd',] },],
    'S_TRANSITIONSTART': [{ type: core_1.Output, args: ['swiperTransitionStart',] },],
    'S_TRANSITIONEND': [{ type: core_1.Output, args: ['swiperTransitionEnd',] },],
    'S_IMAGESREADY': [{ type: core_1.Output, args: ['imagesReady',] },],
    'S_LAZYIMAGELOAD': [{ type: core_1.Output, args: ['lazyImageLoad',] },],
    'S_LAZYIMAGEREADY': [{ type: core_1.Output, args: ['lazyImageReady',] },],
    'S_PAGINATIONRENDERED': [{ type: core_1.Output, args: ['paginationRendered',] },],
};
exports.SwiperComponent = SwiperComponent;
//# sourceMappingURL=swiper.component.js.map

/***/ }),

/***/ 1480:
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
var home_component_1 = __webpack_require__(1456);
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        data: {
            title: 'Home'
        }
    }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], HomeRoutingModule);
exports.HomeRoutingModule = HomeRoutingModule;
//# sourceMappingURL=/home/rishabhg/Documents/mygit/demo/fintess24online/src/home-routing.module.js.map

/***/ }),

/***/ 1481:
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
__webpack_require__(223);
var tsConstants = __webpack_require__(345);
var shared_service_1 = __webpack_require__(346);
var HomeService = (function () {
    function HomeService(_http, _sharedService) {
        this._http = _http;
        this._sharedService = _sharedService;
        this._host = tsConstants.HOST;
    }
    HomeService.prototype.getOffers = function (offers) {
        var headers = this._sharedService.getAuthorizationHeader();
        var url = this._host + '/get?model=' + offers;
        return this._http.get(url, { headers: headers }).map(function (res) { return res.json(); });
    };
    return HomeService;
}());
HomeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof shared_service_1.SharedService !== "undefined" && shared_service_1.SharedService) === "function" && _b || Object])
], HomeService);
exports.HomeService = HomeService;
var _a, _b;
//# sourceMappingURL=/home/rishabhg/Documents/mygit/demo/fintess24online/src/home.service.js.map

/***/ }),

/***/ 1487:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(76)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickModule", function() { return SlickModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickComponent", function() { return SlickComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickItemDirective", function() { return SlickItemDirective; });




/**
 * Slick component
 */
var SlickComponent = (function () {
    /**
     * Constructor
     * @param {?} el
     * @param {?} zone
     */
    function SlickComponent(el, zone) {
        this.el = el;
        this.zone = zone;
        this.afterChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.beforeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.breakpoint = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.destroy = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.slides = [];
        this.initialized = false;
    }
    /**
     * On component destroy
     * @return {?}
     */
    SlickComponent.prototype.ngOnDestroy = function () {
        this.unslick();
    };
    /**
     * On component view init
     * @return {?}
     */
    SlickComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * init slick
     * @return {?}
     */
    SlickComponent.prototype.initSlick = function () {
        var _this = this;
        var /** @type {?} */ self = this;
        this.zone.runOutsideAngular(function () {
            _this.$instance = $(_this.el.nativeElement).slick(_this.config);
            _this.initialized = true;
            _this.$instance.on('afterChange', function (event, slick, currentSlide) {
                self.zone.run(function () {
                    self.afterChange.emit({ event: event, slick: slick, currentSlide: currentSlide });
                });
            });
            _this.$instance.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                self.zone.run(function () {
                    self.beforeChange.emit({ event: event, slick: slick, currentSlide: currentSlide, nextSlide: nextSlide });
                });
            });
            _this.$instance.on('breakpoint', function (event, slick, breakpoint) {
                self.zone.run(function () {
                    self.breakpoint.emit({ event: event, slick: slick, breakpoint: breakpoint });
                });
            });
            _this.$instance.on('destroy', function (event, slick) {
                self.zone.run(function () {
                    self.destroy.emit({ event: event, slick: slick });
                });
            });
        });
    };
    /**
     * @param {?} slickItem
     * @return {?}
     */
    SlickComponent.prototype.addSlide = function (slickItem) {
        if (!this.initialized) {
            this.initSlick();
        }
        this.slides.push(slickItem);
        this.$instance.slick('slickAdd', slickItem.el.nativeElement);
    };
    /**
     * @param {?} slickItem
     * @return {?}
     */
    SlickComponent.prototype.removeSlide = function (slickItem) {
        var /** @type {?} */ idx = this.slides.indexOf(slickItem);
        this.$instance.slick('slickRemove', idx);
        this.slides = this.slides.filter(function (s) { return s !== slickItem; });
    };
    /**
     * Slick Method
     * @param {?} index
     * @return {?}
     */
    SlickComponent.prototype.slickGoTo = function (index) {
        var _this = this;
        this.zone.run(function () {
            _this.$instance.slick('slickGoTo', index);
        });
    };
    /**
     * @return {?}
     */
    SlickComponent.prototype.slickNext = function () {
        var _this = this;
        this.zone.run(function () {
            _this.$instance.slick('slickNext');
        });
    };
    /**
     * @return {?}
     */
    SlickComponent.prototype.slickPrev = function () {
        var _this = this;
        this.zone.run(function () {
            _this.$instance.slick('slickPrev');
        });
    };
    /**
     * @return {?}
     */
    SlickComponent.prototype.slickPause = function () {
        var _this = this;
        this.zone.run(function () {
            _this.$instance.slick('slickPause');
        });
    };
    /**
     * @return {?}
     */
    SlickComponent.prototype.slickPlay = function () {
        var _this = this;
        this.zone.run(function () {
            _this.$instance.slick('slickPlay');
        });
    };
    /**
     * @return {?}
     */
    SlickComponent.prototype.unslick = function () {
        var _this = this;
        this.zone.run(function () {
            _this.$instance.slick('unslick');
        });
    };
    return SlickComponent;
}());
SlickComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngx-slick',
                exportAs: 'slick-modal',
                providers: [
                    {
                        provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALUE_ACCESSOR"],
                        useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SlickComponent; }),
                        multi: true
                    }
                ],
                template: '<ng-content></ng-content>',
            },] },
];
/**
 * @nocollapse
 */
SlickComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
SlickComponent.propDecorators = {
    'config': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'afterChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'beforeChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'breakpoint': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'destroy': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
var SlickItemDirective = (function () {
    /**
     * @param {?} el
     * @param {?} carousel
     */
    function SlickItemDirective(el, carousel) {
        this.el = el;
        this.carousel = carousel;
    }
    /**
     * @return {?}
     */
    SlickItemDirective.prototype.ngAfterViewInit = function () {
        this.carousel.addSlide(this);
    };
    /**
     * @return {?}
     */
    SlickItemDirective.prototype.ngOnDestroy = function () {
        this.carousel.removeSlide(this);
    };
    return SlickItemDirective;
}());
SlickItemDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[ngxSlickItem]',
            },] },
];
/**
 * @nocollapse
 */
SlickItemDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: SlickComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
]; };

var SlickModule = (function () {
    function SlickModule() {
    }
    /**
     * @return {?}
     */
    SlickModule.forRoot = function () {
        return {
            ngModule: SlickModule,
        };
    };
    return SlickModule;
}());
SlickModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
                ],
                declarations: [
                    SlickComponent,
                    SlickItemDirective,
                ],
                exports: [
                    SlickComponent,
                    SlickItemDirective,
                ]
            },] },
];
/**
 * @nocollapse
 */
SlickModule.ctorParameters = function () { return []; };




/***/ }),

/***/ 1505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var swiper_component_1 = __webpack_require__(1465);
exports.SwiperComponent = swiper_component_1.SwiperComponent;
var swiper_directive_1 = __webpack_require__(1449);
exports.SwiperDirective = swiper_directive_1.SwiperDirective;
var swiper_interfaces_1 = __webpack_require__(1447);
exports.coverflowObject = swiper_interfaces_1.coverflowObject;
exports.cubeObject = swiper_interfaces_1.cubeObject;
exports.fadeObject = swiper_interfaces_1.fadeObject;
exports.flipObject = swiper_interfaces_1.flipObject;
exports.SwiperConfig = swiper_interfaces_1.SwiperConfig;
exports.SwiperEvents = swiper_interfaces_1.SwiperEvents;
var swiper_module_1 = __webpack_require__(1506);
exports.provideDefaultConfig = swiper_module_1.provideDefaultConfig;
exports.provideForRootGuard = swiper_module_1.provideForRootGuard;
exports.SWIPER_CONFIG = swiper_module_1.SWIPER_CONFIG;
exports.SWIPER_GUARD = swiper_module_1.SWIPER_GUARD;
exports.SwiperModule = swiper_module_1.SwiperModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(13);
var swiper_component_1 = __webpack_require__(1465);
var swiper_directive_1 = __webpack_require__(1449);
var swiper_interfaces_1 = __webpack_require__(1447);
exports.SWIPER_GUARD = new core_1.OpaqueToken('SWIPER_GUARD');
exports.SWIPER_CONFIG = new core_1.OpaqueToken('SWIPER_CONFIG');
var SwiperModule = (function () {
    function SwiperModule(guard) {
    }
    SwiperModule.forRoot = function (config) {
        return {
            ngModule: SwiperModule,
            providers: [
                {
                    provide: exports.SWIPER_GUARD,
                    useFactory: provideForRootGuard,
                    deps: [
                        [
                            swiper_interfaces_1.SwiperConfig,
                            new core_1.Optional(),
                            new core_1.SkipSelf()
                        ]
                    ]
                },
                {
                    provide: exports.SWIPER_CONFIG,
                    useValue: config ? config : {}
                },
                {
                    provide: swiper_interfaces_1.SwiperConfig,
                    useFactory: provideDefaultConfig,
                    deps: [
                        exports.SWIPER_CONFIG
                    ]
                }
            ]
        };
    };
    SwiperModule.forChild = function () {
        return {
            ngModule: SwiperModule
        };
    };
    return SwiperModule;
}());
SwiperModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule],
                declarations: [swiper_component_1.SwiperComponent, swiper_directive_1.SwiperDirective],
                exports: [common_1.CommonModule, swiper_component_1.SwiperComponent, swiper_directive_1.SwiperDirective]
            },] },
];
/** @nocollapse */
SwiperModule.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [exports.SWIPER_GUARD,] },] },
]; };
exports.SwiperModule = SwiperModule;
function provideForRootGuard(config) {
    if (config) {
        throw new Error("\n      Application called SwiperModule.forRoot() twice.\n      For submodules use SwiperModule.forChild() instead.\n    ");
    }
    return 'guarded';
}
exports.provideForRootGuard = provideForRootGuard;
function provideDefaultConfig(config) {
    return new swiper_interfaces_1.SwiperConfig(config);
}
exports.provideDefaultConfig = provideDefaultConfig;
//# sourceMappingURL=swiper.module.js.map

/***/ }),

/***/ 1516:
/***/ (function(module, exports) {

module.exports = "<!--Main layout-->\n<main>\n   \n        <!--row-->\n        <div class=\"row\">\n            <div class=\"col-md-12 pl-0 pr-0\">\n                <!--Carousel Wrapper-->\n                <div id=\"carousel-example-2\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n                    <!--Indicators-->\n                    <ol class=\"carousel-indicators\">\n                        <li data-target=\"#carousel-example-2\" data-slide-to=\"0\" class=\"active\"></li>\n                        <li data-target=\"#carousel-example-2\" data-slide-to=\"1\"></li>\n                        <li data-target=\"#carousel-example-2\" data-slide-to=\"2\"></li>\n                    </ol>\n                    <!--/.Indicators-->\n\n                    <!--Slides-->\n                    <div class=\"carousel-inner\" role=\"listbox\">\n                        <!--First slide-->\n                        <div class=\"carousel-item active\">\n                            <!--Mask color-->\n                            <div class=\"view hm-black-strong\">\n                                <img src=\"assets/img/1.jpg\" class=\"img-fluid\" alt=\"\">\n                                <div class=\"full-bg-img\"> </div>\n                            </div>\n                            <!--Caption-->\n                            <div class=\"carousel-caption\">\n                                <div class=\"animated fadeIn\">\n                                    <h3 class=\"h3-responsive\">Meditation</h3>\n                                     <a class=\"btn btn-warning\">Get Now</a>  </div>\n                            </div>\n                            <!--Caption-->\n                        </div>\n                        <!--/First slide-->\n\n                        <!--Second slide-->\n                        <div class=\"carousel-item\">\n                            <!--Mask color-->\n                            <div class=\"view hm-black-strong\">\n                                <img src=\"assets/img/2.jpg\" class=\"img-fluid\" alt=\"\">\n                                <div class=\"full-bg-img\"> </div>\n                            </div>\n                            <!--Caption-->\n                            <div class=\"carousel-caption\">\n                                <div class=\"animated fadeIn\">\n                                    <h3 class=\"h3-responsive\">Accupressure</h3>\n                                    <a class=\"btn btn-warning\">Get Now</a> </div>\n                            </div>\n                            <!--Caption-->\n                        </div>\n                        <!--/Second slide-->\n\n                        <!--Third slide-->\n                        <div class=\"carousel-item\">\n                            <!--Mask color-->\n                            <div class=\"view hm-black-strong\"> <img src=\"assets/img/3.jpg\" class=\"img-fluid\" alt=\"\">\n                                <div class=\"full-bg-img\"> </div>\n                            </div>\n                            <!--Caption-->\n                            <div class=\"carousel-caption\">\n                                <div class=\"animated fadeIn\">\n                                    <h3 class=\"h3-responsive\">Ayurveda</h3>\n                                    <a class=\"btn btn-warning\">Get Now</a> </div>\n                            </div>\n                            <!--Caption-->\n                        </div>\n                        <!--/Third slide-->\n\n                         <div class=\"carousel-item\">\n                            <!--Mask color-->\n                            <div class=\"view hm-black-strong\"> <img src=\"assets/img/4.jpg\" class=\"img-fluid\" alt=\"\">\n                                <div class=\"full-bg-img\"> </div>\n                            </div>\n                            <!--Caption-->\n                            <div class=\"carousel-caption\">\n                                <div class=\"animated fadeIn\">\n                                    <h3 class=\"h3-responsive\">Yoga</h3>\n                                    <a class=\"btn btn-warning\">Get Now</a> </div>\n                            </div>\n                            <!--Caption-->\n                        </div>\n                        <!--/fourth slide-->\n                    </div>\n                    <!--/.Slides-->\n\n                    <!--Controls-->\n                    <a class=\"left carousel-control\" href=\"#carousel-example-2\" role=\"button\" data-slide=\"prev\"> <span class=\"icon-prev\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Previous</span> </a>\n                    <a class=\"right carousel-control\" href=\"#carousel-example-2\" role=\"button\" data-slide=\"next\"> <span class=\"icon-next\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Next</span> </a>\n                    <!--/.Controls-->\n                </div>\n                <!--/.Carousel Wrapper-->\n\n            </div>\n        </div>\n        <!--row-->\n\n        <!-- row -->\n       \n   <div class=\"\">\n    <div class=\"card\">\n      <h3 class=\"section-title\"><span>Best</span><br>Offers</h3>\n        <section id=\"we-do\" class=\"carousel-inner \">\n    <div class=\"section-padding\" >\n\n     \n        \n       <!-- /.head-section -->\n       <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <div class=\"col-md-6 col-6\">\n                 \n                </div>\n                <div class=\"col-md-6 col-6 text-right\"> <button class=\"btn btn-border-warning custombtn\">View all</button> </div>\n              </div>\n            </div>\n           \n           \n           \n             <div class=\"col-lg-4 col-md-6 mb-2\" *ngFor=\"let rish of data\" style=\"width: 368px;\">\n              <div class=\"card\" style=\"width: 368px;height: 326px;margin-left: -20px;\"> \n                  <div class=\"imageblock\">\n                  <img *ngIf=\"rish.image\" class=\"card-img-top img-fluid\" src=\"{{_host}}/images/offers/{{rish?.image}}\" alt=\"\" style=\"margin-left: 0px;width: 100%;\">\n                  <img *ngIf=\"!rish.image\" style=\"height: 230px; width:350px !important\" class=\"card-img-top img-fluid\" src=\"http://www.vacationrentalestates.com/images/no-image-available2.jpg\" alt=\"\"> \n                </div>\n                 <div class=\"card-block\" style=\"width: 368px;height: 18px;background-color: #d2d2d2;padding-left: 13px;margin-left: 0px;\">\n                  <h4 class=\"card-title\"><a href=\"#\">{{rish.name}}</a></h4>\n                  <h5>{{rish.price}}</h5>\n                </div>\n              </div>\n            </div>\n           \n           \n          </div>\n      <!--  <div [swiper]=\"config\" (indexChange)=\"onIndexChange($event)\" class=\"swiper-container\">\n        <div class=\"swiper-wrapper\"  >\n            <div class=\"swiper-slide\" style=\"width: 296px; margin-right: 30px;\" *ngFor=\"let rish of data\">\n              <div class=\"card\" >\n                <div class=\"imageblock\">\n                  <img *ngIf=\"rish.image\" class=\"card-img-top img-fluid\" src=\"{{_host}}/images/offers/{{rish?.image}}\" alt=\"\">\n                  <img *ngIf=\"!rish.image\" class=\"card-img-top img-fluid\" src=\"http://www.vacationrentalestates.com/images/no-image-available2.jpg\" alt=\"\"> \n                </div>\n                <div class=\"card-block-h\">\n                  <h4 class=\"card-title\"><a href=\"#\">{{rish.name}}</a></h4>\n                  <h5>{{rish.price}}</h5>\n                </div>\n              </div>\n            </div>\n\n           \n        </div>\n      \n        <div class=\"swiper-button-next\"></div>\n        <div class=\"swiper-button-prev\"></div>\n    </div> -->\n    </div><!-- /.section-padding -->\n  </section>\n\n  <section id=\"pro-trainer\">\n      <h3 class=\"section-title\"><span>Why Choose Our</span><br>Services</h3>\n        <div class=\"container\">\n          \n            <div class=\" text-center\">\n              <div class=\"card-header \">\n                <h4 class=\"card-title\"><STRONG>\"We are helping to build your self\"</STRONG></h4>\n              </div>\n              <div class=\"card-block\">\n                <h4 class=\"card-title\"> We are here with \"Online Centers in many field like Yoga, Gym, Physiotherapy center and many more..... Here you are request for your center to add list to easily find yours centers by anyone and may be its helpful to increase your business. We are also provide Consultant to ask your personel problems and diet and many more issues.\"</h4>\n                <p class=\"card-text\">Please Support us.</p>\n                <a [routerLink]=\"['/contact']\" class=\"btn btn-primary\">Request</a>\n              </div>\n             <div class=\"card-header\">\n                ....\n              </div>\n            </div>\n          \n        </div>\n      \n   \n\n   \n     <h3 class=\"section-title\"><span>Client</span><br>Gallery</h3><br/>\n \n  \n   \n      <ul class=\"slides\">\n        <ngx-gallery class=\"gallery\" [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n      </ul>\n\n    \n    \n     </section>\n     </div>\n</div>\n        <div class=\"row my-2\">\n\n\n\n\n            <!-- col-lg-3 -->\n           \n\n\n                    <!--Sorting: checkbox-->\n                    <!--<div class=\"card sort-panel text-center\"> \n            \n            <select class=\"sorting\">\n              <option value=\"\" disabled selected>Sort by</option>\n              <option value=\"1\">Price, low to high</option>\n              <option value=\"2\">Price, high to low</option>\n              <option value=\"3\">Name, A-Z</option>\n              <option value=\"3\">Name, Z-A</option>\n              <option value=\"3\">Date, new to old</option>\n              <option value=\"3\">Date, old to new</option>\n              <option value=\"3\">Best selling</option>\n            </select>\n            \n            <h5 class=\"col-title\">Show By</h5>\n            <form class=\"categories\">\n              <p>\n                <input name=\"group1\" type=\"checkbox\" id=\"cat-11\" />\n                <label for=\"cat-11\">Buy / Sell Crops</label>\n              </p>\n              <p>\n                <input name=\"group1\" type=\"checkbox\" id=\"cat-12\" />\n                <label for=\"cat-12\">Buy / Sell Farm Inputs</label>\n              </p>\n              <p>\n                <input name=\"group1\" type=\"checkbox\" id=\"cat-13\" />\n                <label for=\"cat-13\">Buy / Sell / Rent Farm Equipments</label>\n              </p>\n              <p>\n                <input name=\"group1\" type=\"checkbox\" id=\"cat-14\" />\n                <label for=\"cat-14\">Buy / Sell / Lease/Land</label>\n              </p>\n              <p>\n                <input name=\"group1\" type=\"checkbox\" id=\"cat-15\" />\n                <label for=\"cat-15\">Services</label>\n              </p>\n            </form>\n            \n            <h5 class=\"col-title\">Distance</h5>\n            <form action=\"#\">\n              <div class=\"range-field\">\n                <input type=\"range\" id=\"test5\" min=\"0\" max=\"100\" />\n              </div>\n            </form>\n            \n            <h5 class=\"col-title\">Quantity</h5>\n            <form class=\"categories\">\n              <p>\n                <input name=\"group1\" type=\"checkbox\" id=\"cat-16\" />\n                <label for=\"cat-16\">Unit of measure</label>\n              </p>\n            </form>\n            \n          </div>\n          <!--/.Sorting: checkbox-->\n               \n            <!-- col-lg-3 -->\n\n            <!-- col-lg-9-->\n            <div class=\"col-lg-9\">\n                <!-- <div class=\"card p20 homeproducts\"> \n          \n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <div class=\"col-md-6 col-6\">\n                  <h2 class=\"h2-responsive mb-2 wow fadeIn\">Best Sellings</h2>\n                </div>\n                <div class=\"col-md-6 col-6 text-right\"> <a class=\"btn btn-border-warning waves-effect custombtn\">View all</a> </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 mb-2\">\n              <div class=\"card\">\n               <div class=\"imageblock\">\n                  <a href=\"#\"><img class=\"card-img-top img-fluid\" src=\"http://placehold.it/700x400\" alt=\"\"></a>\n               </div>\n                <div class=\"card-block\">\n                  <h4 class=\"card-title\"><a href=\"#\">Item One</a></h4>\n                  <h5>$24.99</h5>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 mb-2\">\n              <div class=\"card\"> \n               <div class=\"imageblock\">\n                  <a href=\"#\"><img class=\"card-img-top img-fluid\" src=\"http://placehold.it/700x400\" alt=\"\"></a>\n                </div>\n                 <div class=\"card-block\">\n                  <h4 class=\"card-title\"><a href=\"#\">Item Two</a></h4>\n                  <h5>$24.99</h5>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 mb-2\">\n              <div class=\"card\">\n               <div class=\"imageblock\">\n                  <a href=\"#\"><img class=\"card-img-top img-fluid\" src=\"http://placehold.it/700x400\" alt=\"\"></a>\n                  </div>\n                  <div class=\"card-block\">\n                  <h4 class=\"card-title\"><a href=\"#\">Item Three</a></h4>\n                  <h5>$24.99</h5>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <div class=\"col-md-6 col-6\">\n                  <h2 class=\"h2-responsive mb-2 wow fadeIn\">Feature Products</h2>\n                </div>\n                <div class=\"col-md-6 col-6 text-right\"> <a class=\"btn btn-border-warning waves-effect custombtn\">View all</a> </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 mb-2\">\n              <div class=\"card \"> \n                <div class=\"imageblock\">\n                  <a href=\"#\"><img class=\"card-img-top img-fluid\" src=\"http://placehold.it/700x400\" alt=\"\"></a>\n        </div>\n                <div class=\"card-block\">\n                  <h4 class=\"card-title\"><a href=\"#\">Item Four</a></h4>\n                  <h5>$24.99</h5>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 mb-2\">\n              <div class=\"card \">\n                <div class=\"imageblock\">\n                 <a href=\"#\"><img class=\"card-img-top img-fluid\" src=\"http://placehold.it/700x400\" alt=\"\"></a>\n        </div>\n                <div class=\"card-block\">\n                  <h4 class=\"card-title\"><a href=\"#\">Item Five</a></h4>\n                  <h5>$24.99</h5>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 mb-2\">\n              <div class=\"card \">\n                <div class=\"imageblock\">\n                 <a href=\"#\"><img class=\"card-img-top img-fluid\" src=\"http://placehold.it/700x400\" alt=\"\"></a>\n        </div>\n                <div class=\"card-block\">\n                  <h4 class=\"card-title\"><a href=\"#\">Item Six</a></h4>\n                  <h5>$24.99</h5>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <div class=\"col-md-6 col-6\">\n                  <h2 class=\"h2-responsive mb-2 wow fadeIn\">Top Equipments</h2>\n                </div>\n                <div class=\"col-md-6 col-6 text-right\"> <a class=\"btn btn-border-warning waves-effect custombtn\">View all</a> </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 mb-2\">\n              <div class=\"card \">\n                <div class=\"imageblock\">\n                 <a href=\"#\"><img class=\"card-img-top img-fluid\" src=\"http://placehold.it/700x400\" alt=\"\"></a>\n        </div>\n                <div class=\"card-block\">\n                  <h4 class=\"card-title\"><a href=\"#\">Item Four</a></h4>\n                  <h5>$24.99</h5>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 mb-2\">\n              <div class=\"card \">\n                <div class=\"imageblock\">\n                 <a href=\"#\"><img class=\"card-img-top img-fluid\" src=\"http://placehold.it/700x400\" alt=\"\"></a>\n        </div>\n                <div class=\"card-block\">\n                  <h4 class=\"card-title\"><a href=\"#\">Item Five</a></h4>\n                  <h5>$24.99</h5>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 mb-2\">\n              <div class=\"card \">\n                <div class=\"imageblock\">\n                 <a href=\"#\"><img class=\"card-img-top img-fluid\" src=\"http://placehold.it/700x400\" alt=\"\"></a>\n        </div>\n                <div class=\"card-block\">\n                  <h4 class=\"card-title\"><a href=\"#\">Item Six</a></h4>\n                  <h5>$24.99</h5>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <div class=\"col-md-6 col-6\">\n                  <h2 class=\"h2-responsive mb-2 wow fadeIn\">Upto 50% Off</h2>\n                </div>\n                <div class=\"col-md-6 col-6 text-right\"> <a class=\"btn btn-border-warning waves-effect custombtn\">View all</a> </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 mb-2\">\n              <div class=\"card \">\n                <div class=\"imageblock\">\n                 <a href=\"#\"><img class=\"card-img-top img-fluid\" src=\"http://placehold.it/700x400\" alt=\"\"></a>\n        </div>\n                <div class=\"card-block\">\n                  <h4 class=\"card-title\"><a href=\"#\">Item Four</a></h4>\n                  <h5>$24.99</h5>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 mb-2\">\n              <div class=\"card \">\n                <div class=\"imageblock\">\n                 <a href=\"#\"><img class=\"card-img-top img-fluid\" src=\"http://placehold.it/700x400\" alt=\"\"></a>\n        </div>\n                <div class=\"card-block\">\n                  <h4 class=\"card-title\"><a href=\"#\">Item Five</a></h4>\n                  <h5>$24.99</h5>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 mb-2\">\n              <div class=\"card \">\n                <div class=\"imageblock\">\n                 <a href=\"#\"><img class=\"card-img-top img-fluid\" src=\"http://placehold.it/700x400\" alt=\"\"></a>\n        </div>\n                <div class=\"card-block\">\n                  <h4 class=\"card-title\"><a href=\"#\">Item Six</a></h4>\n                  <h5>$24.99</h5>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <div class=\"row\">\n                <div class=\"col-md-6 col-6\">\n                  <h2 class=\"h2-responsive mb-2 wow fadeIn\">Hybrid Seeds</h2>\n                </div>\n                <div class=\"col-md-6 col-6 text-right\"> <a class=\"btn btn-border-warning waves-effect custombtn\">View all</a> </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 mb-2\">\n              <div class=\"card \">\n                <div class=\"imageblock\">\n                    <a href=\"#\"><img class=\"card-img-top img-fluid\" src=\"http://placehold.it/700x400\" alt=\"\"></a>\n                </div>\n                <div class=\"card-block\">\n                  <h4 class=\"card-title\"><a href=\"#\">Item Four</a></h4>\n                  <h5>$24.99</h5>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 mb-2\">\n              <div class=\"card \">\n                <div class=\"imageblock\">\n                    <a href=\"#\"><img class=\"card-img-top img-fluid\" src=\"http://placehold.it/700x400\" alt=\"\"></a>\n                </div>\n                <div class=\"card-block\">\n                  <h4 class=\"card-title\"><a href=\"#\">Item Five</a></h4>\n                  <h5>$24.99</h5>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 mb-2\">\n              <div class=\"card \">\n                <div class=\"imageblock\">\n                    <a href=\"#\"><img class=\"card-img-top img-fluid\" src=\"http://placehold.it/700x400\" alt=\"\"></a>\n                </div>\n                <div class=\"card-block\">\n                  <h4 class=\"card-title\"><a href=\"#\">Item Six</a></h4>\n                  <h5>$24.99</h5>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>-->\n            </div>\n            <!-- col-lg-9-->\n        </div>\n        <!-- row -->\n        \n   \n</main>\n<!--/Main layout-->"

/***/ }),

/***/ 1519:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Swiper 3.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: March 10, 2017
 */
(function () {
    'use strict';
    var $;

    /*===========================
    Swiper
    ===========================*/
    var Swiper = function (container, params) {
        if (!(this instanceof Swiper)) return new Swiper(container, params);
    

        var defaults = {
            direction: 'horizontal',
            touchEventsTarget: 'container',
            initialSlide: 0,
            speed: 300,
            // autoplay
            autoplay: false,
            autoplayDisableOnInteraction: true,
            autoplayStopOnLast: false,
            // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
            iOSEdgeSwipeDetection: false,
            iOSEdgeSwipeThreshold: 20,
            // Free mode
            freeMode: false,
            freeModeMomentum: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: true,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: false,
            freeModeMinimumVelocity: 0.02,
            // Autoheight
            autoHeight: false,
            // Set wrapper width
            setWrapperSize: false,
            // Virtual Translate
            virtualTranslate: false,
            // Effects
            effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true
            },
            flip: {
                slideShadows : true,
                limitRotation: true
            },
            cube: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            fade: {
                crossFade: false
            },
            // Parallax
            parallax: false,
            // Zoom
            zoom: false,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: true,
            // Scrollbar
            scrollbar: null,
            scrollbarHide: true,
            scrollbarDraggable: false,
            scrollbarSnapOnRelease: false,
            // Keyboard Mousewheel
            keyboardControl: false,
            mousewheelControl: false,
            mousewheelReleaseOnEdges: false,
            mousewheelInvert: false,
            mousewheelForceToAxis: false,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: 'container',
            // Hash Navigation
            hashnav: false,
            hashnavWatchState: false,
            // History
            history: false,
            // Commong Nav State
            replaceState: false,
            // Breakpoints
            breakpoints: undefined,
            // Slides grid
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            slidesPerGroup: 1,
            centeredSlides: false,
            slidesOffsetBefore: 0, // in px
            slidesOffsetAfter: 0, // in px
            // Round length
            roundLengths: false,
            // Touches
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            onlyExternal: false,
            threshold: 0,
            touchMoveStopPropagation: true,
            touchReleaseOnEdges: false,
            // Unique Navigation Elements
            uniqueNavElements: true,
            // Pagination
            pagination: null,
            paginationElement: 'span',
            paginationClickable: false,
            paginationHide: false,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: 'bullets', // 'bullets' or 'progress' or 'fraction' or 'custom'
            // Resistance
            resistance: true,
            resistanceRatio: 0.85,
            // Next/prev buttons
            nextButton: null,
            prevButton: null,
            // Progress
            watchSlidesProgress: false,
            watchSlidesVisibility: false,
            // Cursor
            grabCursor: false,
            // Clicks
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            // Lazy Loading
            lazyLoading: false,
            lazyLoadingInPrevNext: false,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: false,
            // Images
            preloadImages: true,
            updateOnImagesReady: true,
            // loop
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            // Control
            control: undefined,
            controlInverse: false,
            controlBy: 'slide', //or 'container'
            normalizeSlideIndex: true,
            // Swiping/no swiping
            allowSwipeToPrev: true,
            allowSwipeToNext: true,
            swipeHandler: null, //'.swipe-handler',
            noSwiping: true,
            noSwipingClass: 'swiper-no-swiping',
            // Passive Listeners
            passiveListeners: true,
            // NS
            containerModifierClass: 'swiper-container-', // NEW
            slideClass: 'swiper-slide',
            slideActiveClass: 'swiper-slide-active',
            slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            slideNextClass: 'swiper-slide-next',
            slideDuplicateNextClass: 'swiper-slide-duplicate-next',
            slidePrevClass: 'swiper-slide-prev',
            slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
            wrapperClass: 'swiper-wrapper',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            buttonDisabledClass: 'swiper-button-disabled',
            paginationCurrentClass: 'swiper-pagination-current',
            paginationTotalClass: 'swiper-pagination-total',
            paginationHiddenClass: 'swiper-pagination-hidden',
            paginationProgressbarClass: 'swiper-pagination-progressbar',
            paginationClickableClass: 'swiper-pagination-clickable', // NEW
            paginationModifierClass: 'swiper-pagination-', // NEW
            lazyLoadingClass: 'swiper-lazy',
            lazyStatusLoadingClass: 'swiper-lazy-loading',
            lazyStatusLoadedClass: 'swiper-lazy-loaded',
            lazyPreloaderClass: 'swiper-lazy-preloader',
            notificationClass: 'swiper-notification',
            preloaderClass: 'preloader',
            zoomContainerClass: 'swiper-zoom-container',
        
            // Observer
            observer: false,
            observeParents: false,
            // Accessibility
            a11y: false,
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            // Callbacks
            runCallbacksOnInit: true
            /*
            Callbacks:
            onInit: function (swiper)
            onDestroy: function (swiper)
            onBeforeResize: function (swiper)
            onAfterResize: function (swiper)
            onClick: function (swiper, e)
            onTap: function (swiper, e)
            onDoubleTap: function (swiper, e)
            onSliderMove: function (swiper, e)
            onSlideChangeStart: function (swiper)
            onSlideChangeEnd: function (swiper)
            onTransitionStart: function (swiper)
            onTransitionEnd: function (swiper)
            onImagesReady: function (swiper)
            onProgress: function (swiper, progress)
            onTouchStart: function (swiper, e)
            onTouchMove: function (swiper, e)
            onTouchMoveOpposite: function (swiper, e)
            onTouchEnd: function (swiper, e)
            onReachBeginning: function (swiper)
            onReachEnd: function (swiper)
            onSetTransition: function (swiper, duration)
            onSetTranslate: function (swiper, translate)
            onAutoplayStart: function (swiper)
            onAutoplayStop: function (swiper),
            onLazyImageLoad: function (swiper, slide, image)
            onLazyImageReady: function (swiper, slide, image)
            onKeyPress: function (swiper, keyCode)
            */
        
        };
        var initialVirtualTranslate = params && params.virtualTranslate;
        
        params = params || {};
        var originalParams = {};
        for (var param in params) {
            if (typeof params[param] === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param] instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param] instanceof jQuery))) {
                originalParams[param] = {};
                for (var deepParam in params[param]) {
                    originalParams[param][deepParam] = params[param][deepParam];
                }
            }
            else {
                originalParams[param] = params[param];
            }
        }
        for (var def in defaults) {
            if (typeof params[def] === 'undefined') {
                params[def] = defaults[def];
            }
            else if (typeof params[def] === 'object') {
                for (var deepDef in defaults[def]) {
                    if (typeof params[def][deepDef] === 'undefined') {
                        params[def][deepDef] = defaults[def][deepDef];
                    }
                }
            }
        }
        
        // Swiper
        var s = this;
        
        // Params
        s.params = params;
        s.originalParams = originalParams;
        
        // Classname
        s.classNames = [];
        /*=========================
          Dom Library and plugins
          ===========================*/
        if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined'){
            $ = Dom7;
        }
        if (typeof $ === 'undefined') {
            if (typeof Dom7 === 'undefined') {
                $ = window.Dom7 || window.Zepto || window.jQuery;
            }
            else {
                $ = Dom7;
            }
            if (!$) return;
        }
        // Export it to Swiper instance
        s.$ = $;
        
        /*=========================
          Breakpoints
          ===========================*/
        s.currentBreakpoint = undefined;
        s.getActiveBreakpoint = function () {
            //Get breakpoint for window width
            if (!s.params.breakpoints) return false;
            var breakpoint = false;
            var points = [], point;
            for ( point in s.params.breakpoints ) {
                if (s.params.breakpoints.hasOwnProperty(point)) {
                    points.push(point);
                }
            }
            points.sort(function (a, b) {
                return parseInt(a, 10) > parseInt(b, 10);
            });
            for (var i = 0; i < points.length; i++) {
                point = points[i];
                if (point >= window.innerWidth && !breakpoint) {
                    breakpoint = point;
                }
            }
            return breakpoint || 'max';
        };
        s.setBreakpoint = function () {
            //Set breakpoint for window width and update parameters
            var breakpoint = s.getActiveBreakpoint();
            if (breakpoint && s.currentBreakpoint !== breakpoint) {
                var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
                var needsReLoop = s.params.loop && (breakPointsParams.slidesPerView !== s.params.slidesPerView);
                for ( var param in breakPointsParams ) {
                    s.params[param] = breakPointsParams[param];
                }
                s.currentBreakpoint = breakpoint;
                if(needsReLoop && s.destroyLoop) {
                    s.reLoop(true);
                }
            }
        };
        // Set breakpoint on load
        if (s.params.breakpoints) {
            s.setBreakpoint();
        }
        
        /*=========================
          Preparation - Define Container, Wrapper and Pagination
          ===========================*/
        s.container = $(container);
        if (s.container.length === 0) return;
        if (s.container.length > 1) {
            var swipers = [];
            s.container.each(function () {
                var container = this;
                swipers.push(new Swiper(this, params));
            });
            return swipers;
        }
        
        // Save instance in container HTML Element and in data
        s.container[0].swiper = s;
        s.container.data('swiper', s);
        
        s.classNames.push(s.params.containerModifierClass + s.params.direction);
        
        if (s.params.freeMode) {
            s.classNames.push(s.params.containerModifierClass + 'free-mode');
        }
        if (!s.support.flexbox) {
            s.classNames.push(s.params.containerModifierClass + 'no-flexbox');
            s.params.slidesPerColumn = 1;
        }
        if (s.params.autoHeight) {
            s.classNames.push(s.params.containerModifierClass + 'autoheight');
        }
        // Enable slides progress when required
        if (s.params.parallax || s.params.watchSlidesVisibility) {
            s.params.watchSlidesProgress = true;
        }
        // Max resistance when touchReleaseOnEdges
        if (s.params.touchReleaseOnEdges) {
            s.params.resistanceRatio = 0;
        }
        // Coverflow / 3D
        if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
            if (s.support.transforms3d) {
                s.params.watchSlidesProgress = true;
                s.classNames.push(s.params.containerModifierClass + '3d');
            }
            else {
                s.params.effect = 'slide';
            }
        }
        if (s.params.effect !== 'slide') {
            s.classNames.push(s.params.containerModifierClass + s.params.effect);
        }
        if (s.params.effect === 'cube') {
            s.params.resistanceRatio = 0;
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.centeredSlides = false;
            s.params.spaceBetween = 0;
            s.params.virtualTranslate = true;
        }
        if (s.params.effect === 'fade' || s.params.effect === 'flip') {
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.watchSlidesProgress = true;
            s.params.spaceBetween = 0;
            if (typeof initialVirtualTranslate === 'undefined') {
                s.params.virtualTranslate = true;
            }
        }
        
        // Grab Cursor
        if (s.params.grabCursor && s.support.touch) {
            s.params.grabCursor = false;
        }
        
        // Wrapper
        s.wrapper = s.container.children('.' + s.params.wrapperClass);
        
        // Pagination
        if (s.params.pagination) {
            s.paginationContainer = $(s.params.pagination);
            if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
                s.paginationContainer = s.container.find(s.params.pagination);
            }
        
            if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
                s.paginationContainer.addClass(s.params.paginationModifierClass + 'clickable');
            }
            else {
                s.params.paginationClickable = false;
            }
            s.paginationContainer.addClass(s.params.paginationModifierClass + s.params.paginationType);
        }
        // Next/Prev Buttons
        if (s.params.nextButton || s.params.prevButton) {
            if (s.params.nextButton) {
                s.nextButton = $(s.params.nextButton);
                if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
                    s.nextButton = s.container.find(s.params.nextButton);
                }
            }
            if (s.params.prevButton) {
                s.prevButton = $(s.params.prevButton);
                if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
                    s.prevButton = s.container.find(s.params.prevButton);
                }
            }
        }
        
        // Is Horizontal
        s.isHorizontal = function () {
            return s.params.direction === 'horizontal';
        };
        // s.isH = isH;
        
        // RTL
        s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
        if (s.rtl) {
            s.classNames.push(s.params.containerModifierClass + 'rtl');
        }
        
        // Wrong RTL support
        if (s.rtl) {
            s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
        }
        
        // Columns
        if (s.params.slidesPerColumn > 1) {
            s.classNames.push(s.params.containerModifierClass + 'multirow');
        }
        
        // Check for Android
        if (s.device.android) {
            s.classNames.push(s.params.containerModifierClass + 'android');
        }
        
        // Add classes
        s.container.addClass(s.classNames.join(' '));
        
        // Translate
        s.translate = 0;
        
        // Progress
        s.progress = 0;
        
        // Velocity
        s.velocity = 0;
        
        /*=========================
          Locks, unlocks
          ===========================*/
        s.lockSwipeToNext = function () {
            s.params.allowSwipeToNext = false;
            if (s.params.allowSwipeToPrev === false && s.params.grabCursor) {
                s.unsetGrabCursor();
            }
        };
        s.lockSwipeToPrev = function () {
            s.params.allowSwipeToPrev = false;
            if (s.params.allowSwipeToNext === false && s.params.grabCursor) {
                s.unsetGrabCursor();
            }
        };
        s.lockSwipes = function () {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
            if (s.params.grabCursor) s.unsetGrabCursor();
        };
        s.unlockSwipeToNext = function () {
            s.params.allowSwipeToNext = true;
            if (s.params.allowSwipeToPrev === true && s.params.grabCursor) {
                s.setGrabCursor();
            }
        };
        s.unlockSwipeToPrev = function () {
            s.params.allowSwipeToPrev = true;
            if (s.params.allowSwipeToNext === true && s.params.grabCursor) {
                s.setGrabCursor();
            }
        };
        s.unlockSwipes = function () {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
            if (s.params.grabCursor) s.setGrabCursor();
        };
        
        /*=========================
          Round helper
          ===========================*/
        function round(a) {
            return Math.floor(a);
        }
        /*=========================
          Set grab cursor
          ===========================*/
        s.setGrabCursor = function(moving) {
            s.container[0].style.cursor = 'move';
            s.container[0].style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
            s.container[0].style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
            s.container[0].style.cursor = moving ? 'grabbing': 'grab';
        };
        s.unsetGrabCursor = function () {
            s.container[0].style.cursor = '';
        };
        if (s.params.grabCursor) {
            s.setGrabCursor();
        }
        /*=========================
          Update on Images Ready
          ===========================*/
        s.imagesToLoad = [];
        s.imagesLoaded = 0;
        
        s.loadImage = function (imgElement, src, srcset, sizes, checkForComplete, callback) {
            var image;
            function onReady () {
                if (callback) callback();
            }
            if (!imgElement.complete || !checkForComplete) {
                if (src) {
                    image = new window.Image();
                    image.onload = onReady;
                    image.onerror = onReady;
                    if (sizes) {
                        image.sizes = sizes;
                    }
                    if (srcset) {
                        image.srcset = srcset;
                    }
                    if (src) {
                        image.src = src;
                    }
                } else {
                    onReady();
                }
        
            } else {//image already loaded...
                onReady();
            }
        };
        s.preloadImages = function () {
            s.imagesToLoad = s.container.find('img');
            function _onReady() {
                if (typeof s === 'undefined' || s === null || !s) return;
                if (s.imagesLoaded !== undefined) s.imagesLoaded++;
                if (s.imagesLoaded === s.imagesToLoad.length) {
                    if (s.params.updateOnImagesReady) s.update();
                    s.emit('onImagesReady', s);
                }
            }
            for (var i = 0; i < s.imagesToLoad.length; i++) {
                s.loadImage(s.imagesToLoad[i], (s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src')), (s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset')), s.imagesToLoad[i].sizes || s.imagesToLoad[i].getAttribute('sizes'), true, _onReady);
            }
        };
        
        /*=========================
          Autoplay
          ===========================*/
        s.autoplayTimeoutId = undefined;
        s.autoplaying = false;
        s.autoplayPaused = false;
        function autoplay() {
            var autoplayDelay = s.params.autoplay;
            var activeSlide = s.slides.eq(s.activeIndex);
            if (activeSlide.attr('data-swiper-autoplay')) {
                autoplayDelay = activeSlide.attr('data-swiper-autoplay') || s.params.autoplay;
            }
            s.autoplayTimeoutId = setTimeout(function () {
                if (s.params.loop) {
                    s.fixLoop();
                    s._slideNext();
                    s.emit('onAutoplay', s);
                }
                else {
                    if (!s.isEnd) {
                        s._slideNext();
                        s.emit('onAutoplay', s);
                    }
                    else {
                        if (!params.autoplayStopOnLast) {
                            s._slideTo(0);
                            s.emit('onAutoplay', s);
                        }
                        else {
                            s.stopAutoplay();
                        }
                    }
                }
            }, autoplayDelay);
        }
        s.startAutoplay = function () {
            if (typeof s.autoplayTimeoutId !== 'undefined') return false;
            if (!s.params.autoplay) return false;
            if (s.autoplaying) return false;
            s.autoplaying = true;
            s.emit('onAutoplayStart', s);
            autoplay();
        };
        s.stopAutoplay = function (internal) {
            if (!s.autoplayTimeoutId) return;
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
            s.autoplaying = false;
            s.autoplayTimeoutId = undefined;
            s.emit('onAutoplayStop', s);
        };
        s.pauseAutoplay = function (speed) {
            if (s.autoplayPaused) return;
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
            s.autoplayPaused = true;
            if (speed === 0) {
                s.autoplayPaused = false;
                autoplay();
            }
            else {
                s.wrapper.transitionEnd(function () {
                    if (!s) return;
                    s.autoplayPaused = false;
                    if (!s.autoplaying) {
                        s.stopAutoplay();
                    }
                    else {
                        autoplay();
                    }
                });
            }
        };
        /*=========================
          Min/Max Translate
          ===========================*/
        s.minTranslate = function () {
            return (-s.snapGrid[0]);
        };
        s.maxTranslate = function () {
            return (-s.snapGrid[s.snapGrid.length - 1]);
        };
        /*=========================
          Slider/slides sizes
          ===========================*/
        s.updateAutoHeight = function () {
            var activeSlides = [];
            var newHeight = 0;
            var i;
        
            // Find slides currently in view
            if(s.params.slidesPerView !== 'auto' && s.params.slidesPerView > 1) {
                for (i = 0; i < Math.ceil(s.params.slidesPerView); i++) {
                    var index = s.activeIndex + i;
                    if(index > s.slides.length) break;
                    activeSlides.push(s.slides.eq(index)[0]);
                }
            } else {
                activeSlides.push(s.slides.eq(s.activeIndex)[0]);
            }
        
            // Find new height from heighest slide in view
            for (i = 0; i < activeSlides.length; i++) {
                if (typeof activeSlides[i] !== 'undefined') {
                    var height = activeSlides[i].offsetHeight;
                    newHeight = height > newHeight ? height : newHeight;
                }
            }
        
            // Update Height
            if (newHeight) s.wrapper.css('height', newHeight + 'px');
        };
        s.updateContainerSize = function () {
            var width, height;
            if (typeof s.params.width !== 'undefined') {
                width = s.params.width;
            }
            else {
                width = s.container[0].clientWidth;
            }
            if (typeof s.params.height !== 'undefined') {
                height = s.params.height;
            }
            else {
                height = s.container[0].clientHeight;
            }
            if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
                return;
            }
        
            //Subtract paddings
            width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
            height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);
        
            // Store values
            s.width = width;
            s.height = height;
            s.size = s.isHorizontal() ? s.width : s.height;
        };
        
        s.updateSlidesSize = function () {
            s.slides = s.wrapper.children('.' + s.params.slideClass);
            s.snapGrid = [];
            s.slidesGrid = [];
            s.slidesSizesGrid = [];
        
            var spaceBetween = s.params.spaceBetween,
                slidePosition = -s.params.slidesOffsetBefore,
                i,
                prevSlideSize = 0,
                index = 0;
            if (typeof s.size === 'undefined') return;
            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
            }
        
            s.virtualSize = -spaceBetween;
            // reset margins
            if (s.rtl) s.slides.css({marginLeft: '', marginTop: ''});
            else s.slides.css({marginRight: '', marginBottom: ''});
        
            var slidesNumberEvenToRows;
            if (s.params.slidesPerColumn > 1) {
                if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
                    slidesNumberEvenToRows = s.slides.length;
                }
                else {
                    slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
                }
                if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
                    slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
                }
            }
        
            // Calc slides
            var slideSize;
            var slidesPerColumn = s.params.slidesPerColumn;
            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
            var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
            for (i = 0; i < s.slides.length; i++) {
                slideSize = 0;
                var slide = s.slides.eq(i);
                if (s.params.slidesPerColumn > 1) {
                    // Set slides order
                    var newSlideOrderIndex;
                    var column, row;
                    if (s.params.slidesPerColumnFill === 'column') {
                        column = Math.floor(i / slidesPerColumn);
                        row = i - column * slidesPerColumn;
                        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn-1)) {
                            if (++row >= slidesPerColumn) {
                                row = 0;
                                column++;
                            }
                        }
                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
                        slide
                            .css({
                                '-webkit-box-ordinal-group': newSlideOrderIndex,
                                '-moz-box-ordinal-group': newSlideOrderIndex,
                                '-ms-flex-order': newSlideOrderIndex,
                                '-webkit-order': newSlideOrderIndex,
                                'order': newSlideOrderIndex
                            });
                    }
                    else {
                        row = Math.floor(i / slidesPerRow);
                        column = i - row * slidesPerRow;
                    }
                    slide
                        .css(
                            'margin-' + (s.isHorizontal() ? 'top' : 'left'),
                            (row !== 0 && s.params.spaceBetween) && (s.params.spaceBetween + 'px')
                        )
                        .attr('data-swiper-column', column)
                        .attr('data-swiper-row', row);
        
                }
                if (slide.css('display') === 'none') continue;
                if (s.params.slidesPerView === 'auto') {
                    slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                    if (s.params.roundLengths) slideSize = round(slideSize);
                }
                else {
                    slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
                    if (s.params.roundLengths) slideSize = round(slideSize);
        
                    if (s.isHorizontal()) {
                        s.slides[i].style.width = slideSize + 'px';
                    }
                    else {
                        s.slides[i].style.height = slideSize + 'px';
                    }
                }
                s.slides[i].swiperSlideSize = slideSize;
                s.slidesSizesGrid.push(slideSize);
        
        
                if (s.params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if(prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                }
                else {
                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
        
                s.virtualSize += slideSize + spaceBetween;
        
                prevSlideSize = slideSize;
        
                index ++;
            }
            s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
            var newSlidesGrid;
        
            if (
                s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
            }
            if (!s.support.flexbox || s.params.setWrapperSize) {
                if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
            }
        
            if (s.params.slidesPerColumn > 1) {
                s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
                s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
                if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
                if (s.params.centeredSlides) {
                    newSlidesGrid = [];
                    for (i = 0; i < s.snapGrid.length; i++) {
                        if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
                    }
                    s.snapGrid = newSlidesGrid;
                }
            }
        
            // Remove last grid elements depending on width
            if (!s.params.centeredSlides) {
                newSlidesGrid = [];
                for (i = 0; i < s.snapGrid.length; i++) {
                    if (s.snapGrid[i] <= s.virtualSize - s.size) {
                        newSlidesGrid.push(s.snapGrid[i]);
                    }
                }
                s.snapGrid = newSlidesGrid;
                if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
                    s.snapGrid.push(s.virtualSize - s.size);
                }
            }
            if (s.snapGrid.length === 0) s.snapGrid = [0];
        
            if (s.params.spaceBetween !== 0) {
                if (s.isHorizontal()) {
                    if (s.rtl) s.slides.css({marginLeft: spaceBetween + 'px'});
                    else s.slides.css({marginRight: spaceBetween + 'px'});
                }
                else s.slides.css({marginBottom: spaceBetween + 'px'});
            }
            if (s.params.watchSlidesProgress) {
                s.updateSlidesOffset();
            }
        };
        s.updateSlidesOffset = function () {
            for (var i = 0; i < s.slides.length; i++) {
                s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
            }
        };
        
        /*=========================
          Dynamic Slides Per View
          ===========================*/
        s.currentSlidesPerView = function () {
            var spv = 1, i, j;
            if (s.params.centeredSlides) {
                var size = s.slides[s.activeIndex].swiperSlideSize;
                var breakLoop;
                for (i = s.activeIndex + 1; i < s.slides.length; i++) {
                    if (s.slides[i] && !breakLoop) {
                        size += s.slides[i].swiperSlideSize;
                        spv ++;
                        if (size > s.size) breakLoop = true;
                    }
                }
                for (j = s.activeIndex - 1; j >= 0; j--) {
                    if (s.slides[j] && !breakLoop) {
                        size += s.slides[j].swiperSlideSize;
                        spv ++;
                        if (size > s.size) breakLoop = true;
                    }
                }
            }
            else {
                for (i = s.activeIndex + 1; i < s.slides.length; i++) {
                    if (s.slidesGrid[i] - s.slidesGrid[s.activeIndex] < s.size) {
                        spv++;
                    }
                }
            }
            return spv;
        };
        /*=========================
          Slider/slides progress
          ===========================*/
        s.updateSlidesProgress = function (translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            if (s.slides.length === 0) return;
            if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();
        
            var offsetCenter = -translate;
            if (s.rtl) offsetCenter = translate;
        
            // Visible Slides
            s.slides.removeClass(s.params.slideVisibleClass);
            for (var i = 0; i < s.slides.length; i++) {
                var slide = s.slides[i];
                var slideProgress = (offsetCenter + (s.params.centeredSlides ? s.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
                if (s.params.watchSlidesVisibility) {
                    var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                    var slideAfter = slideBefore + s.slidesSizesGrid[i];
                    var isVisible =
                        (slideBefore >= 0 && slideBefore < s.size) ||
                        (slideAfter > 0 && slideAfter <= s.size) ||
                        (slideBefore <= 0 && slideAfter >= s.size);
                    if (isVisible) {
                        s.slides.eq(i).addClass(s.params.slideVisibleClass);
                    }
                }
                slide.progress = s.rtl ? -slideProgress : slideProgress;
            }
        };
        s.updateProgress = function (translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            var translatesDiff = s.maxTranslate() - s.minTranslate();
            var wasBeginning = s.isBeginning;
            var wasEnd = s.isEnd;
            if (translatesDiff === 0) {
                s.progress = 0;
                s.isBeginning = s.isEnd = true;
            }
            else {
                s.progress = (translate - s.minTranslate()) / (translatesDiff);
                s.isBeginning = s.progress <= 0;
                s.isEnd = s.progress >= 1;
            }
            if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
            if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);
        
            if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
            s.emit('onProgress', s, s.progress);
        };
        s.updateActiveIndex = function () {
            var translate = s.rtl ? s.translate : -s.translate;
            var newActiveIndex, i, snapIndex;
            for (i = 0; i < s.slidesGrid.length; i ++) {
                if (typeof s.slidesGrid[i + 1] !== 'undefined') {
                    if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
                        newActiveIndex = i;
                    }
                    else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
                        newActiveIndex = i + 1;
                    }
                }
                else {
                    if (translate >= s.slidesGrid[i]) {
                        newActiveIndex = i;
                    }
                }
            }
            // Normalize slideIndex
            if(s.params.normalizeSlideIndex){
                if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;
            }
            // for (i = 0; i < s.slidesGrid.length; i++) {
                // if (- translate >= s.slidesGrid[i]) {
                    // newActiveIndex = i;
                // }
            // }
            snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
            if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;
        
            if (newActiveIndex === s.activeIndex) {
                return;
            }
            s.snapIndex = snapIndex;
            s.previousIndex = s.activeIndex;
            s.activeIndex = newActiveIndex;
            s.updateClasses();
            s.updateRealIndex();
        };
        s.updateRealIndex = function(){
            s.realIndex = parseInt(s.slides.eq(s.activeIndex).attr('data-swiper-slide-index') || s.activeIndex, 10);
        };
        
        /*=========================
          Classes
          ===========================*/
        s.updateClasses = function () {
            s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass + ' ' + s.params.slideDuplicateActiveClass + ' ' + s.params.slideDuplicateNextClass + ' ' + s.params.slideDuplicatePrevClass);
            var activeSlide = s.slides.eq(s.activeIndex);
            // Active classes
            activeSlide.addClass(s.params.slideActiveClass);
            if (params.loop) {
                // Duplicate to all looped slides
                if (activeSlide.hasClass(s.params.slideDuplicateClass)) {
                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
                }
                else {
                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
                }
            }
            // Next Slide
            var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
            if (s.params.loop && nextSlide.length === 0) {
                nextSlide = s.slides.eq(0);
                nextSlide.addClass(s.params.slideNextClass);
            }
            // Prev Slide
            var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
            if (s.params.loop && prevSlide.length === 0) {
                prevSlide = s.slides.eq(-1);
                prevSlide.addClass(s.params.slidePrevClass);
            }
            if (params.loop) {
                // Duplicate to all looped slides
                if (nextSlide.hasClass(s.params.slideDuplicateClass)) {
                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
                }
                else {
                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
                }
                if (prevSlide.hasClass(s.params.slideDuplicateClass)) {
                    s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
                }
                else {
                    s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
                }
            }
        
            // Pagination
            if (s.paginationContainer && s.paginationContainer.length > 0) {
                // Current/Total
                var current,
                    total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                if (s.params.loop) {
                    current = Math.ceil((s.activeIndex - s.loopedSlides)/s.params.slidesPerGroup);
                    if (current > s.slides.length - 1 - s.loopedSlides * 2) {
                        current = current - (s.slides.length - s.loopedSlides * 2);
                    }
                    if (current > total - 1) current = current - total;
                    if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;
                }
                else {
                    if (typeof s.snapIndex !== 'undefined') {
                        current = s.snapIndex;
                    }
                    else {
                        current = s.activeIndex || 0;
                    }
                }
                // Types
                if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
                    s.bullets.removeClass(s.params.bulletActiveClass);
                    if (s.paginationContainer.length > 1) {
                        s.bullets.each(function () {
                            if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);
                        });
                    }
                    else {
                        s.bullets.eq(current).addClass(s.params.bulletActiveClass);
                    }
                }
                if (s.params.paginationType === 'fraction') {
                    s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
                    s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
                }
                if (s.params.paginationType === 'progress') {
                    var scale = (current + 1) / total,
                        scaleX = scale,
                        scaleY = 1;
                    if (!s.isHorizontal()) {
                        scaleY = scale;
                        scaleX = 1;
                    }
                    s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
                }
                if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
                    s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
                }
            }
        
            // Next/active buttons
            if (!s.params.loop) {
                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                    if (s.isBeginning) {
                        s.prevButton.addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);
                    }
                    else {
                        s.prevButton.removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);
                    }
                }
                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                    if (s.isEnd) {
                        s.nextButton.addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);
                    }
                    else {
                        s.nextButton.removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);
                    }
                }
            }
        };
        
        /*=========================
          Pagination
          ===========================*/
        s.updatePagination = function () {
            if (!s.params.pagination) return;
            if (s.paginationContainer && s.paginationContainer.length > 0) {
                var paginationHTML = '';
                if (s.params.paginationType === 'bullets') {
                    var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                    for (var i = 0; i < numberOfBullets; i++) {
                        if (s.params.paginationBulletRender) {
                            paginationHTML += s.params.paginationBulletRender(s, i, s.params.bulletClass);
                        }
                        else {
                            paginationHTML += '<' + s.params.paginationElement+' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
                        }
                    }
                    s.paginationContainer.html(paginationHTML);
                    s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
                    if (s.params.paginationClickable && s.params.a11y && s.a11y) {
                        s.a11y.initPagination();
                    }
                }
                if (s.params.paginationType === 'fraction') {
                    if (s.params.paginationFractionRender) {
                        paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
                    }
                    else {
                        paginationHTML =
                            '<span class="' + s.params.paginationCurrentClass + '"></span>' +
                            ' / ' +
                            '<span class="' + s.params.paginationTotalClass+'"></span>';
                    }
                    s.paginationContainer.html(paginationHTML);
                }
                if (s.params.paginationType === 'progress') {
                    if (s.params.paginationProgressRender) {
                        paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
                    }
                    else {
                        paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
                    }
                    s.paginationContainer.html(paginationHTML);
                }
                if (s.params.paginationType !== 'custom') {
                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
                }
            }
        };
        /*=========================
          Common update method
          ===========================*/
        s.update = function (updateTranslate) {
            if (!s) return;
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updateProgress();
            s.updatePagination();
            s.updateClasses();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            var newTranslate;
            function forceSetTranslate() {
                var translate = s.rtl ? -s.translate : s.translate;
                newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();
            }
            if (updateTranslate) {
                var translated;
                if (s.controller && s.controller.spline) {
                    s.controller.spline = undefined;
                }
                if (s.params.freeMode) {
                    forceSetTranslate();
                    if (s.params.autoHeight) {
                        s.updateAutoHeight();
                    }
                }
                else {
                    if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                        translated = s.slideTo(s.slides.length - 1, 0, false, true);
                    }
                    else {
                        translated = s.slideTo(s.activeIndex, 0, false, true);
                    }
                    if (!translated) {
                        forceSetTranslate();
                    }
                }
            }
            else if (s.params.autoHeight) {
                s.updateAutoHeight();
            }
        };
        
        /*=========================
          Resize Handler
          ===========================*/
        s.onResize = function (forceUpdatePagination) {
            if (s.params.onBeforeResize) s.params.onBeforeResize(s);
            //Breakpoints
            if (s.params.breakpoints) {
                s.setBreakpoint();
            }
        
            // Disable locks on resize
            var allowSwipeToPrev = s.params.allowSwipeToPrev;
            var allowSwipeToNext = s.params.allowSwipeToNext;
            s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;
        
            s.updateContainerSize();
            s.updateSlidesSize();
            if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            if (s.controller && s.controller.spline) {
                s.controller.spline = undefined;
            }
            var slideChangedBySlideTo = false;
            if (s.params.freeMode) {
                var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();
        
                if (s.params.autoHeight) {
                    s.updateAutoHeight();
                }
            }
            else {
                s.updateClasses();
                if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                    slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
                }
                else {
                    slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
                }
            }
            if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
                s.lazy.load();
            }
            // Return locks after resize
            s.params.allowSwipeToPrev = allowSwipeToPrev;
            s.params.allowSwipeToNext = allowSwipeToNext;
            if (s.params.onAfterResize) s.params.onAfterResize(s);
        };
        
        /*=========================
          Events
          ===========================*/
        
        //Define Touch Events
        s.touchEventsDesktop = {start: 'mousedown', move: 'mousemove', end: 'mouseup'};
        if (window.navigator.pointerEnabled) s.touchEventsDesktop = {start: 'pointerdown', move: 'pointermove', end: 'pointerup'};
        else if (window.navigator.msPointerEnabled) s.touchEventsDesktop = {start: 'MSPointerDown', move: 'MSPointerMove', end: 'MSPointerUp'};
        s.touchEvents = {
            start : s.support.touch || !s.params.simulateTouch  ? 'touchstart' : s.touchEventsDesktop.start,
            move : s.support.touch || !s.params.simulateTouch ? 'touchmove' : s.touchEventsDesktop.move,
            end : s.support.touch || !s.params.simulateTouch ? 'touchend' : s.touchEventsDesktop.end
        };
        
        
        // WP8 Touch Events Fix
        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
            (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
        }
        
        // Attach/detach events
        s.initEvents = function (detach) {
            var actionDom = detach ? 'off' : 'on';
            var action = detach ? 'removeEventListener' : 'addEventListener';
            var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
            var target = s.support.touch ? touchEventsTarget : document;
        
            var moveCapture = s.params.nested ? true : false;
        
            //Touch Events
            if (s.browser.ie) {
                touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
                target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                target[action](s.touchEvents.end, s.onTouchEnd, false);
            }
            else {
                if (s.support.touch) {
                    var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? {passive: true, capture: false} : false;
                    touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, passiveListener);
                    touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                    touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, passiveListener);
                }
                if ((params.simulateTouch && !s.device.ios && !s.device.android) || (params.simulateTouch && !s.support.touch && s.device.ios)) {
                    touchEventsTarget[action]('mousedown', s.onTouchStart, false);
                    document[action]('mousemove', s.onTouchMove, moveCapture);
                    document[action]('mouseup', s.onTouchEnd, false);
                }
            }
            window[action]('resize', s.onResize);
        
            // Next, Prev, Index
            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                s.nextButton[actionDom]('click', s.onClickNext);
                if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                s.prevButton[actionDom]('click', s.onClickPrev);
                if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.pagination && s.params.paginationClickable) {
                s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
                if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
            }
        
            // Prevent Links Clicks
            if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
        };
        s.attachEvents = function () {
            s.initEvents();
        };
        s.detachEvents = function () {
            s.initEvents(true);
        };
        
        /*=========================
          Handle Clicks
          ===========================*/
        // Prevent Clicks
        s.allowClick = true;
        s.preventClicks = function (e) {
            if (!s.allowClick) {
                if (s.params.preventClicks) e.preventDefault();
                if (s.params.preventClicksPropagation && s.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        };
        // Clicks
        s.onClickNext = function (e) {
            e.preventDefault();
            if (s.isEnd && !s.params.loop) return;
            s.slideNext();
        };
        s.onClickPrev = function (e) {
            e.preventDefault();
            if (s.isBeginning && !s.params.loop) return;
            s.slidePrev();
        };
        s.onClickIndex = function (e) {
            e.preventDefault();
            var index = $(this).index() * s.params.slidesPerGroup;
            if (s.params.loop) index = index + s.loopedSlides;
            s.slideTo(index);
        };
        
        /*=========================
          Handle Touches
          ===========================*/
        function findElementInEvent(e, selector) {
            var el = $(e.target);
            if (!el.is(selector)) {
                if (typeof selector === 'string') {
                    el = el.parents(selector);
                }
                else if (selector.nodeType) {
                    var found;
                    el.parents().each(function (index, _el) {
                        if (_el === selector) found = selector;
                    });
                    if (!found) return undefined;
                    else return selector;
                }
            }
            if (el.length === 0) {
                return undefined;
            }
            return el[0];
        }
        s.updateClickedSlide = function (e) {
            var slide = findElementInEvent(e, '.' + s.params.slideClass);
            var slideFound = false;
            if (slide) {
                for (var i = 0; i < s.slides.length; i++) {
                    if (s.slides[i] === slide) slideFound = true;
                }
            }
        
            if (slide && slideFound) {
                s.clickedSlide = slide;
                s.clickedIndex = $(slide).index();
            }
            else {
                s.clickedSlide = undefined;
                s.clickedIndex = undefined;
                return;
            }
            if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
                var slideToIndex = s.clickedIndex,
                    realIndex,
                    duplicatedSlides,
                    slidesPerView = s.params.slidesPerView === 'auto' ? s.currentSlidesPerView() : s.params.slidesPerView;
                if (s.params.loop) {
                    if (s.animating) return;
                    realIndex = parseInt($(s.clickedSlide).attr('data-swiper-slide-index'), 10);
                    if (s.params.centeredSlides) {
                        if ((slideToIndex < s.loopedSlides - slidesPerView/2) || (slideToIndex > s.slides.length - s.loopedSlides + slidesPerView/2)) {
                            s.fixLoop();
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
                            setTimeout(function () {
                                s.slideTo(slideToIndex);
                            }, 0);
                        }
                        else {
                            s.slideTo(slideToIndex);
                        }
                    }
                    else {
                        if (slideToIndex > s.slides.length - slidesPerView) {
                            s.fixLoop();
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
                            setTimeout(function () {
                                s.slideTo(slideToIndex);
                            }, 0);
                        }
                        else {
                            s.slideTo(slideToIndex);
                        }
                    }
                }
                else {
                    s.slideTo(slideToIndex);
                }
            }
        };
        
        var isTouched,
            isMoved,
            allowTouchCallbacks,
            touchStartTime,
            isScrolling,
            currentTranslate,
            startTranslate,
            allowThresholdMove,
            // Form elements to match
            formElements = 'input, select, textarea, button, video',
            // Last click time
            lastClickTime = Date.now(), clickTimeout,
            //Velocities
            velocities = [],
            allowMomentumBounce;
        
        // Animating Flag
        s.animating = false;
        
        // Touches information
        s.touches = {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
        };
        
        // Touch handlers
        var isTouchEvent, startMoving;
        s.onTouchStart = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            isTouchEvent = e.type === 'touchstart';
            if (!isTouchEvent && 'which' in e && e.which === 3) return;
            if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
                s.allowClick = true;
                return;
            }
            if (s.params.swipeHandler) {
                if (!findElementInEvent(e, s.params.swipeHandler)) return;
            }
        
            var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        
            // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
            if(s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
                return;
            }
        
            isTouched = true;
            isMoved = false;
            allowTouchCallbacks = true;
            isScrolling = undefined;
            startMoving = undefined;
            s.touches.startX = startX;
            s.touches.startY = startY;
            touchStartTime = Date.now();
            s.allowClick = true;
            s.updateContainerSize();
            s.swipeDirection = undefined;
            if (s.params.threshold > 0) allowThresholdMove = false;
            if (e.type !== 'touchstart') {
                var preventDefault = true;
                if ($(e.target).is(formElements)) preventDefault = false;
                if (document.activeElement && $(document.activeElement).is(formElements)) {
                    document.activeElement.blur();
                }
                if (preventDefault) {
                    e.preventDefault();
                }
            }
            s.emit('onTouchStart', s, e);
        };
        
        s.onTouchMove = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            if (isTouchEvent && e.type === 'mousemove') return;
            if (e.preventedByNestedSwiper) {
                s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                return;
            }
            if (s.params.onlyExternal) {
                // isMoved = true;
                s.allowClick = false;
                if (isTouched) {
                    s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                    s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                    touchStartTime = Date.now();
                }
                return;
            }
            if (isTouchEvent && s.params.touchReleaseOnEdges && !s.params.loop) {
                if (!s.isHorizontal()) {
                    // Vertical
                    if (
                        (s.touches.currentY < s.touches.startY && s.translate <= s.maxTranslate()) ||
                        (s.touches.currentY > s.touches.startY && s.translate >= s.minTranslate())
                        ) {
                        return;
                    }
                }
                else {
                    if (
                        (s.touches.currentX < s.touches.startX && s.translate <= s.maxTranslate()) ||
                        (s.touches.currentX > s.touches.startX && s.translate >= s.minTranslate())
                        ) {
                        return;
                    }
                }
            }
            if (isTouchEvent && document.activeElement) {
                if (e.target === document.activeElement && $(e.target).is(formElements)) {
                    isMoved = true;
                    s.allowClick = false;
                    return;
                }
            }
            if (allowTouchCallbacks) {
                s.emit('onTouchMove', s, e);
            }
            if (e.targetTouches && e.targetTouches.length > 1) return;
        
            s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        
            if (typeof isScrolling === 'undefined') {
                var touchAngle;
                if (s.isHorizontal() && s.touches.currentY === s.touches.startY || !s.isHorizontal() && s.touches.currentX === s.touches.startX) {
                    isScrolling = false;
                }
                else {
                    touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
                    isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : (90 - touchAngle > s.params.touchAngle);
                }
            }
            if (isScrolling) {
                s.emit('onTouchMoveOpposite', s, e);
            }
            if (typeof startMoving === 'undefined') {
                if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
                    startMoving = true;
                }
            }
            if (!isTouched) return;
            if (isScrolling)  {
                isTouched = false;
                return;
            }
            if (!startMoving) {
                return;
            }
            s.allowClick = false;
            s.emit('onSliderMove', s, e);
            e.preventDefault();
            if (s.params.touchMoveStopPropagation && !s.params.nested) {
                e.stopPropagation();
            }
        
            if (!isMoved) {
                if (params.loop) {
                    s.fixLoop();
                }
                startTranslate = s.getWrapperTranslate();
                s.setWrapperTransition(0);
                if (s.animating) {
                    s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
                }
                if (s.params.autoplay && s.autoplaying) {
                    if (s.params.autoplayDisableOnInteraction) {
                        s.stopAutoplay();
                    }
                    else {
                        s.pauseAutoplay();
                    }
                }
                allowMomentumBounce = false;
                //Grab Cursor
                if (s.params.grabCursor && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
                    s.setGrabCursor(true);
                }
            }
            isMoved = true;
        
            var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
        
            diff = diff * s.params.touchRatio;
            if (s.rtl) diff = -diff;
        
            s.swipeDirection = diff > 0 ? 'prev' : 'next';
            currentTranslate = diff + startTranslate;
        
            var disableParentSwiper = true;
            if ((diff > 0 && currentTranslate > s.minTranslate())) {
                disableParentSwiper = false;
                if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
            }
            else if (diff < 0 && currentTranslate < s.maxTranslate()) {
                disableParentSwiper = false;
                if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
            }
        
            if (disableParentSwiper) {
                e.preventedByNestedSwiper = true;
            }
        
            // Directions locks
            if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
                currentTranslate = startTranslate;
            }
            if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
                currentTranslate = startTranslate;
            }
        
        
            // Threshold
            if (s.params.threshold > 0) {
                if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
                    if (!allowThresholdMove) {
                        allowThresholdMove = true;
                        s.touches.startX = s.touches.currentX;
                        s.touches.startY = s.touches.currentY;
                        currentTranslate = startTranslate;
                        s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
                        return;
                    }
                }
                else {
                    currentTranslate = startTranslate;
                    return;
                }
            }
        
            if (!s.params.followFinger) return;
        
            // Update active index in free mode
            if (s.params.freeMode || s.params.watchSlidesProgress) {
                s.updateActiveIndex();
            }
            if (s.params.freeMode) {
                //Velocity
                if (velocities.length === 0) {
                    velocities.push({
                        position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
                        time: touchStartTime
                    });
                }
                velocities.push({
                    position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
                    time: (new window.Date()).getTime()
                });
            }
            // Update progress
            s.updateProgress(currentTranslate);
            // Update translate
            s.setWrapperTranslate(currentTranslate);
        };
        s.onTouchEnd = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            if (allowTouchCallbacks) {
                s.emit('onTouchEnd', s, e);
            }
            allowTouchCallbacks = false;
            if (!isTouched) return;
            //Return Grab Cursor
            if (s.params.grabCursor && isMoved && isTouched  && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
                s.setGrabCursor(false);
            }
        
            // Time diff
            var touchEndTime = Date.now();
            var timeDiff = touchEndTime - touchStartTime;
        
            // Tap, doubleTap, Click
            if (s.allowClick) {
                s.updateClickedSlide(e);
                s.emit('onTap', s, e);
                if (timeDiff < 300 && (touchEndTime - lastClickTime) > 300) {
                    if (clickTimeout) clearTimeout(clickTimeout);
                    clickTimeout = setTimeout(function () {
                        if (!s) return;
                        if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
                            s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
                        }
                        s.emit('onClick', s, e);
                    }, 300);
        
                }
                if (timeDiff < 300 && (touchEndTime - lastClickTime) < 300) {
                    if (clickTimeout) clearTimeout(clickTimeout);
                    s.emit('onDoubleTap', s, e);
                }
            }
        
            lastClickTime = Date.now();
            setTimeout(function () {
                if (s) s.allowClick = true;
            }, 0);
        
            if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
                isTouched = isMoved = false;
                return;
            }
            isTouched = isMoved = false;
        
            var currentPos;
            if (s.params.followFinger) {
                currentPos = s.rtl ? s.translate : -s.translate;
            }
            else {
                currentPos = -currentTranslate;
            }
            if (s.params.freeMode) {
                if (currentPos < -s.minTranslate()) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                else if (currentPos > -s.maxTranslate()) {
                    if (s.slides.length < s.snapGrid.length) {
                        s.slideTo(s.snapGrid.length - 1);
                    }
                    else {
                        s.slideTo(s.slides.length - 1);
                    }
                    return;
                }
        
                if (s.params.freeModeMomentum) {
                    if (velocities.length > 1) {
                        var lastMoveEvent = velocities.pop(), velocityEvent = velocities.pop();
        
                        var distance = lastMoveEvent.position - velocityEvent.position;
                        var time = lastMoveEvent.time - velocityEvent.time;
                        s.velocity = distance / time;
                        s.velocity = s.velocity / 2;
                        if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
                            s.velocity = 0;
                        }
                        // this implies that the user stopped moving a finger then released.
                        // There would be no events with distance zero, so the last event is stale.
                        if (time > 150 || (new window.Date().getTime() - lastMoveEvent.time) > 300) {
                            s.velocity = 0;
                        }
                    } else {
                        s.velocity = 0;
                    }
                    s.velocity = s.velocity * s.params.freeModeMomentumVelocityRatio;
        
                    velocities.length = 0;
                    var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
                    var momentumDistance = s.velocity * momentumDuration;
        
                    var newPosition = s.translate + momentumDistance;
                    if (s.rtl) newPosition = - newPosition;
                    var doBounce = false;
                    var afterBouncePosition;
                    var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
                    if (newPosition < s.maxTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition + s.maxTranslate() < -bounceAmount) {
                                newPosition = s.maxTranslate() - bounceAmount;
                            }
                            afterBouncePosition = s.maxTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        }
                        else {
                            newPosition = s.maxTranslate();
                        }
                    }
                    else if (newPosition > s.minTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition - s.minTranslate() > bounceAmount) {
                                newPosition = s.minTranslate() + bounceAmount;
                            }
                            afterBouncePosition = s.minTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        }
                        else {
                            newPosition = s.minTranslate();
                        }
                    }
                    else if (s.params.freeModeSticky) {
                        var j = 0,
                            nextSlide;
                        for (j = 0; j < s.snapGrid.length; j += 1) {
                            if (s.snapGrid[j] > -newPosition) {
                                nextSlide = j;
                                break;
                            }
        
                        }
                        if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
                            newPosition = s.snapGrid[nextSlide];
                        } else {
                            newPosition = s.snapGrid[nextSlide - 1];
                        }
                        if (!s.rtl) newPosition = - newPosition;
                    }
                    //Fix duration
                    if (s.velocity !== 0) {
                        if (s.rtl) {
                            momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
                        }
                        else {
                            momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
                        }
                    }
                    else if (s.params.freeModeSticky) {
                        s.slideReset();
                        return;
                    }
        
                    if (s.params.freeModeMomentumBounce && doBounce) {
                        s.updateProgress(afterBouncePosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        s.animating = true;
                        s.wrapper.transitionEnd(function () {
                            if (!s || !allowMomentumBounce) return;
                            s.emit('onMomentumBounce', s);
        
                            s.setWrapperTransition(s.params.speed);
                            s.setWrapperTranslate(afterBouncePosition);
                            s.wrapper.transitionEnd(function () {
                                if (!s) return;
                                s.onTransitionEnd();
                            });
                        });
                    } else if (s.velocity) {
                        s.updateProgress(newPosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        if (!s.animating) {
                            s.animating = true;
                            s.wrapper.transitionEnd(function () {
                                if (!s) return;
                                s.onTransitionEnd();
                            });
                        }
        
                    } else {
                        s.updateProgress(newPosition);
                    }
        
                    s.updateActiveIndex();
                }
                if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
                    s.updateProgress();
                    s.updateActiveIndex();
                }
                return;
            }
        
            // Find current slide
            var i, stopIndex = 0, groupSize = s.slidesSizesGrid[0];
            for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
                if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
                    if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
                    }
                }
                else {
                    if (currentPos >= s.slidesGrid[i]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
                    }
                }
            }
        
            // Find current slide size
            var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;
        
            if (timeDiff > s.params.longSwipesMs) {
                // Long touches
                if (!s.params.longSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);
                    else s.slideTo(stopIndex);
        
                }
                if (s.swipeDirection === 'prev') {
                    if (ratio > (1 - s.params.longSwipesRatio)) s.slideTo(stopIndex + s.params.slidesPerGroup);
                    else s.slideTo(stopIndex);
                }
            }
            else {
                // Short swipes
                if (!s.params.shortSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    s.slideTo(stopIndex + s.params.slidesPerGroup);
        
                }
                if (s.swipeDirection === 'prev') {
                    s.slideTo(stopIndex);
                }
            }
        };
        /*=========================
          Transitions
          ===========================*/
        s._slideTo = function (slideIndex, speed) {
            return s.slideTo(slideIndex, speed, true, true);
        };
        s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (typeof slideIndex === 'undefined') slideIndex = 0;
            if (slideIndex < 0) slideIndex = 0;
            s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
            if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;
        
            var translate = - s.snapGrid[s.snapIndex];
            // Stop autoplay
            if (s.params.autoplay && s.autoplaying) {
                if (internal || !s.params.autoplayDisableOnInteraction) {
                    s.pauseAutoplay(speed);
                }
                else {
                    s.stopAutoplay();
                }
            }
            // Update progress
            s.updateProgress(translate);
        
            // Normalize slideIndex
            if(s.params.normalizeSlideIndex){
                for (var i = 0; i < s.slidesGrid.length; i++) {
                    if (- Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
                        slideIndex = i;
                    }
                }
            }
        
            // Directions locks
            if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
                if ((s.activeIndex || 0) !== slideIndex ) return false;
            }
        
            // Update Index
            if (typeof speed === 'undefined') speed = s.params.speed;
            s.previousIndex = s.activeIndex || 0;
            s.activeIndex = slideIndex;
            s.updateRealIndex();
            if ((s.rtl && -translate === s.translate) || (!s.rtl && translate === s.translate)) {
                // Update Height
                if (s.params.autoHeight) {
                    s.updateAutoHeight();
                }
                s.updateClasses();
                if (s.params.effect !== 'slide') {
                    s.setWrapperTranslate(translate);
                }
                return false;
            }
            s.updateClasses();
            s.onTransitionStart(runCallbacks);
        
            if (speed === 0 || s.browser.lteIE9) {
                s.setWrapperTranslate(translate);
                s.setWrapperTransition(0);
                s.onTransitionEnd(runCallbacks);
            }
            else {
                s.setWrapperTranslate(translate);
                s.setWrapperTransition(speed);
                if (!s.animating) {
                    s.animating = true;
                    s.wrapper.transitionEnd(function () {
                        if (!s) return;
                        s.onTransitionEnd(runCallbacks);
                    });
                }
        
            }
        
            return true;
        };
        
        s.onTransitionStart = function (runCallbacks) {
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (s.params.autoHeight) {
                s.updateAutoHeight();
            }
            if (s.lazy) s.lazy.onTransitionStart();
            if (runCallbacks) {
                s.emit('onTransitionStart', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeStart', s);
                    if (s.activeIndex > s.previousIndex) {
                        s.emit('onSlideNextStart', s);
                    }
                    else {
                        s.emit('onSlidePrevStart', s);
                    }
                }
        
            }
        };
        s.onTransitionEnd = function (runCallbacks) {
            s.animating = false;
            s.setWrapperTransition(0);
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (s.lazy) s.lazy.onTransitionEnd();
            if (runCallbacks) {
                s.emit('onTransitionEnd', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeEnd', s);
                    if (s.activeIndex > s.previousIndex) {
                        s.emit('onSlideNextEnd', s);
                    }
                    else {
                        s.emit('onSlidePrevEnd', s);
                    }
                }
            }
            if (s.params.history && s.history) {
                s.history.setHistory(s.params.history, s.activeIndex);
            }
            if (s.params.hashnav && s.hashnav) {
                s.hashnav.setHash();
            }
        
        };
        s.slideNext = function (runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating) return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
            }
            else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
        };
        s._slideNext = function (speed) {
            return s.slideNext(true, speed, true);
        };
        s.slidePrev = function (runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating) return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
            }
            else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
        };
        s._slidePrev = function (speed) {
            return s.slidePrev(true, speed, true);
        };
        s.slideReset = function (runCallbacks, speed, internal) {
            return s.slideTo(s.activeIndex, speed, runCallbacks);
        };
        
        s.disableTouchControl = function () {
            s.params.onlyExternal = true;
            return true;
        };
        s.enableTouchControl = function () {
            s.params.onlyExternal = false;
            return true;
        };
        
        /*=========================
          Translate/transition helpers
          ===========================*/
        s.setWrapperTransition = function (duration, byController) {
            s.wrapper.transition(duration);
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTransition(duration);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTransition(duration);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTransition(duration);
            }
            if (s.params.control && s.controller) {
                s.controller.setTransition(duration, byController);
            }
            s.emit('onSetTransition', s, duration);
        };
        s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
            var x = 0, y = 0, z = 0;
            if (s.isHorizontal()) {
                x = s.rtl ? -translate : translate;
            }
            else {
                y = translate;
            }
        
            if (s.params.roundLengths) {
                x = round(x);
                y = round(y);
            }
        
            if (!s.params.virtualTranslate) {
                if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
                else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
            }
        
            s.translate = s.isHorizontal() ? x : y;
        
            // Check if we need to update progress
            var progress;
            var translatesDiff = s.maxTranslate() - s.minTranslate();
            if (translatesDiff === 0) {
                progress = 0;
            }
            else {
                progress = (translate - s.minTranslate()) / (translatesDiff);
            }
            if (progress !== s.progress) {
                s.updateProgress(translate);
            }
        
            if (updateActiveIndex) s.updateActiveIndex();
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTranslate(s.translate);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTranslate(s.translate);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTranslate(s.translate);
            }
            if (s.params.control && s.controller) {
                s.controller.setTranslate(s.translate, byController);
            }
            s.emit('onSetTranslate', s, s.translate);
        };
        
        s.getTranslate = function (el, axis) {
            var matrix, curTransform, curStyle, transformMatrix;
        
            // automatic axis detection
            if (typeof axis === 'undefined') {
                axis = 'x';
            }
        
            if (s.params.virtualTranslate) {
                return s.rtl ? -s.translate : s.translate;
            }
        
            curStyle = window.getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(',').length > 6) {
                    curTransform = curTransform.split(', ').map(function(a){
                        return a.replace(',','.');
                    }).join(', ');
                }
                // Some old versions of Webkit choke when 'none' is passed; pass
                // empty string instead in this case
                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
            }
            else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }
        
            if (axis === 'x') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m41;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[12]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[4]);
            }
            if (axis === 'y') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m42;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[13]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[5]);
            }
            if (s.rtl && curTransform) curTransform = -curTransform;
            return curTransform || 0;
        };
        s.getWrapperTranslate = function (axis) {
            if (typeof axis === 'undefined') {
                axis = s.isHorizontal() ? 'x' : 'y';
            }
            return s.getTranslate(s.wrapper[0], axis);
        };
        
        /*=========================
          Observer
          ===========================*/
        s.observers = [];
        function initObserver(target, options) {
            options = options || {};
            // create an observer instance
            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
            var observer = new ObserverFunc(function (mutations) {
                mutations.forEach(function (mutation) {
                    s.onResize(true);
                    s.emit('onObserverUpdate', s, mutation);
                });
            });
        
            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
            });
        
            s.observers.push(observer);
        }
        s.initObservers = function () {
            if (s.params.observeParents) {
                var containerParents = s.container.parents();
                for (var i = 0; i < containerParents.length; i++) {
                    initObserver(containerParents[i]);
                }
            }
        
            // Observe container
            initObserver(s.container[0], {childList: false});
        
            // Observe wrapper
            initObserver(s.wrapper[0], {attributes: false});
        };
        s.disconnectObservers = function () {
            for (var i = 0; i < s.observers.length; i++) {
                s.observers[i].disconnect();
            }
            s.observers = [];
        };
        /*=========================
          Loop
          ===========================*/
        // Create looped slides
        s.createLoop = function () {
            // Remove duplicated slides
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
        
            var slides = s.wrapper.children('.' + s.params.slideClass);
        
            if(s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;
        
            s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
            s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
            if (s.loopedSlides > slides.length) {
                s.loopedSlides = slides.length;
            }
        
            var prependSlides = [], appendSlides = [], i;
            slides.each(function (index, el) {
                var slide = $(this);
                if (index < s.loopedSlides) appendSlides.push(el);
                if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
                slide.attr('data-swiper-slide-index', index);
            });
            for (i = 0; i < appendSlides.length; i++) {
                s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
            for (i = prependSlides.length - 1; i >= 0; i--) {
                s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
        };
        s.destroyLoop = function () {
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
            s.slides.removeAttr('data-swiper-slide-index');
        };
        s.reLoop = function (updatePosition) {
            var oldIndex = s.activeIndex - s.loopedSlides;
            s.destroyLoop();
            s.createLoop();
            s.updateSlidesSize();
            if (updatePosition) {
                s.slideTo(oldIndex + s.loopedSlides, 0, false);
            }
        
        };
        s.fixLoop = function () {
            var newIndex;
            //Fix For Negative Oversliding
            if (s.activeIndex < s.loopedSlides) {
                newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
                newIndex = newIndex + s.loopedSlides;
                s.slideTo(newIndex, 0, false, true);
            }
            //Fix For Positive Oversliding
            else if ((s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2) || (s.activeIndex > s.slides.length - s.params.slidesPerView * 2)) {
                newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
                newIndex = newIndex + s.loopedSlides;
                s.slideTo(newIndex, 0, false, true);
            }
        };
        /*=========================
          Append/Prepend/Remove Slides
          ===========================*/
        s.appendSlide = function (slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            if (typeof slides === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i]) s.wrapper.append(slides[i]);
                }
            }
            else {
                s.wrapper.append(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
        };
        s.prependSlide = function (slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            var newActiveIndex = s.activeIndex + 1;
            if (typeof slides === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i]) s.wrapper.prepend(slides[i]);
                }
                newActiveIndex = s.activeIndex + slides.length;
            }
            else {
                s.wrapper.prepend(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            s.slideTo(newActiveIndex, 0, false);
        };
        s.removeSlide = function (slidesIndexes) {
            if (s.params.loop) {
                s.destroyLoop();
                s.slides = s.wrapper.children('.' + s.params.slideClass);
            }
            var newActiveIndex = s.activeIndex,
                indexToRemove;
            if (typeof slidesIndexes === 'object' && slidesIndexes.length) {
                for (var i = 0; i < slidesIndexes.length; i++) {
                    indexToRemove = slidesIndexes[i];
                    if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                    if (indexToRemove < newActiveIndex) newActiveIndex--;
                }
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
            else {
                indexToRemove = slidesIndexes;
                if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                if (indexToRemove < newActiveIndex) newActiveIndex--;
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
        
            if (s.params.loop) {
                s.createLoop();
            }
        
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            if (s.params.loop) {
                s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
            }
            else {
                s.slideTo(newActiveIndex, 0, false);
            }
        
        };
        s.removeAllSlides = function () {
            var slidesIndexes = [];
            for (var i = 0; i < s.slides.length; i++) {
                slidesIndexes.push(i);
            }
            s.removeSlide(slidesIndexes);
        };
        

        /*=========================
          Effects
          ===========================*/
        s.effects = {
            fade: {
                setTranslate: function () {
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var offset = slide[0].swiperSlideOffset;
                        var tx = -offset;
                        if (!s.params.virtualTranslate) tx = tx - s.translate;
                        var ty = 0;
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        var slideOpacity = s.params.fade.crossFade ?
                                Math.max(1 - Math.abs(slide[0].progress), 0) :
                                1 + Math.min(Math.max(slide[0].progress, -1), 0);
                        slide
                            .css({
                                opacity: slideOpacity
                            })
                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
        
                    }
        
                },
                setTransition: function (duration) {
                    s.slides.transition(duration);
                    if (s.params.virtualTranslate && duration !== 0) {
                        var eventTriggered = false;
                        s.slides.transitionEnd(function () {
                            if (eventTriggered) return;
                            if (!s) return;
                            eventTriggered = true;
                            s.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {
                                s.wrapper.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            },
            flip: {
                setTranslate: function () {
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var progress = slide[0].progress;
                        if (s.params.flip.limitRotation) {
                            progress = Math.max(Math.min(slide[0].progress, 1), -1);
                        }
                        var offset = slide[0].swiperSlideOffset;
                        var rotate = -180 * progress,
                            rotateY = rotate,
                            rotateX = 0,
                            tx = -offset,
                            ty = 0;
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                            rotateX = -rotateY;
                            rotateY = 0;
                        }
                        else if (s.rtl) {
                            rotateY = -rotateY;
                        }
        
                        slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;
        
                        if (s.params.flip.slideShadows) {
                            //Set shadows
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
        
                        slide
                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
                    }
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.virtualTranslate && duration !== 0) {
                        var eventTriggered = false;
                        s.slides.eq(s.activeIndex).transitionEnd(function () {
                            if (eventTriggered) return;
                            if (!s) return;
                            if (!$(this).hasClass(s.params.slideActiveClass)) return;
                            eventTriggered = true;
                            s.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {
                                s.wrapper.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            },
            cube: {
                setTranslate: function () {
                    var wrapperRotate = 0, cubeShadow;
                    if (s.params.cube.shadow) {
                        if (s.isHorizontal()) {
                            cubeShadow = s.wrapper.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.wrapper.append(cubeShadow);
                            }
                            cubeShadow.css({height: s.width + 'px'});
                        }
                        else {
                            cubeShadow = s.container.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.container.append(cubeShadow);
                            }
                        }
                    }
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var slideAngle = i * 90;
                        var round = Math.floor(slideAngle / 360);
                        if (s.rtl) {
                            slideAngle = -slideAngle;
                            round = Math.floor(-slideAngle / 360);
                        }
                        var progress = Math.max(Math.min(slide[0].progress, 1), -1);
                        var tx = 0, ty = 0, tz = 0;
                        if (i % 4 === 0) {
                            tx = - round * 4 * s.size;
                            tz = 0;
                        }
                        else if ((i - 1) % 4 === 0) {
                            tx = 0;
                            tz = - round * 4 * s.size;
                        }
                        else if ((i - 2) % 4 === 0) {
                            tx = s.size + round * 4 * s.size;
                            tz = s.size;
                        }
                        else if ((i - 3) % 4 === 0) {
                            tx = - s.size;
                            tz = 3 * s.size + s.size * 4 * round;
                        }
                        if (s.rtl) {
                            tx = -tx;
                        }
        
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
        
                        var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
                        if (progress <= 1 && progress > -1) {
                            wrapperRotate = i * 90 + progress * 90;
                            if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
                        }
                        slide.transform(transform);
                        if (s.params.cube.slideShadows) {
                            //Set shadows
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                    }
                    s.wrapper.css({
                        '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        'transform-origin': '50% 50% -' + (s.size / 2) + 'px'
                    });
        
                    if (s.params.cube.shadow) {
                        if (s.isHorizontal()) {
                            cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
                        }
                        else {
                            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                            var scale1 = s.params.cube.shadowScale,
                                scale2 = s.params.cube.shadowScale / multiplier,
                                offset = s.params.cube.shadowOffset;
                            cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
                        }
                    }
                    var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;
                    s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.cube.shadow && !s.isHorizontal()) {
                        s.container.find('.swiper-cube-shadow').transition(duration);
                    }
                }
            },
            coverflow: {
                setTranslate: function () {
                    var transform = s.translate;
                    var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
                    var rotate = s.isHorizontal() ? s.params.coverflow.rotate: -s.params.coverflow.rotate;
                    var translate = s.params.coverflow.depth;
                    //Each slide offset from center
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideSize = s.slidesSizesGrid[i];
                        var slideOffset = slide[0].swiperSlideOffset;
                        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
        
                        var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
                        var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        var translateZ = -translate * Math.abs(offsetMultiplier);
        
                        var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);
                        var translateX = s.isHorizontal() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;
        
                        //Fix for ultra small values
                        if (Math.abs(translateX) < 0.001) translateX = 0;
                        if (Math.abs(translateY) < 0.001) translateY = 0;
                        if (Math.abs(translateZ) < 0.001) translateZ = 0;
                        if (Math.abs(rotateY) < 0.001) rotateY = 0;
                        if (Math.abs(rotateX) < 0.001) rotateX = 0;
        
                        var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
        
                        slide.transform(slideTransform);
                        slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (s.params.coverflow.slideShadows) {
                            //Set shadows
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if (shadowAfter.length) shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }
                    }
        
                    //Set correct perspective for IE10
                    if (s.browser.ie) {
                        var ws = s.wrapper[0].style;
                        ws.perspectiveOrigin = center + 'px 50%';
                    }
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                }
            }
        };
        

        /*=========================
          Images Lazy Loading
          ===========================*/
        s.lazy = {
            initialImageLoaded: false,
            loadImageInSlide: function (index, loadInDuplicate) {
                if (typeof index === 'undefined') return;
                if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
                if (s.slides.length === 0) return;
        
                var slide = s.slides.eq(index);
                var img = slide.find('.' + s.params.lazyLoadingClass + ':not(.' + s.params.lazyStatusLoadedClass + '):not(.' + s.params.lazyStatusLoadingClass + ')');
                if (slide.hasClass(s.params.lazyLoadingClass) && !slide.hasClass(s.params.lazyStatusLoadedClass) && !slide.hasClass(s.params.lazyStatusLoadingClass)) {
                    img = img.add(slide[0]);
                }
                if (img.length === 0) return;
        
                img.each(function () {
                    var _img = $(this);
                    _img.addClass(s.params.lazyStatusLoadingClass);
                    var background = _img.attr('data-background');
                    var src = _img.attr('data-src'),
                        srcset = _img.attr('data-srcset'),
                        sizes = _img.attr('data-sizes');
                    s.loadImage(_img[0], (src || background), srcset, sizes, false, function () {
                        if (typeof s === 'undefined' || s === null || !s) return;
                        if (background) {
                            _img.css('background-image', 'url("' + background + '")');
                            _img.removeAttr('data-background');
                        }
                        else {
                            if (srcset) {
                                _img.attr('srcset', srcset);
                                _img.removeAttr('data-srcset');
                            }
                            if (sizes) {
                                _img.attr('sizes', sizes);
                                _img.removeAttr('data-sizes');
                            }
                            if (src) {
                                _img.attr('src', src);
                                _img.removeAttr('data-src');
                            }
        
                        }
        
                        _img.addClass(s.params.lazyStatusLoadedClass).removeClass(s.params.lazyStatusLoadingClass);
                        slide.find('.' + s.params.lazyPreloaderClass + ', .' + s.params.preloaderClass).remove();
                        if (s.params.loop && loadInDuplicate) {
                            var slideOriginalIndex = slide.attr('data-swiper-slide-index');
                            if (slide.hasClass(s.params.slideDuplicateClass)) {
                                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
                                s.lazy.loadImageInSlide(originalSlide.index(), false);
                            }
                            else {
                                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
                                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
                            }
                        }
                        s.emit('onLazyImageReady', s, slide[0], _img[0]);
                    });
        
                    s.emit('onLazyImageLoad', s, slide[0], _img[0]);
                });
        
            },
            load: function () {
                var i;
                var slidesPerView = s.params.slidesPerView;
                if (slidesPerView === 'auto') {
                    slidesPerView = 0;
                }
                if (!s.lazy.initialImageLoaded) s.lazy.initialImageLoaded = true;
                if (s.params.watchSlidesVisibility) {
                    s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
                        s.lazy.loadImageInSlide($(this).index());
                    });
                }
                else {
                    if (slidesPerView > 1) {
                        for (i = s.activeIndex; i < s.activeIndex + slidesPerView ; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                    }
                    else {
                        s.lazy.loadImageInSlide(s.activeIndex);
                    }
                }
                if (s.params.lazyLoadingInPrevNext) {
                    if (slidesPerView > 1 || (s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1)) {
                        var amount = s.params.lazyLoadingInPrevNextAmount;
                        var spv = slidesPerView;
                        var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
                        var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0);
                        // Next Slides
                        for (i = s.activeIndex + slidesPerView; i < maxIndex; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                        // Prev Slides
                        for (i = minIndex; i < s.activeIndex ; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                    }
                    else {
                        var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
                        if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());
        
                        var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
                        if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
                    }
                }
            },
            onTransitionStart: function () {
                if (s.params.lazyLoading) {
                    if (s.params.lazyLoadingOnTransitionStart || (!s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded)) {
                        s.lazy.load();
                    }
                }
            },
            onTransitionEnd: function () {
                if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
                    s.lazy.load();
                }
            }
        };
        

        /*=========================
          Scrollbar
          ===========================*/
        s.scrollbar = {
            isTouched: false,
            setDragPosition: function (e) {
                var sb = s.scrollbar;
                var x = 0, y = 0;
                var translate;
                var pointerPosition = s.isHorizontal() ?
                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX) :
                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY) ;
                var position = (pointerPosition) - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
                var positionMin = -s.minTranslate() * sb.moveDivider;
                var positionMax = -s.maxTranslate() * sb.moveDivider;
                if (position < positionMin) {
                    position = positionMin;
                }
                else if (position > positionMax) {
                    position = positionMax;
                }
                position = -position / sb.moveDivider;
                s.updateProgress(position);
                s.setWrapperTranslate(position, true);
            },
            dragStart: function (e) {
                var sb = s.scrollbar;
                sb.isTouched = true;
                e.preventDefault();
                e.stopPropagation();
        
                sb.setDragPosition(e);
                clearTimeout(sb.dragTimeout);
        
                sb.track.transition(0);
                if (s.params.scrollbarHide) {
                    sb.track.css('opacity', 1);
                }
                s.wrapper.transition(100);
                sb.drag.transition(100);
                s.emit('onScrollbarDragStart', s);
            },
            dragMove: function (e) {
                var sb = s.scrollbar;
                if (!sb.isTouched) return;
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
                sb.setDragPosition(e);
                s.wrapper.transition(0);
                sb.track.transition(0);
                sb.drag.transition(0);
                s.emit('onScrollbarDragMove', s);
            },
            dragEnd: function (e) {
                var sb = s.scrollbar;
                if (!sb.isTouched) return;
                sb.isTouched = false;
                if (s.params.scrollbarHide) {
                    clearTimeout(sb.dragTimeout);
                    sb.dragTimeout = setTimeout(function () {
                        sb.track.css('opacity', 0);
                        sb.track.transition(400);
                    }, 1000);
        
                }
                s.emit('onScrollbarDragEnd', s);
                if (s.params.scrollbarSnapOnRelease) {
                    s.slideReset();
                }
            },
            draggableEvents: (function () {
                if ((s.params.simulateTouch === false && !s.support.touch)) return s.touchEventsDesktop;
                else return s.touchEvents;
            })(),
            enableDraggable: function () {
                var sb = s.scrollbar;
                var target = s.support.touch ? sb.track : document;
                $(sb.track).on(sb.draggableEvents.start, sb.dragStart);
                $(target).on(sb.draggableEvents.move, sb.dragMove);
                $(target).on(sb.draggableEvents.end, sb.dragEnd);
            },
            disableDraggable: function () {
                var sb = s.scrollbar;
                var target = s.support.touch ? sb.track : document;
                $(sb.track).off(sb.draggableEvents.start, sb.dragStart);
                $(target).off(sb.draggableEvents.move, sb.dragMove);
                $(target).off(sb.draggableEvents.end, sb.dragEnd);
            },
            set: function () {
                if (!s.params.scrollbar) return;
                var sb = s.scrollbar;
                sb.track = $(s.params.scrollbar);
                if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
                    sb.track = s.container.find(s.params.scrollbar);
                }
                sb.drag = sb.track.find('.swiper-scrollbar-drag');
                if (sb.drag.length === 0) {
                    sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
                    sb.track.append(sb.drag);
                }
                sb.drag[0].style.width = '';
                sb.drag[0].style.height = '';
                sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
        
                sb.divider = s.size / s.virtualSize;
                sb.moveDivider = sb.divider * (sb.trackSize / s.size);
                sb.dragSize = sb.trackSize * sb.divider;
        
                if (s.isHorizontal()) {
                    sb.drag[0].style.width = sb.dragSize + 'px';
                }
                else {
                    sb.drag[0].style.height = sb.dragSize + 'px';
                }
        
                if (sb.divider >= 1) {
                    sb.track[0].style.display = 'none';
                }
                else {
                    sb.track[0].style.display = '';
                }
                if (s.params.scrollbarHide) {
                    sb.track[0].style.opacity = 0;
                }
            },
            setTranslate: function () {
                if (!s.params.scrollbar) return;
                var diff;
                var sb = s.scrollbar;
                var translate = s.translate || 0;
                var newPos;
        
                var newSize = sb.dragSize;
                newPos = (sb.trackSize - sb.dragSize) * s.progress;
                if (s.rtl && s.isHorizontal()) {
                    newPos = -newPos;
                    if (newPos > 0) {
                        newSize = sb.dragSize - newPos;
                        newPos = 0;
                    }
                    else if (-newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize + newPos;
                    }
                }
                else {
                    if (newPos < 0) {
                        newSize = sb.dragSize + newPos;
                        newPos = 0;
                    }
                    else if (newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize - newPos;
                    }
                }
                if (s.isHorizontal()) {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');
                    }
                    else {
                        sb.drag.transform('translateX(' + (newPos) + 'px)');
                    }
                    sb.drag[0].style.width = newSize + 'px';
                }
                else {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');
                    }
                    else {
                        sb.drag.transform('translateY(' + (newPos) + 'px)');
                    }
                    sb.drag[0].style.height = newSize + 'px';
                }
                if (s.params.scrollbarHide) {
                    clearTimeout(sb.timeout);
                    sb.track[0].style.opacity = 1;
                    sb.timeout = setTimeout(function () {
                        sb.track[0].style.opacity = 0;
                        sb.track.transition(400);
                    }, 1000);
                }
            },
            setTransition: function (duration) {
                if (!s.params.scrollbar) return;
                s.scrollbar.drag.transition(duration);
            }
        };
        

        /*=========================
          Controller
          ===========================*/
        s.controller = {
            LinearSpline: function (x, y) {
                var binarySearch = (function() {
                    var maxIndex, minIndex, guess;
                    return function(array, val) {
                        minIndex = -1;
                        maxIndex = array.length;
                        while (maxIndex - minIndex > 1)
                            if (array[guess = maxIndex + minIndex >> 1] <= val) {
                                minIndex = guess;
                            } else {
                                maxIndex = guess;
                            }
                        return maxIndex;
                    };
                })();
                this.x = x;
                this.y = y;
                this.lastIndex = x.length - 1;
                // Given an x value (x2), return the expected y2 value:
                // (x1,y1) is the known point before given value,
                // (x3,y3) is the known point after given value.
                var i1, i3;
                var l = this.x.length;
        
                this.interpolate = function (x2) {
                    if (!x2) return 0;
        
                    // Get the indexes of x1 and x3 (the array indexes before and after given x2):
                    i3 = binarySearch(this.x, x2);
                    i1 = i3 - 1;
        
                    // We have our indexes i1 & i3, so we can calculate already:
                    // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
                    return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
                };
            },
            //xxx: for now i will just save one spline function to to
            getInterpolateFunction: function(c){
                if(!s.controller.spline) s.controller.spline = s.params.loop ?
                    new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) :
                    new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
            },
            setTranslate: function (translate, byController) {
               var controlled = s.params.control;
               var multiplier, controlledTranslate;
               function setControlledTranslate(c) {
                    // this will create an Interpolate function based on the snapGrids
                    // x is the Grid of the scrolled scroller and y will be the controlled scroller
                    // it makes sense to create this only once and recall it for the interpolation
                    // the function does a lot of value caching for performance
                    translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
                    if (s.params.controlBy === 'slide') {
                        s.controller.getInterpolateFunction(c);
                        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                        // but it did not work out
                        controlledTranslate = -s.controller.spline.interpolate(-translate);
                    }
        
                    if(!controlledTranslate || s.params.controlBy === 'container'){
                        multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
                        controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
                    }
        
                    if (s.params.controlInverse) {
                        controlledTranslate = c.maxTranslate() - controlledTranslate;
                    }
                    c.updateProgress(controlledTranslate);
                    c.setWrapperTranslate(controlledTranslate, false, s);
                    c.updateActiveIndex();
               }
               if (Array.isArray(controlled)) {
                   for (var i = 0; i < controlled.length; i++) {
                       if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                           setControlledTranslate(controlled[i]);
                       }
                   }
               }
               else if (controlled instanceof Swiper && byController !== controlled) {
        
                   setControlledTranslate(controlled);
               }
            },
            setTransition: function (duration, byController) {
                var controlled = s.params.control;
                var i;
                function setControlledTransition(c) {
                    c.setWrapperTransition(duration, s);
                    if (duration !== 0) {
                        c.onTransitionStart();
                        c.wrapper.transitionEnd(function(){
                            if (!controlled) return;
                            if (c.params.loop && s.params.controlBy === 'slide') {
                                c.fixLoop();
                            }
                            c.onTransitionEnd();
        
                        });
                    }
                }
                if (Array.isArray(controlled)) {
                    for (i = 0; i < controlled.length; i++) {
                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                            setControlledTransition(controlled[i]);
                        }
                    }
                }
                else if (controlled instanceof Swiper && byController !== controlled) {
                    setControlledTransition(controlled);
                }
            }
        };
        

        /*=========================
          Hash Navigation
          ===========================*/
        s.hashnav = {
            onHashCange: function (e, a) {
                var newHash = document.location.hash.replace('#', '');
                var activeSlideHash = s.slides.eq(s.activeIndex).attr('data-hash');
                if (newHash !== activeSlideHash) {
                    s.slideTo(s.wrapper.children('.' + s.params.slideClass + '[data-hash="' + (newHash) + '"]').index());
                }
            },
            attachEvents: function (detach) {
                var action = detach ? 'off' : 'on';
                $(window)[action]('hashchange', s.hashnav.onHashCange);
            },
            setHash: function () {
                if (!s.hashnav.initialized || !s.params.hashnav) return;
                if (s.params.replaceState && window.history && window.history.replaceState) {
                    window.history.replaceState(null, null, ('#' + s.slides.eq(s.activeIndex).attr('data-hash') || ''));
                } else {
                    var slide = s.slides.eq(s.activeIndex);
                    var hash = slide.attr('data-hash') || slide.attr('data-history');
                    document.location.hash = hash || '';
                }
            },
            init: function () {
                if (!s.params.hashnav || s.params.history) return;
                s.hashnav.initialized = true;
                var hash = document.location.hash.replace('#', '');
                if (hash) {
                    var speed = 0;
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideHash = slide.attr('data-hash') || slide.attr('data-history');
                        if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
                            var index = slide.index();
                            s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
                        }
                    }
                }
                if (s.params.hashnavWatchState) s.hashnav.attachEvents();
            },
            destroy: function () {
                if (s.params.hashnavWatchState) s.hashnav.attachEvents(true);
            }
        };
        

        /*=========================
          History Api with fallback to Hashnav
          ===========================*/
        s.history = {
            init: function () {
                if (!s.params.history) return;
                if (!window.history || !window.history.pushState) {
                    s.params.history = false;
                    s.params.hashnav = true;
                    return;
                }
                s.history.initialized = true;
                this.paths = this.getPathValues();
                if (!this.paths.key && !this.paths.value) return;
                this.scrollToSlide(0, this.paths.value, s.params.runCallbacksOnInit);
                if (!s.params.replaceState) {
                    window.addEventListener('popstate', this.setHistoryPopState);
                }
            },
            setHistoryPopState: function() {
                s.history.paths = s.history.getPathValues();
                s.history.scrollToSlide(s.params.speed, s.history.paths.value, false);
            },
            getPathValues: function() {
                var pathArray = window.location.pathname.slice(1).split('/');
                var total = pathArray.length;
                var key = pathArray[total - 2];
                var value = pathArray[total - 1];
                return { key: key, value: value };
            },
            setHistory: function (key, index) {
                if (!s.history.initialized || !s.params.history) return;
                var slide = s.slides.eq(index);
                var value = this.slugify(slide.attr('data-history'));
                if (!window.location.pathname.includes(key)) {
                    value = key + '/' + value;
                }
                if (s.params.replaceState) {
                    window.history.replaceState(null, null, value);
                } else {
                    window.history.pushState(null, null, value);
                }
            },
            slugify: function(text) {
                return text.toString().toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w\-]+/g, '')
                    .replace(/\-\-+/g, '-')
                    .replace(/^-+/, '')
                    .replace(/-+$/, '');
            },
            scrollToSlide: function(speed, value, runCallbacks) {
                if (value) {
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideHistory = this.slugify(slide.attr('data-history'));
                        if (slideHistory === value && !slide.hasClass(s.params.slideDuplicateClass)) {
                            var index = slide.index();
                            s.slideTo(index, speed, runCallbacks);
                        }
                    }
                } else {
                    s.slideTo(0, speed, runCallbacks);
                }
            }
        };
        

        /*=========================
          Keyboard Control
          ===========================*/
        function handleKeyboard(e) {
            if (e.originalEvent) e = e.originalEvent; //jquery fix
            var kc = e.keyCode || e.charCode;
            // Directions locks
            if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
                return false;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return;
            }
            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return;
            }
            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
                var inView = false;
                //Check that swiper should be inside of visible area of window
                if (s.container.parents('.' + s.params.slideClass).length > 0 && s.container.parents('.' + s.params.slideActiveClass).length === 0) {
                    return;
                }
                var windowScroll = {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                };
                var windowWidth = window.innerWidth;
                var windowHeight = window.innerHeight;
                var swiperOffset = s.container.offset();
                if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
                var swiperCoord = [
                    [swiperOffset.left, swiperOffset.top],
                    [swiperOffset.left + s.width, swiperOffset.top],
                    [swiperOffset.left, swiperOffset.top + s.height],
                    [swiperOffset.left + s.width, swiperOffset.top + s.height]
                ];
                for (var i = 0; i < swiperCoord.length; i++) {
                    var point = swiperCoord[i];
                    if (
                        point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth &&
                        point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight
                    ) {
                        inView = true;
                    }
        
                }
                if (!inView) return;
            }
            if (s.isHorizontal()) {
                if (kc === 37 || kc === 39) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if ((kc === 39 && !s.rtl) || (kc === 37 && s.rtl)) s.slideNext();
                if ((kc === 37 && !s.rtl) || (kc === 39 && s.rtl)) s.slidePrev();
            }
            else {
                if (kc === 38 || kc === 40) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if (kc === 40) s.slideNext();
                if (kc === 38) s.slidePrev();
            }
            s.emit('onKeyPress', s, kc);
        }
        s.disableKeyboardControl = function () {
            s.params.keyboardControl = false;
            $(document).off('keydown', handleKeyboard);
        };
        s.enableKeyboardControl = function () {
            s.params.keyboardControl = true;
            $(document).on('keydown', handleKeyboard);
        };
        

        /*=========================
          Mousewheel Control
          ===========================*/
        s.mousewheel = {
            event: false,
            lastScrollTime: (new window.Date()).getTime()
        };
        function isEventSupported() {
            var eventName = 'onwheel';
            var isSupported = eventName in document;
        
            if (!isSupported) {
                var element = document.createElement('div');
                element.setAttribute(eventName, 'return;');
                isSupported = typeof element[eventName] === 'function';
            }
        
            if (!isSupported &&
                document.implementation &&
                document.implementation.hasFeature &&
                    // always returns true in newer browsers as per the standard.
                    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
                document.implementation.hasFeature('', '') !== true ) {
                // This is the only way to test support for the `wheel` event in IE9+.
                isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
            }
        
            return isSupported;
        }
        /**
         * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
         * complicated, thus this doc is long and (hopefully) detailed enough to answer
         * your questions.
         *
         * If you need to react to the mouse wheel in a predictable way, this code is
         * like your bestest friend. * hugs *
         *
         * As of today, there are 4 DOM event types you can listen to:
         *
         *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
         *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
         *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
         *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
         *
         * So what to do?  The is the best:
         *
         *   normalizeWheel.getEventType();
         *
         * In your event callback, use this code to get sane interpretation of the
         * deltas.  This code will return an object with properties:
         *
         *   spinX   -- normalized spin speed (use for zoom) - x plane
         *   spinY   -- " - y plane
         *   pixelX  -- normalized distance (to pixels) - x plane
         *   pixelY  -- " - y plane
         *
         * Wheel values are provided by the browser assuming you are using the wheel to
         * scroll a web page by a number of lines or pixels (or pages).  Values can vary
         * significantly on different platforms and browsers, forgetting that you can
         * scroll at different speeds.  Some devices (like trackpads) emit more events
         * at smaller increments with fine granularity, and some emit massive jumps with
         * linear speed or acceleration.
         *
         * This code does its best to normalize the deltas for you:
         *
         *   - spin is trying to normalize how far the wheel was spun (or trackpad
         *     dragged).  This is super useful for zoom support where you want to
         *     throw away the chunky scroll steps on the PC and make those equal to
         *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
         *     resolve a single slow step on a wheel to 1.
         *
         *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
         *     get the crazy differences between browsers, but at least it'll be in
         *     pixels!
         *
         *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
         *     should translate to positive value zooming IN, negative zooming OUT.
         *     This matches the newer 'wheel' event.
         *
         * Why are there spinX, spinY (or pixels)?
         *
         *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
         *     with a mouse.  It results in side-scrolling in the browser by default.
         *
         *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
         *
         *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
         *     probably is by browsers in conjunction with fancy 3D controllers .. but
         *     you know.
         *
         * Implementation info:
         *
         * Examples of 'wheel' event if you scroll slowly (down) by one step with an
         * average mouse:
         *
         *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
         *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
         *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
         *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
         *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
         *
         * On the trackpad:
         *
         *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
         *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
         *
         * On other/older browsers.. it's more complicated as there can be multiple and
         * also missing delta values.
         *
         * The 'wheel' event is more standard:
         *
         * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
         *
         * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
         * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
         * backward compatibility with older events.  Those other values help us
         * better normalize spin speed.  Example of what the browsers provide:
         *
         *                          | event.wheelDelta | event.detail
         *        ------------------+------------------+--------------
         *          Safari v5/OS X  |       -120       |       0
         *          Safari v5/Win7  |       -120       |       0
         *         Chrome v17/OS X  |       -120       |       0
         *         Chrome v17/Win7  |       -120       |       0
         *                IE9/Win7  |       -120       |   undefined
         *         Firefox v4/OS X  |     undefined    |       1
         *         Firefox v4/Win7  |     undefined    |       3
         *
         */
        function normalizeWheel( /*object*/ event ) /*object*/ {
            // Reasonable defaults
            var PIXEL_STEP = 10;
            var LINE_HEIGHT = 40;
            var PAGE_HEIGHT = 800;
        
            var sX = 0, sY = 0,       // spinX, spinY
                pX = 0, pY = 0;       // pixelX, pixelY
        
            // Legacy
            if( 'detail' in event ) {
                sY = event.detail;
            }
            if( 'wheelDelta' in event ) {
                sY = -event.wheelDelta / 120;
            }
            if( 'wheelDeltaY' in event ) {
                sY = -event.wheelDeltaY / 120;
            }
            if( 'wheelDeltaX' in event ) {
                sX = -event.wheelDeltaX / 120;
            }
        
            // side scrolling on FF with DOMMouseScroll
            if( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {
                sX = sY;
                sY = 0;
            }
        
            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;
        
            if( 'deltaY' in event ) {
                pY = event.deltaY;
            }
            if( 'deltaX' in event ) {
                pX = event.deltaX;
            }
        
            if( (pX || pY) && event.deltaMode ) {
                if( event.deltaMode === 1 ) {          // delta in LINE units
                    pX *= LINE_HEIGHT;
                    pY *= LINE_HEIGHT;
                } else {                             // delta in PAGE units
                    pX *= PAGE_HEIGHT;
                    pY *= PAGE_HEIGHT;
                }
            }
        
            // Fall-back if spin cannot be determined
            if( pX && !sX ) {
                sX = (pX < 1) ? -1 : 1;
            }
            if( pY && !sY ) {
                sY = (pY < 1) ? -1 : 1;
            }
        
            return {
                spinX: sX,
                spinY: sY,
                pixelX: pX,
                pixelY: pY
            };
        }
        if (s.params.mousewheelControl) {
            /**
             * The best combination if you prefer spinX + spinY normalization.  It favors
             * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
             * 'wheel' event, making spin speed determination impossible.
             */
            s.mousewheel.event = (navigator.userAgent.indexOf('firefox') > -1) ?
                'DOMMouseScroll' :
                isEventSupported() ?
                    'wheel' : 'mousewheel';
        }
        function handleMousewheel(e) {
            if (e.originalEvent) e = e.originalEvent; //jquery fix
            var delta = 0;
            var rtlFactor = s.rtl ? -1 : 1;
        
            var data = normalizeWheel( e );
        
            if (s.params.mousewheelForceToAxis) {
                if (s.isHorizontal()) {
                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = data.pixelX * rtlFactor;
                    else return;
                }
                else {
                    if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = data.pixelY;
                    else return;
                }
            }
            else {
                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? - data.pixelX * rtlFactor : - data.pixelY;
            }
        
            if (delta === 0) return;
        
            if (s.params.mousewheelInvert) delta = -delta;
        
            if (!s.params.freeMode) {
                if ((new window.Date()).getTime() - s.mousewheel.lastScrollTime > 60) {
                    if (delta < 0) {
                        if ((!s.isEnd || s.params.loop) && !s.animating) {
                            s.slideNext();
                            s.emit('onScroll', s, e);
                        }
                        else if (s.params.mousewheelReleaseOnEdges) return true;
                    }
                    else {
                        if ((!s.isBeginning || s.params.loop) && !s.animating) {
                            s.slidePrev();
                            s.emit('onScroll', s, e);
                        }
                        else if (s.params.mousewheelReleaseOnEdges) return true;
                    }
                }
                s.mousewheel.lastScrollTime = (new window.Date()).getTime();
        
            }
            else {
                //Freemode or scrollContainer:
                var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
                var wasBeginning = s.isBeginning,
                    wasEnd = s.isEnd;
        
                if (position >= s.minTranslate()) position = s.minTranslate();
                if (position <= s.maxTranslate()) position = s.maxTranslate();
        
                s.setWrapperTransition(0);
                s.setWrapperTranslate(position);
                s.updateProgress();
                s.updateActiveIndex();
        
                if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
                    s.updateClasses();
                }
        
                if (s.params.freeModeSticky) {
                    clearTimeout(s.mousewheel.timeout);
                    s.mousewheel.timeout = setTimeout(function () {
                        s.slideReset();
                    }, 300);
                }
                else {
                    if (s.params.lazyLoading && s.lazy) {
                        s.lazy.load();
                    }
                }
                // Emit event
                s.emit('onScroll', s, e);
        
                // Stop autoplay
                if (s.params.autoplay && s.params.autoplayDisableOnInteraction) s.stopAutoplay();
        
                // Return page scroll on edge positions
                if (position === 0 || position === s.maxTranslate()) return;
            }
        
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            return false;
        }
        s.disableMousewheelControl = function () {
            if (!s.mousewheel.event) return false;
            var target = s.container;
            if (s.params.mousewheelEventsTarged !== 'container') {
                target = $(s.params.mousewheelEventsTarged);
            }
            target.off(s.mousewheel.event, handleMousewheel);
            s.params.mousewheelControl = false;
            return true;
        };
        
        s.enableMousewheelControl = function () {
            if (!s.mousewheel.event) return false;
            var target = s.container;
            if (s.params.mousewheelEventsTarged !== 'container') {
                target = $(s.params.mousewheelEventsTarged);
            }
            target.on(s.mousewheel.event, handleMousewheel);
            s.params.mousewheelControl = true;
            return true;
        };
        

        /*=========================
          Parallax
          ===========================*/
        function setParallaxTransform(el, progress) {
            el = $(el);
            var p, pX, pY;
            var rtlFactor = s.rtl ? -1 : 1;
        
            p = el.attr('data-swiper-parallax') || '0';
            pX = el.attr('data-swiper-parallax-x');
            pY = el.attr('data-swiper-parallax-y');
            if (pX || pY) {
                pX = pX || '0';
                pY = pY || '0';
            }
            else {
                if (s.isHorizontal()) {
                    pX = p;
                    pY = '0';
                }
                else {
                    pY = p;
                    pX = '0';
                }
            }
        
            if ((pX).indexOf('%') >= 0) {
                pX = parseInt(pX, 10) * progress * rtlFactor + '%';
            }
            else {
                pX = pX * progress * rtlFactor + 'px' ;
            }
            if ((pY).indexOf('%') >= 0) {
                pY = parseInt(pY, 10) * progress + '%';
            }
            else {
                pY = pY * progress + 'px' ;
            }
        
            el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
        }
        s.parallax = {
            setTranslate: function () {
                s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                    setParallaxTransform(this, s.progress);
        
                });
                s.slides.each(function () {
                    var slide = $(this);
                    slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
                        var progress = Math.min(Math.max(slide[0].progress, -1), 1);
                        setParallaxTransform(this, progress);
                    });
                });
            },
            setTransition: function (duration) {
                if (typeof duration === 'undefined') duration = s.params.speed;
                s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                    var el = $(this);
                    var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
                    if (duration === 0) parallaxDuration = 0;
                    el.transition(parallaxDuration);
                });
            }
        };
        

        /*=========================
          Zoom
          ===========================*/
        s.zoom = {
            // "Global" Props
            scale: 1,
            currentScale: 1,
            isScaling: false,
            gesture: {
                slide: undefined,
                slideWidth: undefined,
                slideHeight: undefined,
                image: undefined,
                imageWrap: undefined,
                zoomMax: s.params.zoomMax
            },
            image: {
                isTouched: undefined,
                isMoved: undefined,
                currentX: undefined,
                currentY: undefined,
                minX: undefined,
                minY: undefined,
                maxX: undefined,
                maxY: undefined,
                width: undefined,
                height: undefined,
                startX: undefined,
                startY: undefined,
                touchesStart: {},
                touchesCurrent: {}
            },
            velocity: {
                x: undefined,
                y: undefined,
                prevPositionX: undefined,
                prevPositionY: undefined,
                prevTime: undefined
            },
            // Calc Scale From Multi-touches
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var x1 = e.targetTouches[0].pageX,
                    y1 = e.targetTouches[0].pageY,
                    x2 = e.targetTouches[1].pageX,
                    y2 = e.targetTouches[1].pageY;
                var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                return distance;
            },
            // Events
            onGestureStart: function (e) {
                var z = s.zoom;
                if (!s.support.gestures) {
                    if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
                        return;
                    }
                    z.gesture.scaleStart = z.getDistanceBetweenTouches(e);
                }
                if (!z.gesture.slide || !z.gesture.slide.length) {
                    z.gesture.slide = $(this);
                    if (z.gesture.slide.length === 0) z.gesture.slide = s.slides.eq(s.activeIndex);
                    z.gesture.image = z.gesture.slide.find('img, svg, canvas');
                    z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
                    z.gesture.zoomMax = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax ;
                    if (z.gesture.imageWrap.length === 0) {
                        z.gesture.image = undefined;
                        return;
                    }
                }
                z.gesture.image.transition(0);
                z.isScaling = true;
            },
            onGestureChange: function (e) {
                var z = s.zoom;
                if (!s.support.gestures) {
                    if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
                        return;
                    }
                    z.gesture.scaleMove = z.getDistanceBetweenTouches(e);
                }
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                if (s.support.gestures) {
                    z.scale = e.scale * z.currentScale;
                }
                else {
                    z.scale = (z.gesture.scaleMove / z.gesture.scaleStart) * z.currentScale;
                }
                if (z.scale > z.gesture.zoomMax) {
                    z.scale = z.gesture.zoomMax - 1 + Math.pow((z.scale - z.gesture.zoomMax + 1), 0.5);
                }
                if (z.scale < s.params.zoomMin) {
                    z.scale =  s.params.zoomMin + 1 - Math.pow((s.params.zoomMin - z.scale + 1), 0.5);
                }
                z.gesture.image.transform('translate3d(0,0,0) scale(' + z.scale + ')');
            },
            onGestureEnd: function (e) {
                var z = s.zoom;
                if (!s.support.gestures) {
                    if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2) {
                        return;
                    }
                }
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                z.scale = Math.max(Math.min(z.scale, z.gesture.zoomMax), s.params.zoomMin);
                z.gesture.image.transition(s.params.speed).transform('translate3d(0,0,0) scale(' + z.scale + ')');
                z.currentScale = z.scale;
                z.isScaling = false;
                if (z.scale === 1) z.gesture.slide = undefined;
            },
            onTouchStart: function (s, e) {
                var z = s.zoom;
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                if (z.image.isTouched) return;
                if (s.device.os === 'android') e.preventDefault();
                z.image.isTouched = true;
                z.image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
                z.image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
            },
            onTouchMove: function (e) {
                var z = s.zoom;
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                s.allowClick = false;
                if (!z.image.isTouched || !z.gesture.slide) return;
        
                if (!z.image.isMoved) {
                    z.image.width = z.gesture.image[0].offsetWidth;
                    z.image.height = z.gesture.image[0].offsetHeight;
                    z.image.startX = s.getTranslate(z.gesture.imageWrap[0], 'x') || 0;
                    z.image.startY = s.getTranslate(z.gesture.imageWrap[0], 'y') || 0;
                    z.gesture.slideWidth = z.gesture.slide[0].offsetWidth;
                    z.gesture.slideHeight = z.gesture.slide[0].offsetHeight;
                    z.gesture.imageWrap.transition(0);
                    if (s.rtl) z.image.startX = -z.image.startX;
                    if (s.rtl) z.image.startY = -z.image.startY;
                }
                // Define if we need image drag
                var scaledWidth = z.image.width * z.scale;
                var scaledHeight = z.image.height * z.scale;
        
                if (scaledWidth < z.gesture.slideWidth && scaledHeight < z.gesture.slideHeight) return;
        
                z.image.minX = Math.min((z.gesture.slideWidth / 2 - scaledWidth / 2), 0);
                z.image.maxX = -z.image.minX;
                z.image.minY = Math.min((z.gesture.slideHeight / 2 - scaledHeight / 2), 0);
                z.image.maxY = -z.image.minY;
        
                z.image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                z.image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        
                if (!z.image.isMoved && !z.isScaling) {
                    if (s.isHorizontal() &&
                        (Math.floor(z.image.minX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x < z.image.touchesStart.x) ||
                        (Math.floor(z.image.maxX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x > z.image.touchesStart.x)
                        ) {
                        z.image.isTouched = false;
                        return;
                    }
                    else if (!s.isHorizontal() &&
                        (Math.floor(z.image.minY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y < z.image.touchesStart.y) ||
                        (Math.floor(z.image.maxY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y > z.image.touchesStart.y)
                        ) {
                        z.image.isTouched = false;
                        return;
                    }
                }
                e.preventDefault();
                e.stopPropagation();
        
                z.image.isMoved = true;
                z.image.currentX = z.image.touchesCurrent.x - z.image.touchesStart.x + z.image.startX;
                z.image.currentY = z.image.touchesCurrent.y - z.image.touchesStart.y + z.image.startY;
        
                if (z.image.currentX < z.image.minX) {
                    z.image.currentX =  z.image.minX + 1 - Math.pow((z.image.minX - z.image.currentX + 1), 0.8);
                }
                if (z.image.currentX > z.image.maxX) {
                    z.image.currentX = z.image.maxX - 1 + Math.pow((z.image.currentX - z.image.maxX + 1), 0.8);
                }
        
                if (z.image.currentY < z.image.minY) {
                    z.image.currentY =  z.image.minY + 1 - Math.pow((z.image.minY - z.image.currentY + 1), 0.8);
                }
                if (z.image.currentY > z.image.maxY) {
                    z.image.currentY = z.image.maxY - 1 + Math.pow((z.image.currentY - z.image.maxY + 1), 0.8);
                }
        
                //Velocity
                if (!z.velocity.prevPositionX) z.velocity.prevPositionX = z.image.touchesCurrent.x;
                if (!z.velocity.prevPositionY) z.velocity.prevPositionY = z.image.touchesCurrent.y;
                if (!z.velocity.prevTime) z.velocity.prevTime = Date.now();
                z.velocity.x = (z.image.touchesCurrent.x - z.velocity.prevPositionX) / (Date.now() - z.velocity.prevTime) / 2;
                z.velocity.y = (z.image.touchesCurrent.y - z.velocity.prevPositionY) / (Date.now() - z.velocity.prevTime) / 2;
                if (Math.abs(z.image.touchesCurrent.x - z.velocity.prevPositionX) < 2) z.velocity.x = 0;
                if (Math.abs(z.image.touchesCurrent.y - z.velocity.prevPositionY) < 2) z.velocity.y = 0;
                z.velocity.prevPositionX = z.image.touchesCurrent.x;
                z.velocity.prevPositionY = z.image.touchesCurrent.y;
                z.velocity.prevTime = Date.now();
        
                z.gesture.imageWrap.transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
            },
            onTouchEnd: function (s, e) {
                var z = s.zoom;
                if (!z.gesture.image || z.gesture.image.length === 0) return;
                if (!z.image.isTouched || !z.image.isMoved) {
                    z.image.isTouched = false;
                    z.image.isMoved = false;
                    return;
                }
                z.image.isTouched = false;
                z.image.isMoved = false;
                var momentumDurationX = 300;
                var momentumDurationY = 300;
                var momentumDistanceX = z.velocity.x * momentumDurationX;
                var newPositionX = z.image.currentX + momentumDistanceX;
                var momentumDistanceY = z.velocity.y * momentumDurationY;
                var newPositionY = z.image.currentY + momentumDistanceY;
        
                //Fix duration
                if (z.velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - z.image.currentX) / z.velocity.x);
                if (z.velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - z.image.currentY) / z.velocity.y);
                var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        
                z.image.currentX = newPositionX;
                z.image.currentY = newPositionY;
        
                // Define if we need image drag
                var scaledWidth = z.image.width * z.scale;
                var scaledHeight = z.image.height * z.scale;
                z.image.minX = Math.min((z.gesture.slideWidth / 2 - scaledWidth / 2), 0);
                z.image.maxX = -z.image.minX;
                z.image.minY = Math.min((z.gesture.slideHeight / 2 - scaledHeight / 2), 0);
                z.image.maxY = -z.image.minY;
                z.image.currentX = Math.max(Math.min(z.image.currentX, z.image.maxX), z.image.minX);
                z.image.currentY = Math.max(Math.min(z.image.currentY, z.image.maxY), z.image.minY);
        
                z.gesture.imageWrap.transition(momentumDuration).transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
            },
            onTransitionEnd: function (s) {
                var z = s.zoom;
                if (z.gesture.slide && s.previousIndex !== s.activeIndex) {
                    z.gesture.image.transform('translate3d(0,0,0) scale(1)');
                    z.gesture.imageWrap.transform('translate3d(0,0,0)');
                    z.gesture.slide = z.gesture.image = z.gesture.imageWrap = undefined;
                    z.scale = z.currentScale = 1;
                }
            },
            // Toggle Zoom
            toggleZoom: function (s, e) {
                var z = s.zoom;
                if (!z.gesture.slide) {
                    z.gesture.slide = s.clickedSlide ? $(s.clickedSlide) : s.slides.eq(s.activeIndex);
                    z.gesture.image = z.gesture.slide.find('img, svg, canvas');
                    z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
                }
                if (!z.gesture.image || z.gesture.image.length === 0) return;
        
                var touchX, touchY, offsetX, offsetY, diffX, diffY, translateX, translateY, imageWidth, imageHeight, scaledWidth, scaledHeight, translateMinX, translateMinY, translateMaxX, translateMaxY, slideWidth, slideHeight;
        
                if (typeof z.image.touchesStart.x === 'undefined' && e) {
                    touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                    touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
                }
                else {
                    touchX = z.image.touchesStart.x;
                    touchY = z.image.touchesStart.y;
                }
        
                if (z.scale && z.scale !== 1) {
                    // Zoom Out
                    z.scale = z.currentScale = 1;
                    z.gesture.imageWrap.transition(300).transform('translate3d(0,0,0)');
                    z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(1)');
                    z.gesture.slide = undefined;
                }
                else {
                    // Zoom In
                    z.scale = z.currentScale = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax;
                    if (e) {
                        slideWidth = z.gesture.slide[0].offsetWidth;
                        slideHeight = z.gesture.slide[0].offsetHeight;
                        offsetX = z.gesture.slide.offset().left;
                        offsetY = z.gesture.slide.offset().top;
                        diffX = offsetX + slideWidth/2 - touchX;
                        diffY = offsetY + slideHeight/2 - touchY;
        
                        imageWidth = z.gesture.image[0].offsetWidth;
                        imageHeight = z.gesture.image[0].offsetHeight;
                        scaledWidth = imageWidth * z.scale;
                        scaledHeight = imageHeight * z.scale;
        
                        translateMinX = Math.min((slideWidth / 2 - scaledWidth / 2), 0);
                        translateMinY = Math.min((slideHeight / 2 - scaledHeight / 2), 0);
                        translateMaxX = -translateMinX;
                        translateMaxY = -translateMinY;
        
                        translateX = diffX * z.scale;
                        translateY = diffY * z.scale;
        
                        if (translateX < translateMinX) {
                            translateX =  translateMinX;
                        }
                        if (translateX > translateMaxX) {
                            translateX = translateMaxX;
                        }
        
                        if (translateY < translateMinY) {
                            translateY =  translateMinY;
                        }
                        if (translateY > translateMaxY) {
                            translateY = translateMaxY;
                        }
                    }
                    else {
                        translateX = 0;
                        translateY = 0;
                    }
                    z.gesture.imageWrap.transition(300).transform('translate3d(' + translateX + 'px, ' + translateY + 'px,0)');
                    z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(' + z.scale + ')');
                }
            },
            // Attach/Detach Events
            attachEvents: function (detach) {
                var action = detach ? 'off' : 'on';
        
                if (s.params.zoom) {
                    var target = s.slides;
                    var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? {passive: true, capture: false} : false;
                    // Scale image
                    if (s.support.gestures) {
                        s.slides[action]('gesturestart', s.zoom.onGestureStart, passiveListener);
                        s.slides[action]('gesturechange', s.zoom.onGestureChange, passiveListener);
                        s.slides[action]('gestureend', s.zoom.onGestureEnd, passiveListener);
                    }
                    else if (s.touchEvents.start === 'touchstart') {
                        s.slides[action](s.touchEvents.start, s.zoom.onGestureStart, passiveListener);
                        s.slides[action](s.touchEvents.move, s.zoom.onGestureChange, passiveListener);
                        s.slides[action](s.touchEvents.end, s.zoom.onGestureEnd, passiveListener);
                    }
        
                    // Move image
                    s[action]('touchStart', s.zoom.onTouchStart);
                    s.slides.each(function (index, slide){
                        if ($(slide).find('.' + s.params.zoomContainerClass).length > 0) {
                            $(slide)[action](s.touchEvents.move, s.zoom.onTouchMove);
                        }
                    });
                    s[action]('touchEnd', s.zoom.onTouchEnd);
        
                    // Scale Out
                    s[action]('transitionEnd', s.zoom.onTransitionEnd);
                    if (s.params.zoomToggle) {
                        s.on('doubleTap', s.zoom.toggleZoom);
                    }
                }
            },
            init: function () {
                s.zoom.attachEvents();
            },
            destroy: function () {
                s.zoom.attachEvents(true);
            }
        };
        

        /*=========================
          Plugins API. Collect all and init all plugins
          ===========================*/
        s._plugins = [];
        for (var plugin in s.plugins) {
            var p = s.plugins[plugin](s, s.params[plugin]);
            if (p) s._plugins.push(p);
        }
        // Method to call all plugins event/method
        s.callPlugins = function (eventName) {
            for (var i = 0; i < s._plugins.length; i++) {
                if (eventName in s._plugins[i]) {
                    s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
        };
        

        /*=========================
          Events/Callbacks/Plugins Emitter
          ===========================*/
        function normalizeEventName (eventName) {
            if (eventName.indexOf('on') !== 0) {
                if (eventName[0] !== eventName[0].toUpperCase()) {
                    eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
                }
                else {
                    eventName = 'on' + eventName;
                }
            }
            return eventName;
        }
        s.emitterEventListeners = {
        
        };
        s.emit = function (eventName) {
            // Trigger callbacks
            if (s.params[eventName]) {
                s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }
            var i;
            // Trigger events
            if (s.emitterEventListeners[eventName]) {
                for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                    s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
            // Trigger plugins
            if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        };
        s.on = function (eventName, handler) {
            eventName = normalizeEventName(eventName);
            if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
            s.emitterEventListeners[eventName].push(handler);
            return s;
        };
        s.off = function (eventName, handler) {
            var i;
            eventName = normalizeEventName(eventName);
            if (typeof handler === 'undefined') {
                // Remove all handlers for such event
                s.emitterEventListeners[eventName] = [];
                return s;
            }
            if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;
            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                if(s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
            }
            return s;
        };
        s.once = function (eventName, handler) {
            eventName = normalizeEventName(eventName);
            var _handler = function () {
                handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                s.off(eventName, _handler);
            };
            s.on(eventName, _handler);
            return s;
        };
        

        // Accessibility tools
        s.a11y = {
            makeFocusable: function ($el) {
                $el.attr('tabIndex', '0');
                return $el;
            },
            addRole: function ($el, role) {
                $el.attr('role', role);
                return $el;
            },
        
            addLabel: function ($el, label) {
                $el.attr('aria-label', label);
                return $el;
            },
        
            disable: function ($el) {
                $el.attr('aria-disabled', true);
                return $el;
            },
        
            enable: function ($el) {
                $el.attr('aria-disabled', false);
                return $el;
            },
        
            onEnterKey: function (event) {
                if (event.keyCode !== 13) return;
                if ($(event.target).is(s.params.nextButton)) {
                    s.onClickNext(event);
                    if (s.isEnd) {
                        s.a11y.notify(s.params.lastSlideMessage);
                    }
                    else {
                        s.a11y.notify(s.params.nextSlideMessage);
                    }
                }
                else if ($(event.target).is(s.params.prevButton)) {
                    s.onClickPrev(event);
                    if (s.isBeginning) {
                        s.a11y.notify(s.params.firstSlideMessage);
                    }
                    else {
                        s.a11y.notify(s.params.prevSlideMessage);
                    }
                }
                if ($(event.target).is('.' + s.params.bulletClass)) {
                    $(event.target)[0].click();
                }
            },
        
            liveRegion: $('<span class="' + s.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
        
            notify: function (message) {
                var notification = s.a11y.liveRegion;
                if (notification.length === 0) return;
                notification.html('');
                notification.html(message);
            },
            init: function () {
                // Setup accessibility
                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                    s.a11y.makeFocusable(s.nextButton);
                    s.a11y.addRole(s.nextButton, 'button');
                    s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
                }
                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                    s.a11y.makeFocusable(s.prevButton);
                    s.a11y.addRole(s.prevButton, 'button');
                    s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
                }
        
                $(s.container).append(s.a11y.liveRegion);
            },
            initPagination: function () {
                if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
                    s.bullets.each(function () {
                        var bullet = $(this);
                        s.a11y.makeFocusable(bullet);
                        s.a11y.addRole(bullet, 'button');
                        s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
                    });
                }
            },
            destroy: function () {
                if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
            }
        };
        

        /*=========================
          Init/Destroy
          ===========================*/
        s.init = function () {
            if (s.params.loop) s.createLoop();
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
                if (s.params.scrollbarDraggable) {
                    s.scrollbar.enableDraggable();
                }
            }
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                if (!s.params.loop) s.updateProgress();
                s.effects[s.params.effect].setTranslate();
            }
            if (s.params.loop) {
                s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
            }
            else {
                s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
                if (s.params.initialSlide === 0) {
                    if (s.parallax && s.params.parallax) s.parallax.setTranslate();
                    if (s.lazy && s.params.lazyLoading) {
                        s.lazy.load();
                        s.lazy.initialImageLoaded = true;
                    }
                }
            }
            s.attachEvents();
            if (s.params.observer && s.support.observer) {
                s.initObservers();
            }
            if (s.params.preloadImages && !s.params.lazyLoading) {
                s.preloadImages();
            }
            if (s.params.zoom && s.zoom) {
                s.zoom.init();
            }
            if (s.params.autoplay) {
                s.startAutoplay();
            }
            if (s.params.keyboardControl) {
                if (s.enableKeyboardControl) s.enableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.enableMousewheelControl) s.enableMousewheelControl();
            }
            // Deprecated hashnavReplaceState changed to replaceState for use in hashnav and history
            if (s.params.hashnavReplaceState) {
                s.params.replaceState = s.params.hashnavReplaceState;
            }
            if (s.params.history) {
                if (s.history) s.history.init();
            }
            if (s.params.hashnav) {
                if (s.hashnav) s.hashnav.init();
            }
            if (s.params.a11y && s.a11y) s.a11y.init();
            s.emit('onInit', s);
        };
        
        // Cleanup dynamic styles
        s.cleanupStyles = function () {
            // Container
            s.container.removeClass(s.classNames.join(' ')).removeAttr('style');
        
            // Wrapper
            s.wrapper.removeAttr('style');
        
            // Slides
            if (s.slides && s.slides.length) {
                s.slides
                    .removeClass([
                      s.params.slideVisibleClass,
                      s.params.slideActiveClass,
                      s.params.slideNextClass,
                      s.params.slidePrevClass
                    ].join(' '))
                    .removeAttr('style')
                    .removeAttr('data-swiper-column')
                    .removeAttr('data-swiper-row');
            }
        
            // Pagination/Bullets
            if (s.paginationContainer && s.paginationContainer.length) {
                s.paginationContainer.removeClass(s.params.paginationHiddenClass);
            }
            if (s.bullets && s.bullets.length) {
                s.bullets.removeClass(s.params.bulletActiveClass);
            }
        
            // Buttons
            if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
            if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
        
            // Scrollbar
            if (s.params.scrollbar && s.scrollbar) {
                if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
                if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
            }
        };
        
        // Destroy
        s.destroy = function (deleteInstance, cleanupStyles) {
            // Detach evebts
            s.detachEvents();
            // Stop autoplay
            s.stopAutoplay();
            // Disable draggable
            if (s.params.scrollbar && s.scrollbar) {
                if (s.params.scrollbarDraggable) {
                    s.scrollbar.disableDraggable();
                }
            }
            // Destroy loop
            if (s.params.loop) {
                s.destroyLoop();
            }
            // Cleanup styles
            if (cleanupStyles) {
                s.cleanupStyles();
            }
            // Disconnect observer
            s.disconnectObservers();
        
            // Destroy zoom
            if (s.params.zoom && s.zoom) {
                s.zoom.destroy();
            }
            // Disable keyboard/mousewheel
            if (s.params.keyboardControl) {
                if (s.disableKeyboardControl) s.disableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.disableMousewheelControl) s.disableMousewheelControl();
            }
            // Disable a11y
            if (s.params.a11y && s.a11y) s.a11y.destroy();
            // Delete history popstate
            if (s.params.history && !s.params.replaceState) {
                window.removeEventListener('popstate', s.history.setHistoryPopState);
            }
            if (s.params.hashnav && s.hashnav)  {
                s.hashnav.destroy();
            }
            // Destroy callback
            s.emit('onDestroy');
            // Delete instance
            if (deleteInstance !== false) s = null;
        };
        
        s.init();
        

    
        // Return swiper instance
        return s;
    };
    

    /*==================================================
        Prototype
    ====================================================*/
    Swiper.prototype = {
        isSafari: (function () {
            var ua = window.navigator.userAgent.toLowerCase();
            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function (arr) {
            return Object.prototype.toString.apply(arr) === '[object Array]';
        },
        /*==================================================
        Browser
        ====================================================*/
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1),
            lteIE9: (function() {
                // create temporary DIV
                var div = document.createElement('div');
                // add content to tmp DIV which is wrapped into the IE HTML conditional statement
                div.innerHTML = '<!--[if lte IE 9]><i></i><![endif]-->';
                // return true / false value based on what will browser render
                return div.getElementsByTagName('i').length === 1;
            })()
        },
        /*==================================================
        Devices
        ====================================================*/
        device: (function () {
            var ua = window.navigator.userAgent;
            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: ipad || iphone || ipod,
                android: android
            };
        })(),
        /*==================================================
        Feature Detection
        ====================================================*/
        support: {
            touch : (window.Modernizr && Modernizr.touch === true) || (function () {
                return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
            })(),
    
            transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
                var div = document.createElement('div').style;
                return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
            })(),
    
            flexbox: (function () {
                var div = document.createElement('div').style;
                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
                for (var i = 0; i < styles.length; i++) {
                    if (styles[i] in div) return true;
                }
            })(),
    
            observer: (function () {
                return ('MutationObserver' in window || 'WebkitMutationObserver' in window);
            })(),
    
            passiveListener: (function () {
                var supportsPassive = false;
                try {
                    var opts = Object.defineProperty({}, 'passive', {
                        get: function() {
                            supportsPassive = true;
                        }
                    });
                    window.addEventListener('testPassiveListener', null, opts);
                } catch (e) {}
                return supportsPassive;
            })(),
    
            gestures: (function () {
                return 'ongesturestart' in window;
            })()
        },
        /*==================================================
        Plugins
        ====================================================*/
        plugins: {}
    };
    

    /*===========================
    Dom7 Library
    ===========================*/
    var Dom7 = (function () {
        var Dom7 = function (arr) {
            var _this = this, i = 0;
            // Create array-like object
            for (i = 0; i < arr.length; i++) {
                _this[i] = arr[i];
            }
            _this.length = arr.length;
            // Return collection with methods
            return this;
        };
        var $ = function (selector, context) {
            var arr = [], i = 0;
            if (selector && !context) {
                if (selector instanceof Dom7) {
                    return selector;
                }
            }
            if (selector) {
                // String
                if (typeof selector === 'string') {
                    var els, tempParent, html = selector.trim();
                    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                        var toCreate = 'div';
                        if (html.indexOf('<li') === 0) toCreate = 'ul';
                        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
                        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
                        if (html.indexOf('<tbody') === 0) toCreate = 'table';
                        if (html.indexOf('<option') === 0) toCreate = 'select';
                        tempParent = document.createElement(toCreate);
                        tempParent.innerHTML = selector;
                        for (i = 0; i < tempParent.childNodes.length; i++) {
                            arr.push(tempParent.childNodes[i]);
                        }
                    }
                    else {
                        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
                            // Pure ID selector
                            els = [document.getElementById(selector.split('#')[1])];
                        }
                        else {
                            // Other selectors
                            els = (context || document).querySelectorAll(selector);
                        }
                        for (i = 0; i < els.length; i++) {
                            if (els[i]) arr.push(els[i]);
                        }
                    }
                }
                // Node/element
                else if (selector.nodeType || selector === window || selector === document) {
                    arr.push(selector);
                }
                //Array of elements or instance of Dom
                else if (selector.length > 0 && selector[0].nodeType) {
                    for (i = 0; i < selector.length; i++) {
                        arr.push(selector[i]);
                    }
                }
            }
            return new Dom7(arr);
        };
        Dom7.prototype = {
            // Classes and attriutes
            addClass: function (className) {
                if (typeof className === 'undefined') {
                    return this;
                }
                var classes = className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        this[j].classList.add(classes[i]);
                    }
                }
                return this;
            },
            removeClass: function (className) {
                var classes = className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        this[j].classList.remove(classes[i]);
                    }
                }
                return this;
            },
            hasClass: function (className) {
                if (!this[0]) return false;
                else return this[0].classList.contains(className);
            },
            toggleClass: function (className) {
                var classes = className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        this[j].classList.toggle(classes[i]);
                    }
                }
                return this;
            },
            attr: function (attrs, value) {
                if (arguments.length === 1 && typeof attrs === 'string') {
                    // Get attr
                    if (this[0]) return this[0].getAttribute(attrs);
                    else return undefined;
                }
                else {
                    // Set attrs
                    for (var i = 0; i < this.length; i++) {
                        if (arguments.length === 2) {
                            // String
                            this[i].setAttribute(attrs, value);
                        }
                        else {
                            // Object
                            for (var attrName in attrs) {
                                this[i][attrName] = attrs[attrName];
                                this[i].setAttribute(attrName, attrs[attrName]);
                            }
                        }
                    }
                    return this;
                }
            },
            removeAttr: function (attr) {
                for (var i = 0; i < this.length; i++) {
                    this[i].removeAttribute(attr);
                }
                return this;
            },
            data: function (key, value) {
                if (typeof value === 'undefined') {
                    // Get value
                    if (this[0]) {
                        var dataKey = this[0].getAttribute('data-' + key);
                        if (dataKey) return dataKey;
                        else if (this[0].dom7ElementDataStorage && (key in this[0].dom7ElementDataStorage)) return this[0].dom7ElementDataStorage[key];
                        else return undefined;
                    }
                    else return undefined;
                }
                else {
                    // Set value
                    for (var i = 0; i < this.length; i++) {
                        var el = this[i];
                        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
                        el.dom7ElementDataStorage[key] = value;
                    }
                    return this;
                }
            },
            // Transforms
            transform : function (transform) {
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
                }
                return this;
            },
            transition: function (duration) {
                if (typeof duration !== 'string') {
                    duration = duration + 'ms';
                }
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                }
                return this;
            },
            //Events
            on: function (eventName, targetSelector, listener, capture) {
                function handleLiveEvent(e) {
                    var target = e.target;
                    if ($(target).is(targetSelector)) listener.call(target, e);
                    else {
                        var parents = $(target).parents();
                        for (var k = 0; k < parents.length; k++) {
                            if ($(parents[k]).is(targetSelector)) listener.call(parents[k], e);
                        }
                    }
                }
                var events = eventName.split(' ');
                var i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof targetSelector === 'function' || targetSelector === false) {
                        // Usual events
                        if (typeof targetSelector === 'function') {
                            listener = arguments[1];
                            capture = arguments[2] || false;
                        }
                        for (j = 0; j < events.length; j++) {
                            this[i].addEventListener(events[j], listener, capture);
                        }
                    }
                    else {
                        //Live events
                        for (j = 0; j < events.length; j++) {
                            if (!this[i].dom7LiveListeners) this[i].dom7LiveListeners = [];
                            this[i].dom7LiveListeners.push({listener: listener, liveListener: handleLiveEvent});
                            this[i].addEventListener(events[j], handleLiveEvent, capture);
                        }
                    }
                }
    
                return this;
            },
            off: function (eventName, targetSelector, listener, capture) {
                var events = eventName.split(' ');
                for (var i = 0; i < events.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        if (typeof targetSelector === 'function' || targetSelector === false) {
                            // Usual events
                            if (typeof targetSelector === 'function') {
                                listener = arguments[1];
                                capture = arguments[2] || false;
                            }
                            this[j].removeEventListener(events[i], listener, capture);
                        }
                        else {
                            // Live event
                            if (this[j].dom7LiveListeners) {
                                for (var k = 0; k < this[j].dom7LiveListeners.length; k++) {
                                    if (this[j].dom7LiveListeners[k].listener === listener) {
                                        this[j].removeEventListener(events[i], this[j].dom7LiveListeners[k].liveListener, capture);
                                    }
                                }
                            }
                        }
                    }
                }
                return this;
            },
            once: function (eventName, targetSelector, listener, capture) {
                var dom = this;
                if (typeof targetSelector === 'function') {
                    targetSelector = false;
                    listener = arguments[1];
                    capture = arguments[2];
                }
                function proxy(e) {
                    listener(e);
                    dom.off(eventName, targetSelector, proxy, capture);
                }
                dom.on(eventName, targetSelector, proxy, capture);
            },
            trigger: function (eventName, eventData) {
                for (var i = 0; i < this.length; i++) {
                    var evt;
                    try {
                        evt = new window.CustomEvent(eventName, {detail: eventData, bubbles: true, cancelable: true});
                    }
                    catch (e) {
                        evt = document.createEvent('Event');
                        evt.initEvent(eventName, true, true);
                        evt.detail = eventData;
                    }
                    this[i].dispatchEvent(evt);
                }
                return this;
            },
            transitionEnd: function (callback) {
                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                    i, j, dom = this;
                function fireCallBack(e) {
                    /*jshint validthis:true */
                    if (e.target !== this) return;
                    callback.call(this, e);
                    for (i = 0; i < events.length; i++) {
                        dom.off(events[i], fireCallBack);
                    }
                }
                if (callback) {
                    for (i = 0; i < events.length; i++) {
                        dom.on(events[i], fireCallBack);
                    }
                }
                return this;
            },
            // Sizing/Styles
            width: function () {
                if (this[0] === window) {
                    return window.innerWidth;
                }
                else {
                    if (this.length > 0) {
                        return parseFloat(this.css('width'));
                    }
                    else {
                        return null;
                    }
                }
            },
            outerWidth: function (includeMargins) {
                if (this.length > 0) {
                    if (includeMargins)
                        return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
                    else
                        return this[0].offsetWidth;
                }
                else return null;
            },
            height: function () {
                if (this[0] === window) {
                    return window.innerHeight;
                }
                else {
                    if (this.length > 0) {
                        return parseFloat(this.css('height'));
                    }
                    else {
                        return null;
                    }
                }
            },
            outerHeight: function (includeMargins) {
                if (this.length > 0) {
                    if (includeMargins)
                        return this[0].offsetHeight + parseFloat(this.css('margin-top')) + parseFloat(this.css('margin-bottom'));
                    else
                        return this[0].offsetHeight;
                }
                else return null;
            },
            offset: function () {
                if (this.length > 0) {
                    var el = this[0];
                    var box = el.getBoundingClientRect();
                    var body = document.body;
                    var clientTop  = el.clientTop  || body.clientTop  || 0;
                    var clientLeft = el.clientLeft || body.clientLeft || 0;
                    var scrollTop  = window.pageYOffset || el.scrollTop;
                    var scrollLeft = window.pageXOffset || el.scrollLeft;
                    return {
                        top: box.top  + scrollTop  - clientTop,
                        left: box.left + scrollLeft - clientLeft
                    };
                }
                else {
                    return null;
                }
            },
            css: function (props, value) {
                var i;
                if (arguments.length === 1) {
                    if (typeof props === 'string') {
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
                    }
                    else {
                        for (i = 0; i < this.length; i++) {
                            for (var prop in props) {
                                this[i].style[prop] = props[prop];
                            }
                        }
                        return this;
                    }
                }
                if (arguments.length === 2 && typeof props === 'string') {
                    for (i = 0; i < this.length; i++) {
                        this[i].style[props] = value;
                    }
                    return this;
                }
                return this;
            },
    
            //Dom manipulation
            each: function (callback) {
                for (var i = 0; i < this.length; i++) {
                    callback.call(this[i], i, this[i]);
                }
                return this;
            },
            html: function (html) {
                if (typeof html === 'undefined') {
                    return this[0] ? this[0].innerHTML : undefined;
                }
                else {
                    for (var i = 0; i < this.length; i++) {
                        this[i].innerHTML = html;
                    }
                    return this;
                }
            },
            text: function (text) {
                if (typeof text === 'undefined') {
                    if (this[0]) {
                        return this[0].textContent.trim();
                    }
                    else return null;
                }
                else {
                    for (var i = 0; i < this.length; i++) {
                        this[i].textContent = text;
                    }
                    return this;
                }
            },
            is: function (selector) {
                if (!this[0]) return false;
                var compareWith, i;
                if (typeof selector === 'string') {
                    var el = this[0];
                    if (el === document) return selector === document;
                    if (el === window) return selector === window;
    
                    if (el.matches) return el.matches(selector);
                    else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                    else if (el.mozMatchesSelector) return el.mozMatchesSelector(selector);
                    else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                    else {
                        compareWith = $(selector);
                        for (i = 0; i < compareWith.length; i++) {
                            if (compareWith[i] === this[0]) return true;
                        }
                        return false;
                    }
                }
                else if (selector === document) return this[0] === document;
                else if (selector === window) return this[0] === window;
                else {
                    if (selector.nodeType || selector instanceof Dom7) {
                        compareWith = selector.nodeType ? [selector] : selector;
                        for (i = 0; i < compareWith.length; i++) {
                            if (compareWith[i] === this[0]) return true;
                        }
                        return false;
                    }
                    return false;
                }
    
            },
            index: function () {
                if (this[0]) {
                    var child = this[0];
                    var i = 0;
                    while ((child = child.previousSibling) !== null) {
                        if (child.nodeType === 1) i++;
                    }
                    return i;
                }
                else return undefined;
            },
            eq: function (index) {
                if (typeof index === 'undefined') return this;
                var length = this.length;
                var returnIndex;
                if (index > length - 1) {
                    return new Dom7([]);
                }
                if (index < 0) {
                    returnIndex = length + index;
                    if (returnIndex < 0) return new Dom7([]);
                    else return new Dom7([this[returnIndex]]);
                }
                return new Dom7([this[index]]);
            },
            append: function (newChild) {
                var i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof newChild === 'string') {
                        var tempDiv = document.createElement('div');
                        tempDiv.innerHTML = newChild;
                        while (tempDiv.firstChild) {
                            this[i].appendChild(tempDiv.firstChild);
                        }
                    }
                    else if (newChild instanceof Dom7) {
                        for (j = 0; j < newChild.length; j++) {
                            this[i].appendChild(newChild[j]);
                        }
                    }
                    else {
                        this[i].appendChild(newChild);
                    }
                }
                return this;
            },
            prepend: function (newChild) {
                var i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof newChild === 'string') {
                        var tempDiv = document.createElement('div');
                        tempDiv.innerHTML = newChild;
                        for (j = tempDiv.childNodes.length - 1; j >= 0; j--) {
                            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                        }
                        // this[i].insertAdjacentHTML('afterbegin', newChild);
                    }
                    else if (newChild instanceof Dom7) {
                        for (j = 0; j < newChild.length; j++) {
                            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                        }
                    }
                    else {
                        this[i].insertBefore(newChild, this[i].childNodes[0]);
                    }
                }
                return this;
            },
            insertBefore: function (selector) {
                var before = $(selector);
                for (var i = 0; i < this.length; i++) {
                    if (before.length === 1) {
                        before[0].parentNode.insertBefore(this[i], before[0]);
                    }
                    else if (before.length > 1) {
                        for (var j = 0; j < before.length; j++) {
                            before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
                        }
                    }
                }
            },
            insertAfter: function (selector) {
                var after = $(selector);
                for (var i = 0; i < this.length; i++) {
                    if (after.length === 1) {
                        after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
                    }
                    else if (after.length > 1) {
                        for (var j = 0; j < after.length; j++) {
                            after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
                        }
                    }
                }
            },
            next: function (selector) {
                if (this.length > 0) {
                    if (selector) {
                        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return new Dom7([this[0].nextElementSibling]);
                        else return new Dom7([]);
                    }
                    else {
                        if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
                        else return new Dom7([]);
                    }
                }
                else return new Dom7([]);
            },
            nextAll: function (selector) {
                var nextEls = [];
                var el = this[0];
                if (!el) return new Dom7([]);
                while (el.nextElementSibling) {
                    var next = el.nextElementSibling;
                    if (selector) {
                        if($(next).is(selector)) nextEls.push(next);
                    }
                    else nextEls.push(next);
                    el = next;
                }
                return new Dom7(nextEls);
            },
            prev: function (selector) {
                if (this.length > 0) {
                    if (selector) {
                        if (this[0].previousElementSibling && $(this[0].previousElementSibling).is(selector)) return new Dom7([this[0].previousElementSibling]);
                        else return new Dom7([]);
                    }
                    else {
                        if (this[0].previousElementSibling) return new Dom7([this[0].previousElementSibling]);
                        else return new Dom7([]);
                    }
                }
                else return new Dom7([]);
            },
            prevAll: function (selector) {
                var prevEls = [];
                var el = this[0];
                if (!el) return new Dom7([]);
                while (el.previousElementSibling) {
                    var prev = el.previousElementSibling;
                    if (selector) {
                        if($(prev).is(selector)) prevEls.push(prev);
                    }
                    else prevEls.push(prev);
                    el = prev;
                }
                return new Dom7(prevEls);
            },
            parent: function (selector) {
                var parents = [];
                for (var i = 0; i < this.length; i++) {
                    if (selector) {
                        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
                    }
                    else {
                        parents.push(this[i].parentNode);
                    }
                }
                return $($.unique(parents));
            },
            parents: function (selector) {
                var parents = [];
                for (var i = 0; i < this.length; i++) {
                    var parent = this[i].parentNode;
                    while (parent) {
                        if (selector) {
                            if ($(parent).is(selector)) parents.push(parent);
                        }
                        else {
                            parents.push(parent);
                        }
                        parent = parent.parentNode;
                    }
                }
                return $($.unique(parents));
            },
            find : function (selector) {
                var foundElements = [];
                for (var i = 0; i < this.length; i++) {
                    var found = this[i].querySelectorAll(selector);
                    for (var j = 0; j < found.length; j++) {
                        foundElements.push(found[j]);
                    }
                }
                return new Dom7(foundElements);
            },
            children: function (selector) {
                var children = [];
                for (var i = 0; i < this.length; i++) {
                    var childNodes = this[i].childNodes;
    
                    for (var j = 0; j < childNodes.length; j++) {
                        if (!selector) {
                            if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
                        }
                        else {
                            if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) children.push(childNodes[j]);
                        }
                    }
                }
                return new Dom7($.unique(children));
            },
            remove: function () {
                for (var i = 0; i < this.length; i++) {
                    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
                }
                return this;
            },
            add: function () {
                var dom = this;
                var i, j;
                for (i = 0; i < arguments.length; i++) {
                    var toAdd = $(arguments[i]);
                    for (j = 0; j < toAdd.length; j++) {
                        dom[dom.length] = toAdd[j];
                        dom.length++;
                    }
                }
                return dom;
            }
        };
        $.fn = Dom7.prototype;
        $.unique = function (arr) {
            var unique = [];
            for (var i = 0; i < arr.length; i++) {
                if (unique.indexOf(arr[i]) === -1) unique.push(arr[i]);
            }
            return unique;
        };
    
        return $;
    })();
    

    /*===========================
     Get Dom libraries
     ===========================*/
    var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];
    for (var i = 0; i < swiperDomPlugins.length; i++) {
    	if (window[swiperDomPlugins[i]]) {
    		addLibraryPlugin(window[swiperDomPlugins[i]]);
    	}
    }
    // Required DOM Plugins
    var domLib;
    if (typeof Dom7 === 'undefined') {
    	domLib = window.Dom7 || window.Zepto || window.jQuery;
    }
    else {
    	domLib = Dom7;
    }
    

    /*===========================
    Add .swiper plugin from Dom libraries
    ===========================*/
    function addLibraryPlugin(lib) {
        lib.fn.swiper = function (params) {
            var firstInstance;
            lib(this).each(function () {
                var s = new Swiper(this, params);
                if (!firstInstance) firstInstance = s;
            });
            return firstInstance;
        };
    }
    
    if (domLib) {
        if (!('transitionEnd' in domLib.fn)) {
            domLib.fn.transitionEnd = function (callback) {
                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                    i, j, dom = this;
                function fireCallBack(e) {
                    /*jshint validthis:true */
                    if (e.target !== this) return;
                    callback.call(this, e);
                    for (i = 0; i < events.length; i++) {
                        dom.off(events[i], fireCallBack);
                    }
                }
                if (callback) {
                    for (i = 0; i < events.length; i++) {
                        dom.on(events[i], fireCallBack);
                    }
                }
                return this;
            };
        }
        if (!('transform' in domLib.fn)) {
            domLib.fn.transform = function (transform) {
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
                }
                return this;
            };
        }
        if (!('transition' in domLib.fn)) {
            domLib.fn.transition = function (duration) {
                if (typeof duration !== 'string') {
                    duration = duration + 'ms';
                }
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                }
                return this;
            };
        }
        if (!('outerWidth' in domLib.fn)) {
            domLib.fn.outerWidth = function (includeMargins) {
                if (this.length > 0) {
                    if (includeMargins)
                        return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
                    else
                        return this[0].offsetWidth;
                }
                else return null;
            };
        }
    }
    

    window.Swiper = Swiper;
})();

/*===========================
Swiper AMD Export
===========================*/
if (true)
{
    module.exports = window.Swiper;
}
else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.Swiper;
    });
}

//# sourceMappingURL=maps/swiper.js.map


/***/ })

});
//# sourceMappingURL=1.chunk.js.map