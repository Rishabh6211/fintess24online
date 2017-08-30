import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import { Component, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';

import { SharedService } from '../../shared/services/shared.service';
import { WishlistService } from '../services/wishlist.service';

import { LanguageService } from '../../shared/services/language.service';
import { LanguageInterface } from '../../shared/classes/language-interface';

import tsConstants = require('../../shared/config/tsconstant');

@Component({
  selector: 'app-mywishlist',
  templateUrl: './mywishlist.component.html',
  styleUrls: ['./mywishlist.component.css']
})
export class MywishlistComponent implements OnInit {

  public isloading:boolean = false;

    public inputs = [];
    public total  = 10;
    public wishlist;

    private _host = tsConstants.HOST;
    public language: LanguageInterface = new LanguageInterface;
    public wishlists: any;
    public singlewishlist: any;

    constructor( 
		private _wishlistService: WishlistService,
		private _cd: ChangeDetectorRef,
        private _sharedService: SharedService,
        private _languageService: LanguageService ) {

                this._languageService.language.subscribe(language => {
                    this.language.setLabels(language);
                });
         }    

    ngOnInit() {
        this.showWishlist();
        let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();
    }

    setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }

    showWishlist(  ){
        this._sharedService.userWishlist().subscribe( res => {
            console.log("res",res)
            if(res.success == true){
                this.wishlist = res.data.data;
                console.log("wish",this.wishlist)
                this._cd.markForCheck();
            } else {
                this._sharedService.showToast(this.language.getLabel('please_login_to_see_wishlist'), tsConstants.COLOR_DANGER);
                this._cd.markForCheck();
            }
        }, err => {
            console.log("err",err)
            this._cd.markForCheck();
        })
    }

    removeWishlist() {
        this.isloading = true;
        this._sharedService.deleteWishlist("product_id").subscribe( res => {
            this.isloading = false;
            console.log("res",res);
            this._cd.markForCheck();
        }, err => {
            console.log("err",err);
            this._cd.markForCheck();
        })
    }

}
