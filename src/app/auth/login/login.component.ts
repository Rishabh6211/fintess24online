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
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService]    
})
export class LoginComponent implements OnInit, OnDestroy {
    

   	public user;
  	public sub: any;
    public loginForm:object;

    public isloading: boolean   = false;
    public isError: boolean     = false;
    public isSuccess: boolean     = false;
    public errorMessage: string = '';

    public normalUser  = {};

    public rememberMe = true;
    public hasUser    = false;
    public language: LanguageInterface = new LanguageInterface;

    // birthdate: any;

    constructor(private _auth: AuthService, 
                private _loginService: LoginService,
                private _router : Router,
                private _cookieService: CookieService,
                private _cd: ChangeDetectorRef,
                private _flashMessagesService: FlashMessagesService,
                private _sharedService: SharedService,                
                private _languageService: LanguageService ) {

                this._languageService.language.subscribe(language => {
                    this.language.setLabels(language);
                });

    }

  	ngOnInit() {

        this.checkRememberMe();
        
        let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();
  	} 

  	ngOnDestroy(){
  	}  
  

    login(): void {  
        

        this.isError   = false;
        this.isSuccess = false;        
        
        if(this.rememberMe) {
            localStorage.setItem("remember",this.normalUser["username"]);
        } else {
            localStorage.removeItem('remember');
            this.hasUser = false;
        }  
        
        this.isloading = true;    
                
        this._loginService.login(this.normalUser).subscribe(res => { 
            this.isloading = false;
            console.log(res);
            if( res.success ){
                //redirect to home. 
                 let tempData = {
                        "id" : res.data.id,
                        "firstName" :res.data.firstName,
                        "lastName" :res.data.lastName,
                        "username" :res.data.username,
                        "mobile" :res.data.idmobile,
                        "address" :res.data.address,
                        "city" :res.data.city,
                        "pincode" :res.data.pincode,
                        "state" :res.data.state,
                        "district" :res.data.district,
                        "country" :res.data.idcountry,
                        "fullName" :res.data.fullName,
                        "email" :res.data.emaild
                 };

                
                this.isloading = false;                
                this._cookieService.put('accesstoken', res.data.access_token);
                
                this._cookieService.putObject('userData', tempData);
                this._cd.markForCheck(); 

                this._sharedService.showToast(this.language.getLabel('login_successful'), tsConstants.COLOR_SUCESS);
                
                this._router.navigate(['/']);                
            }else{
                this._sharedService.showToast(this.language.getLabel("WRONG_PASSWORD"), tsConstants.COLOR_DANGER);
                
                //show error messgae.                 
                this.isloading = false;
                
            }
            this._cd.markForCheck(); 
        },
        err => {
            this.isloading = false;
            this._sharedService.checkAccessToken(err, false);
        });
    }
  
    checkRememberMe() {

        if( localStorage.getItem("remember") ) {
            this.normalUser["username"] = localStorage.getItem("remember");
            this.hasUser = true;
        }
    }

    setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }  

}/* class ends */
