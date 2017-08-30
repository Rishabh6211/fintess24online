import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import { Component, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

import { SharedService } from '../../shared/services/shared.service';
import { CropsService } from '../services/crops.service';


import tsConstants = require('../../shared/config/tsconstant');
import tsMessages  = require('../../shared/config/tsmessage');

import * as Materialize from "angular2-materialize";

import { LanguageService } from '../../shared/services/language.service';
import { LanguageInterface } from '../../shared/classes/language-interface';


import { TruncatePipe } from '../../shared/pipes/truncate.pipe';

@Component({
  selector: 'app-mybids',
  templateUrl: './mybids.component.html',
  styleUrls: ['./mybids.component.css']
})
export class MybidsComponent implements OnInit {
	public isloading: boolean = false;    
    
    public myBids     = [];
    public totalCrops = 0;

    public bracketStart = '(';
    public bracketEnd   = ')';


    private _host = tsConstants.HOST;
    public response:any;
    public language: LanguageInterface = new LanguageInterface; 
	
    constructor( 
    		private _cropsService: CropsService,
    		private _cd: ChangeDetectorRef,
            private _router: Router,
            private _sharedService: SharedService,
            private _cookieService: CookieService,
            private _languageService: LanguageService

    	) { 

                this._languageService.language.subscribe(language => {
                    this.language.setLabels(language);
                });

         }

	ngOnInit() {
		this.getMyBids();
        let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();
	}

	getMyBids( ): void {
        this.isloading = true;
        this._cropsService.getMyBids().subscribe( res => {
        	this.isloading = false;
            if( res.success ){
                this.myBids = res.data;
            }else {
                // this._sharedService.checkAccessToken();
            }        	
            this._cd.markForCheck();            
        },
        err => {
            this.isloading = false;            
        });
    }

    withdrawBid( bidID ) {

        if(confirm("Do you want to withdraw bid?")) {
            this.isloading = true;
            this._cropsService.withdrawBid(bidID ).subscribe( res => {
                this._sharedService.showToast(this.language.getLabel('bid_withdrawn_successfully'), tsConstants.COLOR_SUCESS);
                this.getMyBids();
            },
            err => {
               this.isloading = false;
               this._sharedService.showToast(this.language.getLabel('an_error_occured_try_again_later'), tsConstants.COLOR_DANGER);               
               this.getMyBids();    
            });
        }    
    }

    setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }

}
