import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map'

import tsConstants = require('../../shared/config/tsconstant');
import { SharedService } from '../../shared/services/shared.service';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class CartService {

  private _host = tsConstants.HOST;

  constructor( private _http: Http, private _cookieService: CookieService, private _sharedService: SharedService ) { }

  getAllBids() {
        let headers = this._sharedService.getAuthorizationHeader();
        let url = this._host + '/carts';

        return this._http.get(url, { headers:headers }).map((res:Response) => res.json())
    }
    delete(cartID)
    {
    	let headers = this._sharedService.getAuthorizationHeader();
    	let url = this._host +'/deleteRecord?id='+cartID+'&model=carts'; 
        return this._http.delete(url, {headers: headers}).map((res:Response)=> res.json())
    }

}
