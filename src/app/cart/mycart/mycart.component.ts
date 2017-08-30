import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import { Component, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';

import { SharedService } from '../../shared/services/shared.service';
import { CartService } from '../services/cart.service';

import { LanguageService } from '../../shared/services/language.service';
import { LanguageInterface } from '../../shared/classes/language-interface';

import tsConstants = require('../../shared/config/tsconstant');

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  public isloading:boolean = false;

    public inputs = [];
    public total  = 10;

    private _host = tsConstants.HOST;
    public language: LanguageInterface = new LanguageInterface;
    public carts: any;
    public singleCart: any;
    public cartId:any; 

    constructor( 
		private _cartService: CartService,
		private _cd: ChangeDetectorRef,
        private _sharedService: SharedService,
        private _languageService: LanguageService ) {

                this._languageService.language.subscribe(language => {
                    this.language.setLabels(language);
                });
         }    

    ngOnInit() {
        this.getAllBids();
        let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();
    }

    setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }

    getAllBids() {
        this.isloading = true;
        this._cartService.getAllBids().subscribe( res => {
            this.isloading = false;
            if( res.success ) {
                console.log("res",res.data)
                this.cartId = res.data.id
                let cartArray    = [];

                for(var i = 0; i<res.data.length; i++){

                    if( res.data[i].input ){
                        this.carts = res.data[i].input
                        cartArray.push(this.carts) 
                    } else {
                        this.carts = res.data[i].equipment
                        cartArray.push(this.carts)
                    }
                        this.singleCart = cartArray
                        console.log(this.singleCart);
                }
                
            } else {
                this._sharedService.checkAccessToken(res.error)
            }
            this._cd.markForCheck();
        }, err => {
            this._sharedService.checkAccessToken(err, false);
        })
    }
    removeEquipment(cartID){
         if(confirm("Do you want to delete?")) {
            this.isloading = true;
            console.log("cartid",cartID)
            this._cartService.delete(cartID).subscribe(res => {           
            this.isloading = false;
            //this._cookieService.put('cropAlert', 'Deleted successfully.');
            this._sharedService.showToast(this.language.getLabel('deleted_successfully'), tsConstants.COLOR_SUCESS);
            this._sharedService.sendToTop();
            this.getAllBids();
            },err => {
                this.isloading = false;
        })
        }
    }

}
