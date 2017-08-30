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
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  providers: [LoginService]  
})
export class ResetPasswordComponent implements OnInit {
  public emailID = '';
  public user = {
           newPassword:"",
           confirmPassword:"",
  };
  public userID = '';
  public isloading: boolean   = false;
  public errMessage: string = '';
  public successMessage: string = '';
  public language: LanguageInterface = new LanguageInterface;

  constructor(private _auth: AuthService, 
                private _loginService: LoginService,
                private _router : Router,
                private _cookieService: CookieService,
                private _cd: ChangeDetectorRef,
                private _flashMessagesService: FlashMessagesService,
                private _sharedService: SharedService,                
                private _languageService: LanguageService,
                private _activateRouter:ActivatedRoute) {

				this._languageService.language.subscribe(language => {
	                this.language.setLabels(language);
	            });
  }

  ngOnInit() {
        
        this.userID = this._activateRouter.snapshot.params['id'];
        console.log(this.userID)

        let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();
  	} 

  submit() {
        this.isloading     = true;
       	this.errMessage    = '';        
        this._loginService.resetPassword(this.user,this.userID).subscribe(res => {
           this.isloading = false;
           if(res.success) {
             this._sharedService.showToast(this.language.getLabel("your_password_has_been_change"), tsConstants.COLOR_SUCESS);
               this._router.navigate(['/login']); 
               //this.successMessage = res.;
           } else {
              this._sharedService.showToast(this.language.getLabel("an_error_occured_please_try_again"), tsConstants.COLOR_DANGER);

               //this.errMessage     = "invalid";
           }
       },err => {      
           this.isloading = false;
           //this.errMessage    = "NO SUCH USER EXIST";    
       });
    }
   setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }  

}
