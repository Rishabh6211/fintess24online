import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map'

import tsConstants = require('../../shared/config/tsconstant');

@Injectable()
export class RegisterService {

	private _host = tsConstants.HOST;	

	constructor( private _http: Http ) { }

	postUser( user ) {

		let headers   = new Headers();
                
		let firstName = user.firstName;
		let lastName  = user.lastName;
		let mobile    = user.mobile;
		let username  = user.email;
		let password  = user.password;
		let city      = user.city;
		let district  = user.district;
		let state     = user.state;
		let pincode   = user.pincode;
		let address   = user.address;
		let domain    = 'web';
		let lat       = '0';
		let lng       = '0';
        
        let urlSearchParams   = new URLSearchParams();
        
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        urlSearchParams.append('firstName', firstName); 
		urlSearchParams.append('lastName', lastName); 
		urlSearchParams.append('mobile', mobile); 
		urlSearchParams.append('username', username); 
		urlSearchParams.append('password', password); 
		urlSearchParams.append('city', city); 
		urlSearchParams.append('district', district ); 
		urlSearchParams.append('state', state); 
		urlSearchParams.append('pincode', pincode); 
		urlSearchParams.append('address', address); 
		urlSearchParams.append('domain', domain); 
		urlSearchParams.append('lat', lat); 
		urlSearchParams.append('lng', lng); 



       

        let body = urlSearchParams.toString()
		
        return this._http.post(this._host +'/users/signup', body, { headers: headers }).map((res:Response) => res.json())
	}
}
