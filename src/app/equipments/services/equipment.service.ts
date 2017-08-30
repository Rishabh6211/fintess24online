import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map'

import tsConstants = require('../../shared/config/tsconstant');

import { CookieService } from 'ngx-cookie';
import { SharedService } from '../../shared/services/shared.service';


@Injectable()
export class EquipmentService {
    
    private _host = tsConstants.HOST;

    constructor( private _http: Http, private _cookieService: CookieService,
                 private _sharedService: SharedService ) { }

    getAllEquipments(rowsOnPage = 100, activePage = 1, sortTrem = '', search = '') {

        let headers  = this._sharedService.getAuthorizationHeader();
        let url = this._host +'/equipment?count='+rowsOnPage+'&page='+activePage+'&sortBy='+sortTrem+'&search='+search;

        return this._http.get(url, { headers: headers }).map((res:Response) => res.json())
    }

    update(equipment) {

        let headers = this._sharedService.getAuthorizationHeader();
        return this._http.put(this._host +'/equipment/'+ equipment.id, equipment, { headers: headers }).map((res:Response) => res.json())
    }

    postEquipment ( equipment ) {
        let userID     = this._sharedService.getCurrentUserID();
        let headers    = this._sharedService.getAuthorizationHeader();
        equipment.user = userID;
        
        return this._http.post(this._host +'/equipment', equipment, { headers: headers }).map((res:Response) => res.json())
	}

    uploadImage(image) {
    
        let headers = this._sharedService.getAuthorizationHeader();
        return this._http.post(this._host +'/upload', image, { headers: headers }).map((res:Response) => res.json())
        
    }

    getAllCategories() {
        
        let headers = this._sharedService.getAuthorizationHeader();
        return this._http.get(this._host +'/category?type=equipments&sort=name', { headers: headers }).map((res:Response) => res.json());
    }

    get( equipmentID ) {

        let headers = this._sharedService.getAuthorizationHeader(false);
		
		let tag =  new Date().getTime().toString();
		let url = this._host +'/equipment/'+equipmentID+"/?tag="+tag;
		
        return this._http.get(url, { headers: headers }).map((res:Response) => res.json())
    }

    delete(equipmentID){
    console.log("equipmentID",equipmentID);
        let headers = this._sharedService.getAuthorizationHeader();
        let url = this._host +'/deleteRecord?id='+equipmentID+'&model=equipment'; 
        return this._http.delete(url, {headers: headers}).map((res:Response)=> res.json())
    }

    getMyEquipment(rowsOnPage = 100, activePage = 1, sortTrem = '', search = '') {

        let userID  = this._sharedService.getCurrentUserID();
        let headers = this._sharedService.getAuthorizationHeader();

        let tag =  new Date().getTime().toString();               
        let url = this._host +'/myequipments?user='+userID+'&k='+tag;

        return this._http.get(url, { headers: headers }).map((res:Response) => res.json())
    }

    postcart(equipmentID,price,quantity){
        let headers = this._sharedService.getAuthorizationHeader();
        let user  = this._sharedService.getCurrentUserID();
        let body = {    
            user:user,
            product:equipmentID,
            productType:'EQUIPMENT',
            currentPrice:price,
            quantity:quantity
        };
        console.log("body",body);
        return this._http.post(this._host +'/payment/cart/', body, { headers: headers }).map((res:Response) => res.json())
    }


}
