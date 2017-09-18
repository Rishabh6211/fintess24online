import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';  
import tsConstants = require('../shared/config/tsconstant');
import { SharedService } from '../shared/services/shared.service';

@Injectable()
export class ContactService {
private _host = tsConstants.HOST;

	constructor( private _http: Http, private _sharedService: SharedService ) { }

	consult ( data ) {
      
        let headers = this._sharedService.getAuthorizationHeader();
        return this._http.post(this._host +'/consult', data, { headers: headers }).map((res:Response) => res.json())
	}
}
