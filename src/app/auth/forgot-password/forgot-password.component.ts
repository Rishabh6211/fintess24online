import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from "angular2-social-login";
import { Router, ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie';
import { FlashMessagesService } from 'ngx-flash-messages';

import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import * as Materialize from "angular2-materialize";

import tsConstants = require('../../shared/config/tsconstant');
import tsMessages  = require('../../shared/config/tsmessage');

import { LanguageService } from '../../shared/services/language.service';
import { LanguageInterface } from '../../shared/classes/language-interface';

import { SharedService } from '../../shared/services/shared.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css'],
    providers: [LoginService]  
})
export class ForgotPasswordComponent implements OnInit {

    public emailID:string              = '';
    public isloading: boolean          = false;
    public isError: boolean            = false;
    public isSuccess: boolean          = false;
    public errMessage: string          = '';
    public successMessage: string      = '';
    public isSubmitted: boolean        = false;
    public language: LanguageInterface = new LanguageInterface;

    constructor(private _auth: AuthService, 
                private _loginService: LoginService,
                private _router : Router,
                private _cookieService: CookieService,
                private _cd: ChangeDetectorRef,
                private _flashMessagesService: FlashMessagesService,
                private _sharedService: SharedService,                
                private _languageService: LanguageService) {

				this._languageService.language.subscribe(language => {
	                this.language.setLabels(language);
	            });
    }

    ngOnInit() {

        let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();
    } 

    submit() {
        this.isloading  = true;
        this.errMessage = '';
        
        this._loginService.forgotPassword(this.emailID).subscribe(res => {
            this.isloading = false;
            if(res.success) {
                this.isSubmitted = true;
                this._sharedService.showToast(this.language.getLabel("check_your_email"), tsConstants.COLOR_SUCESS);
            } else {
                this._sharedService.showToast(this.language.getLabel("no_such_user_exist"), tsConstants.COLOR_DANGER);
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
