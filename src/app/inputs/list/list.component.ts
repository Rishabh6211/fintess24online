import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import { Component, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';

import { SharedService } from '../../shared/services/shared.service';
import { InputService } from '../services/input.service';

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

    public inputs = [];
    public total  = 10;

    private _host = tsConstants.HOST;
    public language: LanguageInterface = new LanguageInterface;

    constructor( 
		private _inputService: InputService,
		private _cd: ChangeDetectorRef,
        private _sharedService: SharedService,
        private _languageService: LanguageService ) { 

                this._languageService.language.subscribe(language => {
                    this.language.setLabels(language);
                });
         }    

    ngOnInit() {
		this.getInputs(4);
        let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();
    }

    getInputs( NumberOfItems ): void {
    	
    	this.isloading = true;
        this._inputService.getAllInputs( NumberOfItems ).subscribe( res => {
            this.isloading = false;
            if( res.success ){
                this.inputs = res.data.inputs;
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
        this.getInputs(1000);
    }

    setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }
}
