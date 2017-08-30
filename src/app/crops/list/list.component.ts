import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import { Component, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { SharedService } from '../../shared/services/shared.service';
import { CropsService } from '../services/crops.service';

import tsConstants = require('../../shared/config/tsconstant');
import tsMessage   = require('../../shared/config/tsmessage');

import { LanguageService } from '../../shared/services/language.service';
import { LanguageInterface } from '../../shared/classes/language-interface';

import * as Materialize from "angular2-materialize";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    public isloading: boolean = false;
    public crops = [];
    public total = 10;

    private _host = tsConstants.HOST;   

    public language: LanguageInterface = new LanguageInterface; 

    constructor( 
    		private _cropsService: CropsService,
    		private _cd: ChangeDetectorRef,
            private _sharedService: SharedService,
            private _router: Router,
            private _languageService: LanguageService ) { 

                this._languageService.language.subscribe(language => {
                    this.language.setLabels(language);
                });

             }
    
    ngOnInit() {
        this.getCrops(4);

        let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();
    }

    getCrops( NumberOfItems ): void {
        this.isloading = true;
        this._cropsService.getAllCrops( NumberOfItems ).subscribe( res => {
            this.isloading = false;
            if( res.success ){
                this.crops = res.data.crops;
                this.total = res.data.total;
                console.log(this.crops);
            }else{
                console.log('Some error Occured.');
                this._sharedService.checkAccessToken(res.error);
            }
            this._cd.markForCheck();            
        }, 
        err => {
            this.isloading = false;
            this._sharedService.checkAccessToken(err, false);
        });
    }

    viewMore(): void {
        this.getCrops(1000);
    }

    getSingleCrop(cropID) {
        let route = '/crops/detail/'+cropID;
        this._router.navigate([route]);
    }

    checkCategory($event) {
        console.log( "event ", $event);
    }

    setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }

}
