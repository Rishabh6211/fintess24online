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
                
		let username  = user.username;
		let email     = user.email
		let phone     = user.phone;
		let password  = user.password;
		let city      = user.city;
		let district  = user.district;
		let state     = user.state;
		let pincode   = user.pincode;
		let address   = user.address;
		
        
        let urlSearchParams   = new URLSearchParams();
        
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        urlSearchParams.append('username', username); 
		urlSearchParams.append('email', email); 
		urlSearchParams.append('phone', phone); 
		urlSearchParams.append('password', password); 
		urlSearchParams.append('city', city); 
		urlSearchParams.append('district', district ); 
		urlSearchParams.append('state', state); 
		urlSearchParams.append('pincode', pincode); 
		urlSearchParams.append('address', address); 



       

        let body = urlSearchParams.toString()
		
        return this._http.post(this._host +'/register', body, { headers: headers }).map((res:Response) => res.json())
	}

}
