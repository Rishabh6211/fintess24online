import { Component, OnInit, ViewChild } from '@angular/core';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Subscription} from 'rxjs/Subscription';
import { SlickModule } from 'ngx-slick';
import { SwiperComponent, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { SharedService } from '../shared/services/shared.service';
import { LanguageService } from '../shared/services/language.service';

import { LanguageInterface } from '../shared/classes/language-interface';
import { HomeService } from './home.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
     providers: [HomeService]
  
})

export class HomeComponent implements OnInit {
    //public offers = '';
    public isloading: boolean   = false;
    public data:any;
    public offers ='offers';
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    public config: SwiperConfigInterface = {
        scrollbar: null,
         pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 4,
    centeredSlides: false,
    paginationClickable: true,
    spaceBetween: 30,


  };
	

	public language: LanguageInterface = new LanguageInterface;

    public origin; 
    public destination;
    public distance;
    public slideConfig;
    public slickModal = '';
     @ViewChild(SwiperComponent) swiperView: SwiperComponent;
	constructor(  
        private _sharedService: SharedService,
		private _languageService: LanguageService,
        private _homeService: HomeService
	) {}

	ngOnInit() {
        this._languageService.language.subscribe( language => {
            this.language.setLabels(language);
        });

        this.findoffers();
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
            // max-width 400
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
    }
        /*this.slides = [
            {img: "http://placehold.it/350x150/000000"},
            {img: "http://placehold.it/350x150/111111"},
            {img: "http://placehold.it/350x150/333333"},
            {img: "http://placehold.it/350x150/666666"}
        ];
        this.slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};*/
       // this.afterChange;
	

    findoffers(){
        console.log("in offers");
        this.isloading  = false;
        this._homeService.getOffers(this.offers).subscribe(res =>{
            if(res){
                this.isloading = true;
                console.log(res);
                console.log("res",res.data);

                this.data = res.data;
               // console.log("data",this.data[0].name);
                console.log("data",this.data)
            }
            else
            {
                console.log("err");
            }
        })
    }

    onIndexChange(index: number) {
    console.log('Swiper index: ' + index);
  }

}