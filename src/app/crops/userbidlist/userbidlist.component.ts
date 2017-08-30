import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import { Component, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { CookieService } from 'ngx-cookie';

import { SharedService } from '../../shared/services/shared.service';
import { CropsService } from '../services/crops.service';

import tsConstants = require('../../shared/config/tsconstant');
import tsMessages  = require('../../shared/config/tsmessage');

import * as Materialize from "angular2-materialize";

import { LanguageService } from '../../shared/services/language.service';
import { LanguageInterface } from '../../shared/classes/language-interface';

@Component({
  selector: 'app-userbidlist',
  templateUrl: './userbidlist.component.html',
  styleUrls: ['./userbidlist.component.css']
})
export class UserbidlistComponent implements OnInit {
	public isloading: boolean = false;       
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
        	 let keyword = localStorage.getItem("lang");
            this._languageService.getLanguage();  

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
                
                /*if( this.bids ){ 
                    this.getBidAmount();
                }   */ 
                this.userID = this._sharedService.getCurrentUserID()
                
                if( this.userID == this.crop.seller.id ){
                  
                }
                this._cd.markForCheck();
            } else {
                this._sharedService.checkAccessToken(res.error);
            }
        },
        err => {
            this._sharedService.checkAccessToken(err, false);
        });
    } 
	
    setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }

}
