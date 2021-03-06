import { Injectable, ApplicationRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';

import { CookieService } from 'ngx-cookie';
import * as Materialize from "angular2-materialize";

import tsConstants = require('../config/tsconstant');



import { LoginComponent } from '../../auth/login/login.component';
//import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
declare var jQuery:any;

@Injectable()
export class SharedService {
    
    private _host = tsConstants.HOST;


        
    constructor(
    	private _http: Http,
        private _cookieService: CookieService,
    	private _router: Router,
        private _ref: ApplicationRef,
      ) { 

            

         }
    

    getStates() {
        let headers = new Headers();        
        return this._http.get(this._host +'/states', { headers: headers }).map((res:Response) => res.json())
    }

    getCurrentUserID() {
    	let userData = this._cookieService.getObject('userData');
        return (userData) ? userData['id'] : null;    	
    }

    checkAccessToken( err, apiResponse = true  ): void {
        let code    = err.code;
        let message = err.message;

        if ( apiResponse ) {
            if( (code == 401 && message == "authorization")) {
                
                this.showToast('session_expire_message', tsConstants.COLOR_WARNING);
                this._cookieService.removeAll();
                this._router.navigate(['/login']);   
                this._ref.tick();
                this._ref.components[0].instance as LoginComponent;
            }else{
                this.showToast(message, tsConstants.COLOR_DANGER);                
            }
        } else {
            if( err.statusText !== '' ){
                this.showToast(err.statusText, tsConstants.COLOR_DANGER);                
            }else{
               this.showToast("error", tsConstants.COLOR_DANGER);
            }
            
        }   
    }

    sendToTop() {
        jQuery('html, body').stop(true,true).animate({scrollTop:0}, 1000);
    }

    getAuthorizationHeader( access = true) {
        let headers = new Headers();
        
        if( access ) {
            let token   = this._cookieService.get('token');
            headers.append('Authorization', 'Bearer '+token);
        }
        
        return headers;
    }

    showToast( messageText, className ) {
        /* Clean Old Toasts */
        jQuery('#toast-container').remove();
        Materialize.toast(messageText, tsConstants.MESSAGE_SHOWTIME, className);
    }


    
    getFormattedDate( dateObj ) {

        if( dateObj ) {
            let date  = new Date(dateObj);
            let year  = date.getFullYear();
            let month = (1 + date.getMonth()).toString();
            
            month     = month.length > 1 ? month : '0' + month;

            let day   = date.getDate().toString();
            day       = day.length > 1 ? day : '0' + day;

            return day + '/' + month + '/' + year;
        } else {

            let date  = new Date();
            let year  = date.getFullYear();
            let month = (1 + date.getMonth()).toString();
            
            month     = month.length > 1 ? month : '0' + month;

            let day   = date.getDate().toString();
            day       = day.length > 1 ? day : '0' + day;

            return day + '/' + month + '/' + year;

        }
     
    }

    getISODate( date ) {

        if( date ) {
            var pattern   = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
            var arrayDate = date.match(pattern);
            var dt        = new Date(arrayDate[3], arrayDate[2] - 1 , arrayDate[1]);            
            return dt;         
            
        }else{           
            return null;            
        }
    }

    getDistance( origin = '', destination = '', weight = '' ) {

        console.log("origin "+ origin);        
        console.log("destination "+ destination);

        // origin      = "Phase 7, mohali, 160071";
        // destination = "Phase 11, mohali, 160062";  
        origin      = String(origin);
        destination = String(destination);

        let url = encodeURI(this._host +'/googleaddress?origin='+origin+'&destination='+destination+'&mt='+weight);        
        
        return this._http.get(url);
    }


   
     addRating( data ) {
        let headers = this.getAuthorizationHeader(true);

        let currentUserID = this.getCurrentUserID();
        let body = {
            centerId: data.centerId,
            reviewer: currentUserID,
            star: data.rating
        }

        return this._http.post(this._host +'/rating', body, { headers: headers }).map((res:Response) => res.json())
    }

    getRating( userID ) {
        // let headers = this.getAuthorizationHeader(true);

        let url     = this._host+"/averating/"+userID;
        return this._http.get( url ).map((res:Response) => res.json());
    }
    setReferer( url ){
        console.log("Referer: ", url);

        this._cookieService.put('referer', url);
        this._router.navigate(['/login']);
        return true;   
    }

    redirectToReferer( ){
        let url = this._cookieService.get('referer');
        this._cookieService.remove('referer');

        if( url) {
            this._router.navigate([url]);
        }else{
            this._router.navigate(['/']);
        }
    }


}
