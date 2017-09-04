import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

import tsConstants = require('../../shared/config/tsconstant');
import { SharedService } from '../../shared/services/shared.service';
@Injectable()
export class LoginService {
    
    private _host = tsConstants.HOST;

	constructor( private _http: Http, private _sharedService: SharedService ) { }

    public login( user ) {

    	let headers           = new Headers();
        
        let email:string   = user.email;
        let password:string   = user.password;
        
        headers.append('Content-Type', 'application/json');

        let body = {
            'email': email,
            'password': password,            
            
        }

        return this._http.post(this._host +'/auth/login', body, { headers: headers }).map((res:Response) => res.json())
    }
    forgotPassword(emailID) {

       let headers        = new Headers();
       let email:string   = emailID;
        
       return this._http.post(this._host +'/userForgotPassword', {email : email}, { headers: headers }).map((res:Response) => res.json())
   }
   resetPassword(user, userID){
     console.log("user",user);
        // userID  = this._sharedService.getCurrentUserID();
        console.log( userID )

        let headers                 = new Headers();
        
        let newPassword:string      = user.newPassword;
        let confirmPassword:string  = user.confirmPassword;

         headers.append('Content-Type', 'application/json');

        let body = {
            'newPassword': newPassword,
            'confirmPassword': confirmPassword                       
        }
        console.log("body",body);
        return this._http.post(this._host +'/changepassword/'+userID, body, { headers: headers }).map((res:Response) => res.json())
 

   }
    
}/* class ends. */
