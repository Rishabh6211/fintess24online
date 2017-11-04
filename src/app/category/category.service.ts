import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';  
import tsConstants = require('../shared/config/tsconstant');
import { SharedService } from '../shared/services/shared.service';

@Injectable()
export class CategoryService {
private _host = tsConstants.HOST;

	constructor( private _http: Http, private _sharedService: SharedService ) { }

	getYoga(yoga){
		let headers  = this._sharedService.getAuthorizationHeader();
		let url = this._host+'/get?model='+yoga;
		return this._http.get(url,{headers:headers}).map((res:Response)=>res.json());
	}

	getPhysiotherapy(obj){
		let headers  = this._sharedService.getAuthorizationHeader();
		let url = this._host+'/get?model='+obj;
		return this._http.get(url,{headers:headers}).map((res:Response)=>res.json());
	}

	getGym(obj){
		let headers  = this._sharedService.getAuthorizationHeader();
		let url = this._host+'/get?model='+obj;
		return this._http.get(url,{headers:headers}).map((res:Response)=>res.json());
	}

}

