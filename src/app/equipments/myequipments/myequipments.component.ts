import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import { Component, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

import { SharedService } from '../../shared/services/shared.service';
import { EquipmentService } from '../services/equipment.service';

import tsConstants = require('../../shared/config/tsconstant');
import tsMessages = require('../../shared/config/tsmessage');

import * as Materialize from "angular2-materialize";

import { LanguageService } from '../../shared/services/language.service';
import { LanguageInterface } from '../../shared/classes/language-interface';

import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';

@Component({
  selector: 'app-myequipments',
  templateUrl: './myequipments.component.html',
  styleUrls: ['./myequipments.component.css']
})
export class MyequipmentsComponent implements OnInit {

  	public isloading: boolean = false;    
    
    public equipments      = [];
    public totalequipments = 0;

    public bracketStart = '(';
    public bracketEnd   = ')';

    private _host = tsConstants.HOST;
    public language: LanguageInterface = new LanguageInterface;

    constructor( 
    		private _equipmentsService: EquipmentService,
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
        let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();
        this.getMyequipments();
    }

    getMyequipments( ): void {
        this.isloading = true;
        this._equipmentsService.getMyEquipment( ).subscribe( res => {
            this.isloading = false;
            if( res.success ){
                this.equipments      = res.data.equipments;
                this.totalequipments = res.data.total;
				this._cd.markForCheck();
            }else{
                console.log('Some error Occured.');
                this._sharedService.checkAccessToken(res.error);
            }
            this._cd.markForCheck();            
        },
        err => {
            this._sharedService.checkAccessToken(err, false);
        });
    }

    editEquipment(equipmentID) {
        let route = '/equipments/edit/'+equipmentID;
        this._router.navigate([route]);
    }

    setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }
    removeEquipment(equipmentID){
         if(confirm("Do you want to delete?")) {
            this.isloading = true;
            console.log("equipment service",equipmentID)
            this._equipmentsService.delete(equipmentID).subscribe(res => {           
            this.isloading = false;
            //this._cookieService.put('cropAlert', 'Deleted successfully.');
            this._sharedService.showToast(this.language.getLabel('deleted_successfully'), tsConstants.COLOR_SUCESS);
            this._sharedService.sendToTop();
            this.getMyequipments();
            },err => {
                this.isloading = false;
        })
        }
    }
}
