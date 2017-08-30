import { Component, OnInit, EventEmitter, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';

import { SharedService } from '../../shared/services/shared.service';
import { CropsService } from '../services/crops.service';

import { CookieService } from 'ngx-cookie';
import { FlashMessagesService } from 'ngx-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';

import { DialogService } from "ng2-bootstrap-modal";

import tsConstants = require('../../shared/config/tsconstant');
import tsMessages  = require('../../shared/config/tsmessage');

import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import * as Materialize from "angular2-materialize";

import { LanguageService } from '../../shared/services/language.service';
import { LanguageInterface } from '../../shared/classes/language-interface';

declare var jQuery:any;

@Component({
  selector: 'app-addupdate',
  templateUrl: './addupdate.component.html',
  styleUrls: ['./addupdate.component.css']
})
export class AddupdateComponent implements OnInit, AfterViewInit {
    @ViewChild('myInput')
    myInputVariable: any;
    public crops  =  {
                        availableFrom: null,
                        category_id: '',
                        availablePeriod: null,
                        availableUnit: 'Days',
                        category: '',
                        seller: '',
                        name: '',
                        variety: '',                        
                        quantityUnit: 'Kgs',
                        verified: 'No',
                        state: '',
                        district: '',
                        address: '',
                        city: '',
                        pincode: null,
                        quantity: '',
                        price: null,
                        grade: 'A+',                        
                        description: '',
                        images: [],
                        minBidAmount : '',
                        bidEndDate : null,
                        minBidQuantity: null,
                        bidQuantityUnit:"Tonnes",
                        taxRate: tsConstants.TAX_RATE,
                        efarmxComission: tsConstants.EFARMX_COMISSION,
                        documents:[]
                    }                    
    public isloading: boolean = true;

    private districts:any = [];
    private errorMessage = '';

    public selectedOption = "";
    public selectOptions  = [];
    public states         = [];

    private categories = [];
    private varieties  = [];
    public images      = [];
    private _host      = tsConstants.HOST;

    private date: DateModel;
    private options: DatePickerOptions;
    
    public cropID:any;
    private action:string = 'Add';
    public hasUser        = false;

    public isImageUploading: boolean = false;

    public language: LanguageInterface = new LanguageInterface;
    public availableDate: any;
    public availableDatee: any;
    public minDate = new Date();

    public quantities   = tsConstants.CROP_QUANTITIES;
    public units = '';

    constructor(
        private _dialogService:DialogService,  
        private _sharedService: SharedService,
        private _cd: ChangeDetectorRef,
        private _cropsService: CropsService,
        private _cookieService: CookieService,
        private _router: Router,
        private _flashMessagesService: FlashMessagesService,
        private _activateRouter: ActivatedRoute,
        private _languageService: LanguageService   ) {

            this._languageService.language.subscribe(language => {
				this.language.setLabels(language);
			});

    }
    
    ngAfterViewInit() {
        jQuery('#cropname').focus();
    }

    ngOnInit() {

        this.options = new DatePickerOptions({ format: 'DD/MM/YYYY', autoApply: true});                

        this.isloading  = true;       
        
        this.currentCropID();

        setTimeout(()=> {    
            this.getState();
            this.getAllCategories();

            this._cd.markForCheck();
        },1500);    

        /*this.availableDate  = new Date();
        this.availableDatee = new Date();*/

        this.availableDate  = this.setDefaultDate();
        this.availableDatee = this.setDefaultDate();

        let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();        
    }    

    addCrop() {
        this._sharedService.sendToTop();

        this.isloading = true;
        this.crops.category = this.crops.category_id;
        delete this.crops.category_id;

        /*Set Dates*/
        this.crops.availableFrom = this._sharedService.getISODate(this.availableDate);
        this.crops.bidEndDate = this._sharedService.getISODate(this.availableDatee);        

        if(this.cropID) {
            delete this.crops.seller;
            this._cropsService.update(this.crops).subscribe(res => {
                this.isloading = false;
                this._sharedService.showToast(this.language.getLabel('crop_updated_successfully'), tsConstants.COLOR_SUCESS);
                this._router.navigate(['/crops/mycrops']);
            },
            err => {
                this._sharedService.checkAccessToken(err, false);
            });
        }
        else{
            this._cropsService.postCrop(this.crops).subscribe( res => {
                this.isloading = false;
                if( res.success ) {
                   this._sharedService.showToast(this.language.getLabel( 'crop_added_successfully'), tsConstants.COLOR_SUCESS);
                }else{
                    this._sharedService.checkAccessToken(res.err);
                }
                this._router.navigate(['/crops/mycrops']);
            },
            err => {
                this._sharedService.checkAccessToken(err, false);
            });
        }
        
    }

    setDistrict( ): void {  
        /* reset values. */
        setTimeout(()=> {    
            this.districts         = null;
            if( this.action !== 'Edit' ){
                this.crops.district = null;
                this.crops.district = '';
            }
            /* Initialize category. */
            let stateName = this.crops.state; 

            if( stateName ){
                this.states.filter(obj => obj.stateName == stateName).map( obj => this.districts = obj.districts)
            }        
            this._cd.detectChanges();
            this._cd.markForCheck();
        },500);
    }

    setVarieties( ): void {  
        setTimeout(()=> {    
            /* reset values. */        
            this.varieties = null;  
            if( this.action !== 'Edit' ){
                this.crops.variety = null;
                this.crops.variety = '';        }
            
            /* Initialize category. */
            let categoryID = this.crops.category_id;        
            if( categoryID ){
                this.categories.filter(obj => obj.id == categoryID).map( obj => this.varieties = obj.variety)
            }        
            this._cd.detectChanges();
            this._cd.markForCheck();
        },500);    
    }
    
    uploadImage(imageResult: ImageResult) {
        let object = {
            data:imageResult.dataURL,
            type:'crops'
        }
        this.myInputVariable.nativeElement.value = "";
        this.isImageUploading = true;
        this._cropsService.uploadImage(object).subscribe( res => {
            this.isImageUploading = false;
            if(res.success) {
                this.crops.images.push(res.data.fullPath);
                this._cd.markForCheck();
            }else {
                this._sharedService.checkAccessToken(res.error);
            }
        },
        err => { 
            this.isImageUploading = false;
            this._sharedService.checkAccessToken(err, false);
        });
    }

    removeImage(image) {
        let index = this.crops.images.indexOf(image);
        if(index > -1) this.crops.images.splice(index,1);
        this._cd.markForCheck();
    }  

    getAllCategories(): void {
        this.categories = [];
        this._cropsService.getAllCategories().subscribe(res => {
            if( res.success ) {
                this.categories = res.data;
                if( this.cropID ){                
                    this.setVarieties();
                } 
            } else {
                this._sharedService.checkAccessToken(res.error);
            }
            this._cd.detectChanges();
            this._cd.markForCheck();
        },
        err => {
            this._sharedService.checkAccessToken(err, false);
        });
    }

    getState(): void {
        this._sharedService.getStates().subscribe(res => {
            this.isloading  = false;
            if( res.success ) {
                this.states = res.data;
                if( this.cropID ){                
                    this.setDistrict();
                }else{                    
                    this.setAddress();
                }
            }else{
                this._sharedService.checkAccessToken(res.error);
            }
            this._cd.markForCheck();
        },
        err => {
            this._sharedService.checkAccessToken(err, false);
        });
    }

    currentCropID(): void {
        this.cropID = this._activateRouter.snapshot.params['id'];
        if( this.cropID ){
            this._cropsService.get(this.cropID).subscribe(res => {
                console.log("res",res.data.bids)
                if(res.success) {

                    for(var i =0; i<res.data.bids.length; i++){
                        if(res.data.bids[i].status == "Accepted"){
                            this._router.navigate(['crops/mycrops']);
                        }
                    }
                    
                    this.crops = res.data;
                    
                    this.crops.category_id = res.data.category.id;
                    this.units             = res.data.quantity +' '+res.data.quantityUnit;

                    this.availableDate     = this._sharedService.getFormattedDate(this.crops.availableFrom);
                    this.availableDatee    = this._sharedService.getFormattedDate(this.crops.bidEndDate);

                    this.action = 'Edit';
                    if( !this.crops.images ){
                        this.crops.images  = [];
                    }
                    this._cd.markForCheck();
                } else {
                    this._sharedService.checkAccessToken(res.error);
                }
            },err => {
                this._sharedService.checkAccessToken(err, false);                
            })
        }
    }

    setAddress() {
        
        let userData: any= this._cookieService.getObject('userData');
        
        this.crops.address  = userData.address;
        this.crops.state    = userData.state;
        this.crops.city     = userData.city;
        this.crops.pincode  = userData.pincode;
        this.crops.district = userData.district;
       
        if( userData.state ) {
            let stateName = this.crops.state; 
            if( stateName ){
                this.states.filter(obj => obj.stateName == stateName).map( obj => this.districts = obj.districts)
            }      
        }
        this._cd.markForCheck();   
    }

    // setDate() {
    //     console.log("availableDate: ", this.availableDate );
    //     this.crops.availableFrom = this._sharedService.getISODate(this.availableDate);
    // }


    // setbidEndDate( ) {
    //     console.log("setbidEndDate: ", this.availableDatee );
    //     this.crops.bidEndDate = this._sharedService.getISODate(this.availableDatee);        
    // }


    // setDefaultDateObj() {
    //     this.crops.availableFrom = new Date();
    // }


    setQuantity():  void {

        let qtyUnit = this.units.split(' ');
        this.crops.quantity     = qtyUnit[0];
        this.crops.quantityUnit = qtyUnit[1];
        // let unit = this.units+''
        // if( unit == '700' ){
        //     this.crops.quantityUnit = 'Kgs';
        // } else {
        //     this.crops.quantityUnit = 'MT';
        // }

    }
    
    setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }

    setDefaultDate() {
        let date        = new Date();
        let currentDate = date.getDate() + '/' +(date.getMonth() + 1 )+ '/' +  date.getFullYear();

        return currentDate;
    }

}
