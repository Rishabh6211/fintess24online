import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import { Component, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

import { SharedService } from '../../shared/services/shared.service';
import { CropsService } from '../services/crops.service';

import tsConstants = require('../../shared/config/tsconstant');
import tsMessages = require('../../shared/config/tsmessage');

import * as Materialize from "angular2-materialize";

import { LanguageService } from '../../shared/services/language.service';
import { LanguageInterface } from '../../shared/classes/language-interface';

import { TruncatePipe } from '../../shared/pipes/truncate.pipe';

@Component({
  selector: 'app-mycrops',
  templateUrl: './mycrops.component.html',
  styleUrls: ['./mycrops.component.css']
})
export class MycropsComponent implements OnInit {

  	public isloading: boolean = false;    
    
    public crops      = [];
    public totalCrops = 0;

    public bracketStart = '(';
    public bracketEnd   = ')';

    private _host = tsConstants.HOST;
    public response:any;
    public language: LanguageInterface = new LanguageInterface;

    public bids: boolean = false;

    constructor( 
    		private _cropsService: CropsService,
    		private _cd: ChangeDetectorRef,
            private _router: Router,
            private _cookieService: CookieService,
            private _sharedService: SharedService,
            private _languageService: LanguageService 
    	) { 

                this._languageService.language.subscribe(language => {
    				this.language.setLabels(language);
    			});

         }

    ngOnInit() {
        this.getMyCrops();
        let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();
    }

    getMyCrops( ): void {
        this.isloading = true;
        this._cropsService.getMyCrops( ).subscribe( res => {
            this.isloading = false;
            console.log("res", res)
            if( res.success ){
                this.crops      = res.data.crops;
                this.totalCrops = res.data.total;

                for(var i =0; i<res.data.crops.length; i++){
                    for(var j=0; j<res.data.crops[i].bids.length; j++){
                        if(res.data.crops[i].bids[j].status == "Accepted"){
                            this.crops[i]["key"] = true;
                        }
                    }
                    
                }

                for(var i=0; i<res.data.crops.length; i++){
                    if( res.data.crops[i].bids !== undefined && res.data.crops[i].bids.length > 0 ){
                        this.bids = true;
                    }
                }

				this._cd.markForCheck();
            }else{
                this._sharedService.checkAccessToken(res.error);
            }
            this._cd.markForCheck();            
        },
        err => {
            this._sharedService.checkAccessToken(err, false);
        });
    }

    editCrop(cropID) {
        let route = '/crops/edit/'+cropID;
        this._router.navigate([route]);
    }
    bidsList(cropID) {
        let route = '/crops/bidslist/'+cropID;
        this._router.navigate([route]);
    }

     /* Function use to remove Crop with crop id*/
    removeCrop(cropID) {
        if(confirm("Do you want to delete?")) {
            this.isloading = true;
            this._cropsService.delete(cropID).subscribe(res => {
                this.response  = res;
                this.isloading = false;
                this._cookieService.put('cropAlert', 'Deleted successfully.');
                // Deleted successfully.
                this._sharedService.showToast(this.language.getLabel('deleted_successfully'), tsConstants.COLOR_SUCESS);
                /* reload page. */
                this._sharedService.sendToTop();
                this.getMyCrops();
            },err => {
                this.isloading = false;
            });             
        }
    }

    setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }
}
