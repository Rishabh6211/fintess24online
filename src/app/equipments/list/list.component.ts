import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import { Component, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';

import { SharedService } from '../../shared/services/shared.service';
import { EquipmentService } from '../services/equipment.service';

import { LanguageService } from '../../shared/services/language.service';
import { LanguageInterface } from '../../shared/classes/language-interface';

import tsConstants = require('../../shared/config/tsconstant');

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	public isloading:boolean = false;

    public equipments = [];
    public total  = 10;

    private _host = tsConstants.HOST;
    public language: LanguageInterface = new LanguageInterface;

    constructor( 
		private _equipmentService: EquipmentService,
		private _cd: ChangeDetectorRef,
        private _sharedService: SharedService,
        private _languageService: LanguageService,	) { 

                this._languageService.language.subscribe(language => {
                    this.language.setLabels(language);
                });

         }    

    ngOnInit() {
		this.getEquipments(4);    	
        let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();
    }

    getEquipments( NumberOfItems ): void {
    	
    	this.isloading = true;
        this._equipmentService.getAllEquipments( NumberOfItems ).subscribe( res => {
            this.isloading = false;
            if( res.success ){
                this.equipments = res.data.equipments;
                this.total  = res.data.total;
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

    viewMore(): void {
        this.getEquipments(1000);
    }

    setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }
}
