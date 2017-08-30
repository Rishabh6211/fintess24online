import { Component, OnInit, EventEmitter, ChangeDetectorRef, ViewChild } from '@angular/core';

import { SharedService } from '../../shared/services/shared.service';
import { EquipmentService } from '../services/equipment.service';

import { CookieService } from 'ngx-cookie';
import { FlashMessagesService } from 'ngx-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';

import tsConstants = require('../../shared/config/tsconstant');
import tsMessages  = require('../../shared/config/tsmessage');

import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import * as Materialize from "angular2-materialize";

import { LanguageService } from '../../shared/services/language.service';
import { LanguageInterface } from '../../shared/classes/language-interface';

@Component({
  selector: 'app-addupdate',
  templateUrl: './addupdate.component.html',
  styleUrls: ['./addupdate.component.css']
})
export class AddupdateComponent implements OnInit {
    @ViewChild('myInput')
    myInputVariable: any;
    public equipments  =  {
                        availableFrom: {
                            "day" : null,
                            "year" : null,
                            "month" : null,
                            "formatted" : null,
                            "momentObj" :null
                        },                        
                        availablePeriod: null,
                        availableUnit: 'Hour',
                        category: '',
                        user: '',
                        name: '',
                        variety: '',                        
                        type: 'rent',
                        state: '',
                        district: '',
                        address: '',
                        city: '',
                        pincode: null,
                        quantity: '',
                        price: null,
                        priceUnit:'Hour',
                        modelyear: '',
                        model: '',
                        description: '',
                        manufacturer: '',
                        images: [],
                        verified: 'No'
                    };

    public manufacturerID: string = '';                                    
    public categoryID:  string = '';

    public isloading: boolean = true;

    private districts:any = [];
    private errorMessage = '';

    public selectedOption = "";
    public selectOptions  = [];
    public states         = [];
    private years = [];
    private currentYear = new Date().getFullYear();
    private manufacturers:any = [];

    private categories = [];
    private varieties  = [];
    public images      = [];
    private _host      = tsConstants.HOST;

    private date: DateModel;
    private options: DatePickerOptions;
    
    public equipmentID:any;
    private action:string = 'Add';
    public hasUser        = false;

    public isImageUploading: boolean = false;

    public language: LanguageInterface = new LanguageInterface;
    public availableDate: any;
    public minDate = new Date();

    constructor(  
        private _sharedService: SharedService,
        private _cd: ChangeDetectorRef,
        private _equipmentsService: EquipmentService,
        private _cookieService: CookieService,
        private _router: Router,
        private _flashMessagesService: FlashMessagesService,
        private _activateRouter: ActivatedRoute,
        private _languageService: LanguageService   ) {

            this._languageService.language.subscribe(language => {
				this.language.setLabels(language);
                  
			});
            

    }

    ngOnInit() {

        this.options = new DatePickerOptions({ format: 'DD/MM/YYYY', autoApply: true});                

        this.isloading  = true;       
        
        this.currentEquipmentID();

        setTimeout(()=> {    
            this.getState();
            this.getAllCategories();

            this._cd.markForCheck();
        },1500);    

        /*set current date as default.*/
        this.setDateForRent();

        let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();

        /*create years array. */
        this.years.push(this.currentYear);
        for (var i = 1; i <= 50; i++) {
            this.years.push(this.currentYear - i);
        }

        this._sharedService.getAllManufactures().subscribe( res => { 
            this.manufacturers = res.data;              
        }, 
        err => { });
    }    

    addEquipment() {
        this._sharedService.sendToTop();

        this.isloading = true;
        this.equipments.category     = this.categoryID;        
        this.equipments.manufacturer = this.manufacturerID;

        if(this.equipmentID) {
            delete this.equipments.user;
            this._equipmentsService.update(this.equipments).subscribe(res => {

                this.isloading = false;                
                this._sharedService.showToast(this.language.getLabel('equipment_updated_successfully'), tsConstants.COLOR_SUCESS);       
                this._router.navigate(['/equipments/myequipments']);

            },
            err => {
                //this._sharedService.checkAccessToken(err, false);
            });
        }
        else{
            this._equipmentsService.postEquipment(this.equipments).subscribe( res => {
                console.log(this.equipments);
                this.isloading = false;
                if( res.success ) {
                	
                  this._sharedService.showToast(this.language.getLabel('equipment_added_successfully'), tsConstants.COLOR_SUCESS);

                }else{
                    this._sharedService.checkAccessToken(res.err);
                }
                this._router.navigate(['/equipments/myequipments']);
            },
            err => {
               this._sharedService.checkAccessToken(err, false);
            });
        }
        
    }

