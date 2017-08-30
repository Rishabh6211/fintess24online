import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map'

import tsConstants = require('../../shared/config/tsconstant');

import { CookieService } from 'ngx-cookie';
import { SharedService } from '../../shared/services/shared.service';

@Injectable()
export class CropsService {

	private _host = tsConstants.HOST;	
	private _accessToken;
    public message;

	constructor( 
            private _http: Http, 
            private _cookieService: CookieService,
            private _sharedService: SharedService ) { }

	postCrop ( crop ) {
        let userID  = this._sharedService.getCurrentUserID();
        let headers = this._sharedService.getAuthorizationHeader();
        crop.seller = userID;

        return this._http.post(this._host +'/crops/add', crop, { headers: headers }).map((res:Response) => res.json())
	}

    /*Use to get crop with crop id*/
    get( cropID ) {

        let headers = this._sharedService.getAuthorizationHeader(false);
		
		let tag =  new Date().getTime().toString();
		let url = this._host +'/crops/'+cropID+"/?tag="+tag;
		
        return this._http.get(url, { headers: headers }).map((res:Response) => res.json())
    }

    update(crop) {

        let headers = this._sharedService.getAuthorizationHeader();
        return this._http.put(this._host +'/crops/edit/'+ crop.id, crop, { headers: headers }).map((res:Response) => res.json())
    }

    /*Use to Delete crop with crop id */
    delete( cropID ) {
        
        let headers = this._sharedService.getAuthorizationHeader();        
        return this._http.delete(this._host +'/crops/'+ cropID,  { headers: headers }).map((res:Response) => res.json());
    }

  	/*Use to fetch all crops*/
  	getAllCrops(rowsOnPage = 100, activePage = 1, sortTrem = '', search = '') {
        // let headers = new Headers();
        let headers = this._sharedService.getAuthorizationHeader(false);
        let url = this._host +'/crops?count='+rowsOnPage+'&page='+activePage+'&sortBy='+sortTrem+'&search='+search;
        
		return this._http.get(url, { headers: headers }).map((res:Response) => res.json())
    }

    getMyCrops(rowsOnPage = 100, activePage = 1, sortTrem = '', search = '') {

        let userID  = this._sharedService.getCurrentUserID();
        let headers = this._sharedService.getAuthorizationHeader();

		let tag =  new Date().getTime().toString();            
        let url = this._host +'/mycrops?seller='+userID+'&count='+rowsOnPage+'&page='+activePage+'&sortBy='+sortTrem+'&search='+search+'&k='+tag;

		return this._http.get(url, { headers: headers }).map((res:Response) => res.json())
    }

    /*Use to fetch all categories*/
    getAllCategories() {
        
        let headers = this._sharedService.getAuthorizationHeader();
        return this._http.get(this._host +'/category?type=crops&sort=name', { headers: headers }).map((res:Response) => res.json());
    }
    uploadImage(image) {
    
        let headers = this._sharedService.getAuthorizationHeader();
        return this._http.post(this._host +'/upload', image, { headers: headers }).map((res:Response) => res.json())
        
    }

    placeMyBid(userId, cropId, amount, inputQuantity, logisticsOption, bidOptions ) {

        let upfrontPayment       = bidOptions['upfrontPayment'];
        let balancePayment       = bidOptions['balancePayment'];
        let logisticPayment      = bidOptions['logisticPayment'];
        let farmerBalancePayment = bidOptions['farmerBalancePayment'];
        let farmerUpfrontPayment = bidOptions['farmerUpfrontPayment'];
        let earnestAmount        = bidOptions['earnestAmount'];
        let taxAmount            = bidOptions['taxAmount'];       
        let address              = bidOptions['address']; 

        let totalDistance        = bidOptions['totalDistance'];
        let deliveryCharges      = bidOptions['deliveryCharges'];


        let qtyUnit      = inputQuantity.split(' ');
        let quantity     = qtyUnit[0];
        let quantityUnit = qtyUnit[1];

        let date      = new Date();
        let datetime  = date.toISOString();
        let amountStr = amount.toString();

        let headers   = this._sharedService.getAuthorizationHeader();

        let body = {    
            user:userId,
            crop:cropId,
            amount:amountStr,
            quantity:quantity,
            quantityUnit:quantityUnit,
            logisticsOption:logisticsOption,
            time:datetime,
            upfrontPayment:upfrontPayment,
            balancePayment:balancePayment,
            logisticPayment:logisticPayment,
            farmerBalancePayment:farmerBalancePayment,
            farmerUpfrontPayment:farmerUpfrontPayment,
            earnestAmount:earnestAmount,
            taxAmount:taxAmount,
            address:address,
            totalDistance:totalDistance,
            deliveryCharges:deliveryCharges,
            status:"Pending",
            type:"CROP"
        };
        
        return this._http.post(this._host +'/bids/place', body,{ headers: headers }).map((res:Response) => res.json());

    }

    getMyBids() {

        let headers = this._sharedService.getAuthorizationHeader();
        let userID  = this._sharedService.getCurrentUserID();
        let url = this._host +'/mybids/'+userID;
        return this._http.get(url, { headers: headers }).map((res:Response) => res.json());

    }
    
