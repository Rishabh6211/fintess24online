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
  selector: 'app-bidhistory',
  templateUrl: './bidhistory.component.html',
  styleUrls: ['./bidhistory.component.css']
})
export class BidhistoryComponent implements OnInit {
	public isloading: boolean = false;       
    public crop: any  = {};
    public bids     = [];
    public totalCrops = 0;

    public bracketStart = '(';
    public bracketEnd   = ')';

    public bidID     = '';
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
        
        this.getbidHistory();

    	let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();
    }

  
    getbidHistory( ): void {
        this.bidID = this._activateRouter.snapshot.params['id'];

        this.isloading = true;
        this._cropsService.bidHistory( this.bidID ).subscribe( res => {
            
            this.isloading = false;
            if( res.success ) {
                this.crop      = res.data;
                this.bids      = res.data.history;
                this.totalBids = (this.bids) ? this.bids.length : 0;
                this._cd.markForCheck();                

            } else {
                this.isloading = false;
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
