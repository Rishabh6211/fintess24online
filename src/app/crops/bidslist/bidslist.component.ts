import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import { Component, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
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
  selector: 'app-bidslist',
  templateUrl: './bidslist.component.html',
  styleUrls: ['./bidslist.component.css']
})
export class BidslistComponent implements OnInit {
	public isloading: boolean = false;   

    public galleryOptions: NgxGalleryOptions[];
    public galleryImages: NgxGalleryImage[];
 
    
    public crop: any  = {};
    public bids     = [];
    public totalCrops = 0;

    public bracketStart = '(';
    public bracketEnd   = ')';


    private _host = tsConstants.HOST;
    public response:any;
    public cropID     = '';
    public highestBid: any;
    public myBidAmmount: any;
    public totalBids: number;

    public userID: any;
    public language: LanguageInterface = new LanguageInterface;
	
    constructor( 
    		private _cropsService: CropsService,
    		private _cd: ChangeDetectorRef,
            private _router: Router,
            private _sharedService: SharedService,
            private _cookieService: CookieService,
            private _activateRouter: ActivatedRoute,
            private _languageService: LanguageService ) {
                this._languageService.language.subscribe(language => {
                    this.language.setLabels(language);
                }); 
            }

	ngOnInit() {
         this.getsinglecrop();
		//this.getMyBids();
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
    getsinglecrop( ): void {
        this.cropID = this._activateRouter.snapshot.params['id'];
        this.isloading = true;
        this._cropsService.get( this.cropID ).subscribe( res => {
            this.isloading = false;
            if( res.success ) {
                this.crop = res.data;
                this.bids = res.data.bids;               

                this.totalBids = (this.bids) ? this.bids.length : 0;                
                this.userID = this._sharedService.getCurrentUserID()
                
                if( this.userID == this.crop.seller.id ){
                  
                }
                this.setGallery();
                this._cd.markForCheck();
            } else {
                this._sharedService.checkAccessToken(res.error);
            }
        },
        err => {
            this.isloading = false;
            this._sharedService.checkAccessToken(err, false);
        });
    }

    setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }


}
