import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import { Component, OnInit, EventEmitter, ChangeDetectorRef, ViewChild, AfterViewInit  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';

import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';

import { SharedService } from '../../shared/services/shared.service';
import { CropsService } from '../services/crops.service';

import tsConstants = require('../../shared/config/tsconstant');
import tsMessages  = require('../../shared/config/tsmessage');

import * as Materialize from "angular2-materialize";

import { LanguageService } from '../../shared/services/language.service';
import { LanguageInterface } from '../../shared/classes/language-interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, AfterViewInit {

    private _host = tsConstants.HOST;    
    private _accessToken;    

    public isloading: boolean = true;

    public crop: any  = {};
    public totalCrops = 0;
    public cropID     = '';
    public message: string;
    public amount: number;
    public quantity:any;
    public bids: any;
    public highestBid: number = 0;
    public myBidAmmount: number = 0;
    public totalBids: number;

    public userID: string;
    public bidId: string = null;
    
    public isHidden: boolean = false;
    public isMyCrop: boolean = false;

    public heart: boolean = false;
    public heartO : boolean = true;
    public wishlist: any;
    public productID: any;

    public totalPrice:number = 0;
    public inputs:number = 1;

    public taxesRate: number         = 10;
    public efarmCommission: number   = 10;
    public upfrontPercent: number    = 10;
    public bidEarnestPercent: number = 10;


    public language: LanguageInterface = new LanguageInterface;

    public quantities             = tsConstants.CROP_QUANTITIES;
    public selectableQuantities   = tsConstants.CROP_QUANTITIES;
    public logisticsOption:string = 'self';
    public agree:boolean          = false;
    public termsAndCon:boolean    = false;
    public deliveryAgree:boolean  = false;

    public bidCode:string         = '';
    public responseMessage        = '';

    public isAccepted:boolean     = false;
    public isDelivered:boolean    = false;    
    
    public isProcessing:boolean   = false;    

    public bidStatus:string       = 'Pending';

    public selectedAddress:string  = '';
    public deliveryCharges: number = 0;

    public originAddresses: any;
    public destinationAddresses: any;
    public totalDistance: any;

    public totalDistanceValue;
    public logisticsRate;

    public upfrontPayment:number       = 0;
    public balancePayment:number       = 0;
    public logisticPayment:number      = 0;
    public farmerBalancePayment:number = 0;
    public farmerUpfrontPayment:number = 0;
    public earnestAmount:number        = 0;
    public taxAmount:number            = 0;

   
    

    @ViewChild('successModal') public successModal: ModalDirective; 
    @ViewChild('newModal') public newModal: ModalDirective; 

 	
    constructor( 
        private _cropsService: CropsService,
        private _cd: ChangeDetectorRef,
        private _router: Router,
        private _activateRouter: ActivatedRoute,
        private _cookieService: CookieService,
        private _languageService: LanguageService, 
        private _sharedService: SharedService  ) { 
            
            this._languageService.language.subscribe(language => {
                this.language.setLabels(language);
            });
    }


	ngOnInit() {
        this.getsinglecrop();
        this.getWishlist();

        let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();        
    
	}

    ngAfterViewInit() {
        // this.successModal.show();
    }

    getsinglecrop( ): void {
        this.cropID = this._activateRouter.snapshot.params['id'];
        this.isloading = true;
        this._cropsService.get( this.cropID ).subscribe( res => {
            this.isloading = false;
            if( res.success ) {
                this.crop = res.data;
                this.bids = res.data.bids;
               
                this.taxesRate         = res.data.taxRate;
                this.efarmCommission   = res.data.efarmxComission;

                this.upfrontPercent    = res.data.upfrontPercent;
                this.bidEarnestPercent = res.data.bidEarnestPercent;

                this.originAddresses   = this.getOriginAddress(res.data);

                this.setSelectableQuantities(this.crop);

                this.totalBids = (this.bids) ? this.bids.length : 0;

                
                if( this.bids ){ 
                    this.getBidAmount();
                    this.getHigestBid();                    
                }    
                this.userID = this._sharedService.getCurrentUserID()
                
                if( this.userID == this.crop.seller.id ){
                    this.isMyCrop = true;
                }                
                this._cd.markForCheck();
            } else {
                this._sharedService.checkAccessToken(res.error);
            }
        },
        err => {
            this.isloading = false;
            this._sharedService.checkAccessToken(err, false);            
        });
    }
    
    placeBid( ): void {

        this.newModal.hide();
        this._sharedService.sendToTop();
        
        let bidOptions: any = [];
     

        this.upfrontPayment       = (this.amount * this.upfrontPercent / 100);
        this.balancePayment       = ((( this.taxesRate/100 * this.amount ) + ( this.efarmCommission/100 * this.amount ) + this.amount ) - ( this.bidEarnestPercent/100 * this.amount ) - ( this.upfrontPercent/100 * this.amount )  + this.deliveryCharges );
        this.logisticPayment      = this.deliveryCharges;

        this.farmerUpfrontPayment = (this.upfrontPayment - ( this.upfrontPayment * this.efarmCommission/100 ));
        this.farmerBalancePayment = (this.balancePayment -(this.balancePayment * this.efarmCommission / 100));

        this.earnestAmount        = (this.amount * this.bidEarnestPercent / 100);  
        this.taxAmount            = (this.amount * this.taxesRate/100  );


        bidOptions['upfrontPayment']       = this.upfrontPayment;
        bidOptions['balancePayment']       = this.balancePayment;
        bidOptions['logisticPayment']      = this.logisticPayment;
        
        bidOptions['farmerUpfrontPayment'] = this.farmerUpfrontPayment;
        bidOptions['farmerBalancePayment'] = this.farmerBalancePayment;
        
        bidOptions['earnestAmount']        = this.earnestAmount;
        bidOptions['taxAmount']            = this.taxAmount;
        bidOptions['address']              = this.selectedAddress;

        bidOptions['totalDistance']        = this.totalDistance;
        bidOptions['deliveryCharges']      = this.deliveryCharges;

        
        this.isloading = true;
        this._accessToken   = this._cookieService.get('accesstoken');
        if(!this._accessToken) {
            
            this._sharedService.showToast(this.language.getLabel('to_place_bid_on_this_crop_please_login'), tsConstants.COLOR_DANGER);            
            this._router.navigate(['/login']);
        } else {


            if( this.bidId == null ) {

                    this.isloading = true;            
                    this.cropID = this._activateRouter.snapshot.params['id'];            
        
                    this._cropsService.placeMyBid(this._sharedService.getCurrentUserID(), this.cropID, this.amount, this.quantity, this.logisticsOption, bidOptions ).subscribe( res => {
                        this.isloading = false;
                        if( res.success ) {
                            //this.message = res.data;
                            this.isHidden        = true;
                            this.myBidAmmount    = this.amount;
                            this.bidCode         = res.data.bid.code;
                            this.responseMessage = res.data.message;
                            this.agree           = false;
                            this.termsAndCon     = false;
                            this.deliveryAgree   = false;
                            // this.bidStatus       = res.data.bid.status
                            
                            // if( this.bidStatus == 'Accepted' || this.bidStatus == 'Delivered'  ){
                            //     this.isProcessing = true;        
                            // }

                            this.totalBids += 1;
                            this._cd.markForCheck();

                            /* assign created bid id. */
                            this.bidId = res.data.bid.id;
                            
                            if( this.myBidAmmount > this.highestBid ) {
                                this.highestBid = this.myBidAmmount;
                            }
                            this._sharedService.showToast(this.language.getLabel(this.responseMessage), tsConstants.COLOR_SUCESS);

                            let bidID = res.data.bid.id;

                            this.successModal.show();
                            /*this._cookieService.put('bidID', res.data.bid.id);
                            this._cookieService.put('cropID', this.cropID);
                            this._router.navigate(['/crops/logistics/'+this.cropID+'/'+bidID]);*/

                        } else{
                            this.isloading = false;
                            this._sharedService.checkAccessToken(res.error);
                        }               
                        this._cd.markForCheck();            
                    },err => {
                        this.isloading = false;                
                        this._sharedService.checkAccessToken(err, false);
                        this._cd.markForCheck();
                    });
             } else {
                this.isloading = true;
                
                this._cropsService.updateMyBid(this.bidId, this.amount, this.quantity, this.logisticsOption, bidOptions ).subscribe( res => {
                        this.isloading = false;
                                        
                        if( res.success ) {
                            
                            this.isHidden        = true;
                            this.myBidAmmount    = this.amount;
                            this.bidCode         = res.data.bid.code;
                            this.responseMessage = res.data.message;
                            this.agree           = false;
                            this.termsAndCon     = false;
                            this.deliveryAgree   = false;
                            // this.bidStatus       = res.data.bid.status
                            
                            // if( this.bidStatus == 'Accepted' || this.bidStatus == 'Delivered'  ){
                            //     this.isProcessing = true;        
                            // }

                            this._cd.markForCheck();

                            if( this.myBidAmmount > this.highestBid ) {
                                this.highestBid = this.myBidAmmount;
                            }
                            this._sharedService.showToast(this.language.getLabel(this.responseMessage), tsConstants.COLOR_SUCESS);
                            this.successModal.show();
                           
                        } else{
                            this.isloading = false;
                            this._sharedService.checkAccessToken(res.error);
                        }               
                        this._cd.markForCheck();            
                    },
                    err => {                
                        this.isloading = false;
                        this._sharedService.checkAccessToken(err, false);
                        this._cd.markForCheck();
                    });
             }
            
            
        }
        
    }

    
    getBidAmount() {

        let currentUserID = this._sharedService.getCurrentUserID();

        for (var i = 0; i < this.bids.length; ++i ) {
            
            if( currentUserID == this.bids[i].user.id ) {
                
                this.myBidAmmount    = Number(this.bids[i].amount);
                this.amount          = Number(this.myBidAmmount);
                this.isHidden        = true;
                this.bidId           = this.bids[i].id;
                this.logisticsOption = this.bids[i].logisticsOption;
                this.quantity        = this.bids[i].quantity+"";
                this.bidCode         = this.bids[i].code;
                this.bidStatus       = this.bids[i].status;
                this.selectedAddress = this.bids[i].address;
                this.totalDistance   = this.bids[i].totalDistance;
                this.deliveryCharges = this.bids[i].deliveryCharges;
                            
                if( this.bidStatus == 'Accepted' || this.bidStatus == 'Delivered'  ){
                    this.isProcessing = true;        
                }
            }                     
        }
    }


    getHigestBid(): void {
        this.highestBid   = 0;
        let bidAmounts    = [];

        for (var i = 0; i < this.bids.length; ++i ) {            
            bidAmounts.push(this.bids[i].amount);            
        }

        if(bidAmounts.length > 0 ) {
            this.highestBid = Math.max(...bidAmounts);
        }
    }
    

    setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }

    saveWishlist( cropID ){
        this.isloading = true;
        this._accessToken   = this._cookieService.get('accesstoken');
        if(!this._accessToken) {
            
            this._sharedService.showToast(this.language.getLabel('please_login_to_add_wishlist'), tsConstants.COLOR_DANGER);            
            this._router.navigate(['/login']);
        } else {
            if(this.heart == true){
                this._sharedService.deleteWishlist("product_id").subscribe( res => {
                    this.isloading = false;
                    this._cd.markForCheck();
                }, err => {
                    this.isloading = false;
                    this._sharedService.checkAccessToken(err, false);
                    this._cd.markForCheck();
                })
            } else {
                this._sharedService.addWishlist(cropID, "crops").subscribe( res => {
                    if(res.success = true){
                        this.isloading = false;
                        this.heart = true;
                        this.heartO = false; 
                        this._cd.markForCheck();
                    } else {
                        this.isloading = false;
                        this._sharedService.showToast(this.language.getLabel('error_adding_wishlist'), tsConstants.COLOR_DANGER);
                        this._cd.markForCheck();
                    }
                }, 
                err => {
                    this.isloading = false;
                    this._sharedService.checkAccessToken(err, false);
                    this._cd.markForCheck();
                })
            }
        }
    }

    getWishlist(){
        this._sharedService.userWishlist().subscribe( res => {
            if(res.success == true){    
                this.wishlist = res.data.data
                this.productID = this._activateRouter.snapshot.params['id'];
                for(var i=0; i<this.wishlist.length; i++){
                    if(this.wishlist[i].product_id == this.productID){
                        this.heart = true;
                        this.heartO = false; 
                    }
                }
                this._cd.markForCheck();
            } else {
                this._cd.markForCheck();
            }
        }, err => {
            this.isloading = false;
            this._sharedService.checkAccessToken(err, false);
        })
    }


    setSelectableQuantities( crop ) {

        let quantityUnit =  crop.quantity+' '+crop.quantityUnit;
        
        this.selectableQuantities = [];
        for ( var index in this.quantities ) {
            this.selectableQuantities.push(this.quantities[index]);
            if( this.quantities[index]['name'] == quantityUnit )
                break;
        }
    }

    _keyPress(event: any) {
        const pattern = /[0-9\.]/;
        let inputChar = String.fromCharCode(event.charCode);

        if (!pattern.test(inputChar)) {
          // invalid character, prevent input
          event.preventDefault();
        }
    }

    changeSelectedAddress( address ) {
        this.selectedAddress = address;
    }

    changeLogistics(){
        
        this.selectedAddress    = '';
        this.totalDistance      = '';
        this.totalDistanceValue = '';
        this.logisticsRate      = 0;
        this.deliveryCharges    = 0;

        if( this.logisticsOption == 'efarmx'){
            this.deliveryCharges = 0;
        }else {
            this.deliveryCharges = 0;     
        }
    }

    /*get Estimated distance. */
    getDistance( ) {  

        this.totalDistance      = '';
        this.totalDistanceValue = '';
        this.logisticsRate      = 0;
        this.deliveryCharges    = 0;

        let origin              = this.originAddresses;
        let destination         = this.selectedAddress;
        let weight              = this.quantity;

        
        this._sharedService.getDistance(origin, destination, weight).subscribe( res => {
            let response = res.json();

            if( response.success == "false" ) {
                this.totalDistance = response.message;
            } else {

                this.totalDistance      = response.data.distance.text;
                this.totalDistanceValue = response.data.distance.value;
                this.logisticsRate      = response.data.rate;
                this.deliveryCharges    = this.logisticsRate;
            }
        }); 
        
    }

    getOriginAddress( data ) {
        // let address = data.address+', '+data.city+', '+data.district+', '+data.state+', '+data.pincode;
        let address = data.city+', '+data.district+', '+data.state+', '+data.pincode;
        // address = address.replace(/ /g, "+");
        return address;
    }
}