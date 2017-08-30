import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import { Component, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';

import { SharedService } from '../../shared/services/shared.service';
import { EquipmentService } from '../services/equipment.service';

import tsConstants = require('../../shared/config/tsconstant');
import tsMessages  = require('../../shared/config/tsmessage');

import * as Materialize from "angular2-materialize";

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { LanguageService } from '../../shared/services/language.service';
import { LanguageInterface } from '../../shared/classes/language-interface';

import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    private _host = tsConstants.HOST;    
    private _accessToken;

    
    public galleryOptions: NgxGalleryOptions[];
    public galleryImages: NgxGalleryImage[];


    public isloading: boolean = true;

    public equipment: any  = {};
    public totalequipments = 0;
    public totalPrice:number = 0;

    public equipmentID     = '';
    public price:any;
    public quantity:any;
    public message;
    public amount: any;
    public equipments:number = 1;
    public equipmentChar: any;

    public heart: boolean = false;
    public heartO : boolean = true;
    public wishlist: any;
    public productID: any;

    public userID: any;
    public language: LanguageInterface = new LanguageInterface;
     
    constructor( 
        private _equipmentsService: EquipmentService,
        private _cd: ChangeDetectorRef,
        private _router: Router,
        private _activateRouter: ActivatedRoute,
        private _cookieService: CookieService,

        private _languageService: LanguageService,
        private _sharedService: SharedService  ) {

            this._languageService.language.subscribe(language => {
                this.language.setLabels(language);
            });
    }


    ngOnInit() {
       // this.getsingleequipment();
       this.getWishlist();

        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 3,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            
            {
                breakpoint: 320,
                width: '100%',
                height: '300px',
                imagePercent: 80,
                thumbnailsPercent: 80,
                thumbnailsMargin: 80,
                thumbnailMargin: 80
            },
            // max-width 400
            {
                breakpoint: 320,
                preview: true
            }

        ];
 
        this.galleryImages = [
            {
                small: '',
                medium: 'assets/img/no-image-available.jpg',
                big: '',
            }
        ];

        this.getAll();
        this.setGallery();

        let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();
    
    }

    getAll( ): void {
        this.equipmentID = this._activateRouter.snapshot.params['id'];
        
        console.log(this.equipmentID);

        this.isloading = true;
        this._equipmentsService.get( this.equipmentID ).subscribe( res => {
            this.isloading = false;
            if( res.success ) {
                this.equipment  = res.data;
                this.totalPrice = this.equipment.price;
                this.userID     = this._sharedService.getCurrentUserID();
                                
                /*if( this.userID == this.equipment.seller.id ){
                    this.isMyequipment = true;
                }*/
                this.setGallery();
                this._cd.markForCheck();
            } else {
                this._sharedService.checkAccessToken(res.error);
            }
        },
        err => {
            this._sharedService.checkAccessToken(err, false);
        });
    }
    addtocart(): void{
        this._sharedService.sendToTop();

        this.isloading    = true;
        this._accessToken = this._cookieService.get('accesstoken');

        if(!this._accessToken) {
            this._sharedService.showToast(this.language.getLabel('please_login_to_add_a_product_to_your_cart'), tsConstants.COLOR_DANGER);
            this._router.navigate(['/login']);
        } else {
        this.isloading = true;
        this._equipmentsService.postcart(this.equipmentID, this.equipment.price ,this.equipments).subscribe(res =>{
            this.isloading = false;
            
            if(res.success) {
                this._sharedService.showToast(this.language.getLabel('added_to_cart_successfully'), tsConstants.COLOR_SUCESS);
                // this._router.navigate(['/cart']);
            }else{
                this._sharedService.checkAccessToken(res.err);
            }
        },
        err => {
               this._sharedService.checkAccessToken(err, false);
        });
    }
}
    
    setGallery( ) {
        let images = this.equipment.images;
        this.galleryImages = [];       

        console.log(this.equipment);

        if( !images  ) {
            this.galleryImages = [
                {
                    small: 'assets/img/no-image-available.jpg',
                    medium: 'assets/img/no-image-available.jpg',
                    big: 'assets/img/no-image-available.jpg',
                }
            ];
        }else{

            if( images.length == 0 ){
                this.galleryImages = [
                    {
                        small: 'assets/img/no-image-available.jpg',
                        medium: 'assets/img/no-image-available.jpg',
                        big: 'assets/img/no-image-available.jpg',
                    }
                ];
            } else{            
                let baseUrl = this._host+'/images/equipments/';

                for (let i = 0; i < images.length; i++) {

                    this.galleryImages.push( {
                                small: baseUrl+images[i],
                                medium: baseUrl+images[i],
                                big: baseUrl+images[i],
                            });                   
                }
            }    
        }        
    }

    setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }

    booknow(): void {
        
        this.isloading = true;
        this._accessToken   = this._cookieService.get('accesstoken');
        if(!this._accessToken) {
            this.isloading = false;
            this._sharedService.showToast(this.language.getLabel('please_login_for_book_now'), tsConstants.COLOR_DANGER);            
            this._router.navigate(['/login']);
        }else{
            this.isloading = false;
            this._sharedService.showToast(this.language.getLabel('in_progress'), tsConstants.COLOR_SUCESS);
        }
    }

    saveWishlist( equipmentID ){
        this.isloading = true;
        this._accessToken   = this._cookieService.get('accesstoken');
        if(!this._accessToken) {
            
            this._sharedService.showToast(this.language.getLabel('please_login_to_add_wishlist'), tsConstants.COLOR_DANGER);            
            this._router.navigate(['/login']);
        } else {
            if(this.heart == true){
                console.log("heart");
                this._sharedService.deleteWishlist("product_id").subscribe( res => {
                    this.isloading = false;
                    console.log("res",res);
                    this._cd.markForCheck();
                }, err => {
                    console.log("err",err);
                    this._cd.markForCheck();
                })
            } else {
                this._sharedService.addWishlist(equipmentID, "equipment").subscribe( res => {
                    if(res.success = true){
                        this.isloading = false;
                        this.heart = true;
                        this.heartO = false; 
                        this._cd.markForCheck();
                    } else {
                        this.isloading = false;
                        this._sharedService.showToast(this.language.getLabel('error_adding_wishlist'), tsConstants.COLOR_DANGER);
                        this._cd.markForCheck();
                    }
                }, err => {
                    this._cd.markForCheck();
                })
            }
        }
    }

    getWishlist(){
        this._sharedService.userWishlist().subscribe( res => {
            console.log("res",res)
            if(res.success == true){    
                this.wishlist = res.data.data
                this.productID = this._activateRouter.snapshot.params['id'];
                for(var i=0; i<this.wishlist.length; i++){
                    if(this.wishlist[i].product_id == this.productID){
                        this.heart = true;
                        this.heartO = false; 
                    }
                }
                this._cd.markForCheck();
            } else {
                this._cd.markForCheck();
            }
        }, err => {
            console.log("err",err)
            this._cd.markForCheck();
        })
    }



}