    setDistrict( ): void {  
        /* reset values. */
        setTimeout(()=> {    
            this.districts = null;
            if( this.action !== 'Edit' ){
                this.equipments.district = null;
                this.equipments.district = '';
            }
            
            /* Initialize category. */
            let stateName = this.equipments.state;            
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
                this.equipments.variety = null;
                this.equipments.variety = '';        }
            
            /* Initialize category. */
            let categoryID = this.categoryID;        
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
            type:'equipments'
        }
        this.myInputVariable.nativeElement.value = "";
        this.isImageUploading = true;
        this._equipmentsService.uploadImage(object).subscribe( res => {
            this.isImageUploading = false;
            if(res.success) {
                this.equipments.images.push(res.data.fullPath);
        
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
        let index = this.equipments.images.indexOf(image);
        if(index > -1) this.equipments.images.splice(index,1);
        this._cd.markForCheck();
    }  

    getAllCategories(): void {
        this.categories = [];
        this._equipmentsService.getAllCategories().subscribe(res => {
            if( res.success ) {
                this.categories = res.data;
                if( this.equipmentID ){                
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
                if( this.equipmentID ){                
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

    currentEquipmentID(): void {
        this.equipmentID = this._activateRouter.snapshot.params['id'];
        if( this.equipmentID ){
            this._equipmentsService.get(this.equipmentID).subscribe(res => {
                if(res.success) {
                    
                    this.equipments     = res.data;

                    console.log("this.equipments.availableFrom.formatted ", this.equipments.availableFrom.formatted);
                    if( this.equipments.availableFrom.formatted == null || this.equipments.availableFrom.formatted == 'undefined' ){
                        this.setDateForRent();
                        if(this.equipments.type == 'sell'){
                            this.availableDate = '';    
                        }                        
                    } else {
                        this.availableDate  = this.equipments.availableFrom.formatted;
                        if(this.equipments.type == 'sell'){
                            this.availableDate = '';    
                        } 
                    }                    

                    this.manufacturerID = res.data.manufacturer.id
                    this.categoryID     = res.data.category.id

                    this.action = 'Edit';
                    if( !this.equipments.images ){
                        this.equipments.images  = [];
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
        
        this.equipments.address  = userData.address;
        this.equipments.state    = userData.state;
        this.equipments.city     = userData.city;
        this.equipments.pincode  = userData.pincode;
        this.equipments.district = userData.district;
       
        if( userData.state ) {
            let stateName = this.equipments.state; 
            if( stateName ){
                this.states.filter(obj => obj.stateName == stateName).map( obj => this.districts = obj.districts)
            }      
        }
        this._cd.markForCheck();   
    }

    setDate() {

        console.log(this.availableDate);
        if( this.availableDate !== '' ){
            var pattern   = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
            var arrayDate = this.availableDate.match(pattern);
            var dt        = new Date(arrayDate[3], arrayDate[2], arrayDate[1]);
            var dt1       = new Date(arrayDate[3], arrayDate[2]-1, arrayDate[1]);
            let monObj1   = dt1.toISOString();

            let date = {
                "day" : dt.getDate(),
                "year" : dt.getFullYear(),
                "month" : dt.getMonth(),
                "formatted" : this.availableDate,
                "momentObj" : monObj1
            }
            
            this.equipments.availableFrom = date;
            console.log(date)
        }else{
            console.log("No Date Selected.")
            let date = {
                "day" : null,
                "year" : null,
                "month" : null,
                "formatted" : null,
                "momentObj" : null
            }
        }

    }

    setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }


    setDateForRent() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!

        let yyyy = today.getFullYear();

        let formattedDate = dd+'/'+mm+'/'+yyyy;

        this.availableDate = formattedDate;
        this.setDate();
    }
    resetTypes() {
        this.availableDate = ''; 
        this.equipments.availablePeriod=null;
    }

}
