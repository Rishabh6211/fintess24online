import { Component, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { SharedService } from '../../shared/services/shared.service';

import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';

import { CookieService } from 'ngx-cookie';
import { FlashMessagesService } from 'ngx-flash-messages';


import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import * as Materialize from "angular2-materialize";

import tsConstants = require('../../shared/config/tsconstant');

import { LanguageService } from '../../shared/services/language.service';
import { LanguageInterface } from '../../shared/classes/language-interface';


import { User } from  '../model/user'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public isloading: boolean = false;
    public states             = [];
    private districts: any;

    private errorMessage = '';

    public user1:User;

    public user  = {
                            firstName:"",
                            lastName:"",
                            email:"",
                            mobile:"",
                            password:"",
                            confirmPassword:"",
                            city:"",
                            state:"",
                            district:"",
                            pincode:null,
                            address:"",
                        };

    public language: LanguageInterface = new LanguageInterface;

    constructor( 
        private _router: Router, 
        private _registerService: RegisterService,
        private _sharedService: SharedService,
        private _cd: ChangeDetectorRef,
        private _cookieService: CookieService,
        private _flashMessagesService: FlashMessagesService,
        private _languageService: LanguageService  ) {

            this._languageService.language.subscribe(language => {
                    this.language.setLabels(language);
                });

    }

    ngOnInit() {
        this.isloading  = true;       
        // this.states = this.temp.data;
        this._sharedService.getStates().subscribe(res => {
            this.isloading  = false;
            if( res.success ) {
                this.states = res.data;                
            }else{
                this._sharedService.showToast(this.language.getLabel(res.error.message), tsConstants.COLOR_DANGER);                
            }
            this._cd.markForCheck();
        },
        err =>{
            this.isloading = false;
            this._sharedService.checkAccessToken(err, false);
        });

        let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();  
    }

    register(): void {
        this._sharedService.sendToTop();

        this._registerService.postUser(this.user).subscribe( res => {
             if( res.success ){
                //redirect to home.                 
                this._sharedService.showToast(this.language.getLabel('successfully_registered'), tsConstants.COLOR_SUCESS);
                this._router.navigate(['/login']);                
            }else{                
                this._sharedService.showToast(this.language.getLabel("email_already_exist"), tsConstants.COLOR_DANGER);    
                
                this._cd.markForCheck();
                this._sharedService.sendToTop();
            }
        },
        err => {      

            this.isloading = false;
            this._sharedService.checkAccessToken(err, false);
        });
    }

    setDistrict( ): void {  
        /* reset values. */
        this.districts         = null;
      
        /* Initialize category. */
        let stateName = this.user.state; 


        if( stateName ){
            this.states.filter(obj => obj.stateName == stateName).map( obj => this.districts = obj.districts)
        }
        
        this._cd.detectChanges();
    }

    setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }
}