    getSingleBid( BidID ) {

        let headers = this._sharedService.getAuthorizationHeader();
        let userID  = this._sharedService.getCurrentUserID();
        let url = this._host +'/bids/'+BidID;
        return this._http.get(url, { headers: headers }).map((res:Response) => res.json());

    }


    updateMyBid( bidId, amount, inputQuantity, logisticsOption, bidOptions ) {
        
        let upfrontPayment       = bidOptions['upfrontPayment'];
        let balancePayment       = bidOptions['balancePayment'];
        let logisticPayment      = bidOptions['logisticPayment'];
        let farmerBalancePayment = bidOptions['farmerBalancePayment'];
        let farmerUpfrontPayment = bidOptions['farmerUpfrontPayment'];
        let earnestAmount        = bidOptions['earnestAmount'];
        let taxAmount            = bidOptions['taxAmount'];
        let address              = bidOptions['address'];

        let totalDistance        = bidOptions['totalDistance'];
        let deliveryCharges      = bidOptions['deliveryCharges'];


        let qtyUnit      = inputQuantity.split(' ');
        let quantity     = qtyUnit[0];
        let quantityUnit = qtyUnit[1];

        let date         = new Date();
        let datetime     = date.toISOString();
        let amountStr    = amount.toString();

        let headers      = this._sharedService.getAuthorizationHeader();

        let body = {
            amount:amountStr,
            time:datetime,
            quantity:quantity,
            quantityUnit: quantityUnit,
            logisticsOption:logisticsOption,
            upfrontPayment:upfrontPayment,
            balancePayment:balancePayment,
            logisticPayment:logisticPayment,
            farmerBalancePayment:farmerBalancePayment,
            farmerUpfrontPayment:farmerUpfrontPayment,
            earnestAmount:earnestAmount,
            taxAmount:taxAmount,
            address:address,
            totalDistance:totalDistance,
            deliveryCharges:deliveryCharges,
            reason: '',
            status:"Pending"
        };
        
        return this._http.put(this._host +'/bids/place/'+bidId, body, { headers: headers }).map((res:Response) => res.json());
    }

    acceptBid( BidID ) {

        let headers = this._sharedService.getAuthorizationHeader();
        let url = this._host +'/bids/place/'+BidID;
        let body = {
            status:'Accepted'
        };
        return this._http.put(url, body, { headers: headers }).map((res:Response) => res.json());

    }

    getAllLogistic() {

        let headers = this._sharedService.getAuthorizationHeader();
        let url = this._host +'/lpartners?count=100&page=1&sortBy=&search=';

        return this._http.get(url, { headers: headers }).map((res:Response) => res.json());
    }

    getUserLogistic( userID ){

        let headers = this._sharedService.getAuthorizationHeader();
        let url = this._host +'/lpartners/'+userID;

        return this._http.get(url, { headers: headers }).map((res:Response) => res.json());
    }

    saveLogistic( BidID, partnerID, lvehicle, logisticPayment ){

        let headers = this._sharedService.getAuthorizationHeader();
        let url     = this._host +'/bid/logistic/'+BidID;
        
        let body = {
            lpartner:partnerID,
            vehicles:lvehicle,
            logisticPayment:logisticPayment
        };
        return this._http.put(url, body, { headers: headers }).map((res:Response) => res.json());
    }

    withdrawBid( bidID ) {
        
        let headers = this._sharedService.getAuthorizationHeader();        
        return this._http.delete(this._host +'/bids/'+ bidID,  { headers: headers }).map((res:Response) => res.json());
    }

    bidHistory(bidID){
        let headers = this._sharedService.getAuthorizationHeader();
        let url = this._host +'/bid/history/'+bidID;
        return this._http.get(url, { headers: headers}).map((res:Response) => res.json());
    }

    getDistance( origin = '', destination = '' ) {

        let api = tsConstants.GOOGLE_DISTANCE_API_KEY;

        let url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins='+origin+'&destinations='+destination+'&key='+api;
        // https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=mohali,phase+11,160062&destinations=phase+7,mohali,160072&key=AIzaSyB84_b3sz-C67ERkmEnQXAu_EglmB-AG1g
                
        // return this._http.get(url, {headers: headers}).map((res:Response) => res.json());

        return {
                    "destination_addresses": [
                        "7, Phase 1, Sector 55, Phase 1, Mohali Village, Sahibzada Ajit Singh Nagar, Punjab 160055, India"
                    ],
                    "origin_addresses": [
                        "Phase 11, Sector 65, Sahibzada Ajit Singh Nagar, Punjab, India"
                    ],
                    "rows": [
                        {
                            "elements": [
                                {
                                    "distance": {
                                        "text": "7.4 km",
                                        "value": 7427
                                    },
                                    "duration": {
                                        "text": "19 mins",
                                        "value": 1114
                                    },
                                    "status": "OK"
                                }
                            ]
                        }
                    ],
                    "status": "OK"
                };
    }
}
