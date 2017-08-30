import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map'

import tsConstants = require('../../shared/config/tsconstant');
import { SharedService } from '../../shared/services/shared.service';
import { CookieService } from 'ngx-cookie';


@Injectable()
export class InputService {
    
    private _host = tsConstants.HOST;

    constructor( private _http: Http, private _cookieService: CookieService, private _sharedService: SharedService ) { }

    getAllInputs(rowsOnPage = 100, activePage = 1, sortTrem = '', search = '') {

        let headers = this._sharedService.getAuthorizationHeader();
        let url = this._host +'/inputs?count='+rowsOnPage+'&page='+activePage+'&sortBy='+sortTrem+'&search='+search;

        return this._http.get(url, { headers: headers }).map((res:Response) => res.json())
    }
    get( inputID ) {

        let headers = this._sharedService.getAuthorizationHeader(false);
		
		let tag =  new Date().getTime().toString();
		let url = this._host +'/inputs/'+inputID+"/?tag="+tag;
		
        return this._http.get(url, { headers: headers }).map((res:Response) => res.json())
    }

    getAllBids() {
        let headers = this._sharedService.getAuthorizationHeader();
        let url = this._host + '/carts';

        return this._http.get(url, { headers:headers }).map((res:Response) => res.json())
    }

    postcart(inputID,price,quantity){
        let headers = this._sharedService.getAuthorizationHeader();
        let user  = this._sharedService.getCurrentUserID();
        let body = {    
            user:user,
            product:inputID,
            productType:'INPUT',
            currentPrice:price,
            quantity:quantity
        };
        console.log("body",body);
        return this._http.post(this._host +'/payment/cart/', body, { headers: headers }).map((res:Response) => res.json())
    }

}
