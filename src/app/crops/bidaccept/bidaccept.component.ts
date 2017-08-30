import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import { Component, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';

import { SharedService } from '../../shared/services/shared.service';
import { CropsService } from '../services/crops.service';


import tsConstants = require('../../shared/config/tsconstant');
import tsMessages  = require('../../shared/config/tsmessage');

import * as Materialize from "angular2-materialize";
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

import { LanguageService } from '../../shared/services/language.service';
import { LanguageInterface } from '../../shared/classes/language-interface';

@Component({
  selector: 'app-bidaccept',
  templateUrl: './bidaccept.component.html',
  styleUrls: ['./bidaccept.component.css']
})
export class BidAcceptComponent implements OnInit {
	public isloading: boolean = false; 
    
    public myBids     = [];
    public totalCrops = 0;

    public bracketStart = '(';
    public bracketEnd   = ')';
    public language: LanguageInterface = new LanguageInterface;

    private _host = tsConstants.HOST;
    public response:any;
    private bid: object;
    public cropID: any;
    public bidID: any;
    public crop: any  = {};

    public galleryOptions: NgxGalleryOptions[];
    public galleryImages: NgxGalleryImage[];
    public bidStatus: boolean = false;

    public bidProcessStatus:string = 'Pending';
    //public partners = '';
	
    constructor( 
    		private _cropsService: CropsService,
    		private _cd: ChangeDetectorRef,
            private _router: Router,
            private _sharedService: SharedService,
            private _cookieService: CookieService,
            private _languageService: LanguageService,
            private _activateRouter: ActivatedRoute

    	) { 
            this._languageService.language.subscribe(language => {
                this.language.setLabels(language);
            }); 
         }

	ngOnInit() {
		this.getMyBids();
        //this.getAllLogistic();
                
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

        let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();
	}
  /*  getAllLogistic()
    {
        this.isloading = true;
        //this.bidID = this._activateRouter.snapshot.params['bidid'];
        this._cropsService.getAllLogistic().subscribe(res => {
            console.log(res);
            this.partners = res.data.partners;
            console.log(this.partners);
            this.isloading = false;
            this._cd.markForCheck(); 
        })
    }*/

	getMyBids( ): void {
        this.isloading = true;

        this.cropID = this._activateRouter.snapshot.params['id'];
        this.bidID = this._activateRouter.snapshot.params['bidid'];

        this._cropsService.get( this.cropID ).subscribe( res => {
        	this.isloading = false;
            if( res.success ){
                this.crop = res.data;
                this.myBids = res.data.bids;
                this.filterData();
                this.setGallery();
            }else {
                this._sharedService.checkAccessToken(res.error);
            }        	
            this._cd.markForCheck();            
        },
        err => {
            this.isloading = false;
            this._sharedService.checkAccessToken(err, false);
        });
    }

    filterData(  ) {
        let bidId =  this.bidID;
        
        for( var i = 0; i < this.myBids.length; i++  ) {
            
            if( this.myBids[i].id == bidId ) {
                this.bid = this.myBids[i];
                this.bidProcessStatus = this.myBids[i].status;
                if( this.myBids[i].status == 'Accepted'  ) {
                    this.bidStatus = true;
                }
            }
        }
    }

    setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }

    acceptBid(){
        this.isloading = true;
        this.bidID = this._activateRouter.snapshot.params['bidid'];
        this._cropsService.acceptBid( this.bidID ).subscribe( res => {
            this.isloading = false;
            
            if( res.success ){
                this.bidStatus = true;               
            }else {               
               this.bidStatus = false;            }  
        },
        err => {
            this.bidStatus = false;
            this.isloading = false;
            this._sharedService.checkAccessToken(err, false);
        })
    }

    setGallery( ) {
        let images = this.crop.images;
        this.galleryImages = [];       

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
                let baseUrl = this._host+'/images/crops/';

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

}
