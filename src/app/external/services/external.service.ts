import { Injectable } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import tsConstants = require('../../shared/config/tsconstant');

@Injectable()
export class ExternalService {

	private _host = tsConstants.HOST;

	constructor(
		private _http: Http, 
		private _sharedService: SharedService
	) { }
	
	testPayment(equipmentID,amount,userID,buyer)  {
	console.log("_------------0-0--0-0-0-0-0")
		// let userID  = data.;
		let data = {
			user:userID,
            equipment:equipmentID,
            amount:amount,
            buyer:buyer
		}
        let headers = this._sharedService.getAuthorizationHeader(false);

        return this._http.post(this._host +'/equipment/payHigh', data, { headers: headers }).map((res:Response) => res.json())
	}		

	landPayment(landID,amount,userID,productType)  {
		console.log("in land----------------")
		// let userID  = data.;
		let data = {
			user:userID,
            product:landID,
            amount:amount,
            productType:'Land',
		}
        let headers = this._sharedService.getAuthorizationHeader(false);

        return this._http.post(this._host +'/land/payHigh', data, { headers: headers }).map((res:Response) => res.json())
	}		



}
