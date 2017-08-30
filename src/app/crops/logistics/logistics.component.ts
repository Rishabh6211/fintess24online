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
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.css']
})
export class LogisticsComponent implements OnInit {

    private _host = tsConstants.HOST;
    public isloading: boolean = false;
    public language: LanguageInterface = new LanguageInterface;

    public partnerID = '';
    public partner   = '';
    public lpartners = '';
    public vehicles  = '';
    public lvehicle  = '';
    public cropID    = '';
    public bidID     = '';

    public logisticsPayment =  '20000.00';
    public logisticDetail: boolean = false;
 	
    constructor( 
        private _cropsService: CropsService,
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

        this.cropID = this._activateRouter.snapshot.params['cropID'];
        this.bidID = this._activateRouter.snapshot.params['bidID'];

        console.log( "cropID: ", this.cropID );
        console.log( "bidID: ", this.bidID );
        
        this.showUserLogistic();
        this.showAllLogistic();

        let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();
    
	}

    showUserLogistic() {
        this.isloading = true;
        
        if( this.partnerID ){
            this._cropsService.getUserLogistic( this.partnerID ).subscribe( res => {
                this.isloading      = false;    
                this.partner        = res.data;
                this.vehicles       = res.data.vehicles
                this.logisticDetail = true;   
               
            }, err => {
                console.log("err",err)
                this.isloading = false;
            });
        }else {
            this.isloading      = false;
            this.logisticDetail = false;
        }
    }

    showAllLogistic() {
        this.isloading = true;

        this._cropsService.getAllLogistic().subscribe( res => {
            this.isloading = false;
            this.lpartners = res.data.partners

            console.log("all",res)
        }, err => {
            console.log("err",err)

        })
    }

    saveLogistic(): void {
        this.isloading = true;
        
        // console.log("bidID ",this.bidID);
        // console.log("partnerID ",this.partnerID);
        // console.log("lvehicle ",this.lvehicle);
        // console.log("logisticsPayment ",this.logisticsPayment );
        
        this._cropsService.saveLogistic( this.bidID, this.partnerID, this.lvehicle, this.logisticsPayment ).subscribe( res => {
            this.isloading = false;
            this._sharedService.showToast(this.language.getLabel('saved_successfully'), tsConstants.COLOR_SUCESS);
            this._router.navigate(['/crops/mybids']);
        }, err => {
            this._router.navigate(['/crops/mybids']);        
        })
    }

    logisticPayment( logisticPayment ) {
        // this.logisticsPayment = logisticPayment;
    }

    skipLogistics(): void {
        this._router.navigate(['/crops/mybids']);        
    }


    setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }

}
