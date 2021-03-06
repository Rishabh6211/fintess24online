import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';  
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import tsConstants = require('../shared/config/tsconstant');
import { SharedService } from '../shared/services/shared.service';
@Injectable()
export class CenterdetailService {
private _host = tsConstants.HOST;
  constructor( private _http: Http, private _sharedService: SharedService ) { }

  	yogaDetail(yogaId){
		let headers  = this._sharedService.getAuthorizationHeader();
		let url = this._host+'/yogaProfile/'+yogaId;
		return this._http.get(url,{headers:headers}).map((res:Response)=>res.json());
	}

	addLike(json){
		console.log("json",json)
		//let headers  = this._sharedService.getAuthorizationHeader();
		let url = this._host+'/like';
		return this._http.post(url,json).map((res:Response)=>res.json());

	}

	likeDetail(centerId,userId){
		let headers  = this._sharedService.getAuthorizationHeader();
		let url = this._host+'/profileLike/'+centerId+'/'+userId;
		return this._http.get(url,{headers:headers}).map((res:Response)=>res.json());
	}

	countLike(centerId){
		let headers  = this._sharedService.getAuthorizationHeader();
		let url = this._host+'/count/'+centerId;
		return this._http.get(url,{headers:headers}).map((res:Response)=>res.json());
	}

	view(centerId){
		let headers  = this._sharedService.getAuthorizationHeader();
		let url = this._host+'/view/'+centerId;
		return this._http.get(url,{headers:headers}).map((res:Response)=>res.json());
	}

	countView(centerId){
		let headers  = this._sharedService.getAuthorizationHeader();
		let url = this._host+'/countview/'+centerId;
		return this._http.get(url,{headers:headers}).map((res:Response)=>res.json());
	}


}
