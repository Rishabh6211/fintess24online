import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { CenterdetailService } from './centerdetail.service';
import { Router,ActivatedRoute } from '@angular/router';
import tsConstants = require('../shared/config/tsconstant');
import { CookieService } from 'ngx-cookie';
//import {GiveRatingComponent} from '../shared/give-rating/give-rating.component'
import { SharedService } from '../shared/services/shared.service';
import {OnClickEvent, OnRatingChangeEven, OnHoverRatingChangeEvent} from "angular-star-rating/star-rating-struct";
@Component({
  selector: 'app-centerdetail',
  templateUrl: './centerdetail.component.html',
  styleUrls: ['./centerdetail.component.css'],
  providers:[CenterdetailService]
})
export class CenterdetailComponent implements OnInit {

  public profileData;
  public yogaId;
  public services;
  public obj;
  private _host = tsConstants.HOST;
  public array: any;
  public isloading = false;
  public repoUrl;
  public Id;
  public centerId;
  public heart: boolean = false;
  public heartO : boolean = true;
  public count;
  public view;
  public view1="view";
  public IppDetails;
  public errorMessage;
  public message1;
  public message2;
  public record = {
    userId : '',
    centerId:''
  }
  private _pageUrl:string;
  constructor( private _centerDetail:CenterdetailService,
   private _activateRouter:ActivatedRoute,
    private _router:Router,
    private _cookieService: CookieService,
    private _cd:ChangeDetectorRef,
    private _sharedService:SharedService) { }
 onClickResult:OnClickEvent;
    onHoverRatingChangeResult:OnHoverRatingChangeEvent;
    onRatingChangeResult:OnRatingChangeEven;
  ngOnInit() {
    this.record.userId = this._cookieService.get('userId');
    this.record.centerId = this._activateRouter.snapshot.params['id']; 
    console.log("userId",this.record.userId);
    console.log("centerId",this.record.centerId);
    this.likeDetail();
    this.likeCount();
   
    this.repoUrl = this._host+window.location.pathname;
    this.yogaProfile();
    this.productView();
    this.countView();
    this._pageUrl = "profile/"+this._activateRouter.snapshot.params['id'];
  }


 
    onClick = ($event:OnClickEvent) => {
        console.log('onClick $event: ', $event);
        this.onClickResult = $event;
    };
 
    onRatingChange = ($event:OnRatingChangeEven) => {
        console.log('onRatingUpdated $event: ', $event);
        this.onRatingChangeResult = $event;
    };
 
    onHoverRatingChange = ($event:OnHoverRatingChangeEvent) => {
        console.log('onHoverRatingChange $event: ', $event);
        this.onHoverRatingChangeResult = $event;
    };
   yogaProfile(){
    this.isloading = true;
    this.yogaId = this._activateRouter.snapshot.params['id'];
    console.log("yogaId",this.yogaId);
    this._centerDetail.yogaDetail(this.yogaId).subscribe(res=>{
      this.isloading = false;
      console.log("data",res);
      
      if(res){
        this.profileData = res.data.success;
        //this.obj = this.profileData.success;
        


        console.log("obj",this.obj);
        console.log("profileData",this.profileData);
        let array1 = [];
        for(var i=0; i<this.profileData.services.length;i++){
          this.services = this.profileData.services[i];
          array1.push(this.services);
          console.log("i",this.services, array1)

        }
        this.array = array1;
      }
    })
  }

  viewProfile(){
      let route = '/profile/'+this.yogaId;
      this._router.navigate([route]);
  }

  likeProfile(){
    if(this.record.userId ){
    this.isloading = true;
      this._centerDetail.addLike(this.record).subscribe(res=>{
        this.isloading = false;
        this.heart = true;
        this.heartO = false;  
        this._cd.markForCheck();
        this.likeDetail();
        this.likeCount();
        console.log("res",res);
      })

    }
    else{
       this._sharedService.setReferer(this._pageUrl);
    }
  }

  likeDetail(){
    if(!this.record.userId){
      this.heart = false;
      this.heartO = true;
    }
    else {
      this._centerDetail.likeDetail(this.record.centerId,this.record.userId).subscribe(res=>{
        console.log("res",res);
        if(res.code===200){        
         this.heart = true;
         this.heartO = false; 
        }
        else if(res.code==400){
          this.heart = false;
          this.heartO = true;
        }
        else{
          
          console.log("error");
        }
      })
    }
  }
  likeCount(){
    console.log("like detail",this.record.centerId)
    this._centerDetail.countLike(this.record.centerId).subscribe(res=>{
      if(res){
        this.count = res.count;
        console.log("count",this.count)
      }
      else{
        console.log("error");
      }
    })

  }

  productView(){
    this._centerDetail.view(this.record.centerId).subscribe(res=>{
      console.log(res);
    })
  }

  countView(){
    console.log("in view");
    this._centerDetail.countView(this.record.centerId).subscribe(res=>{
      if(res){
        this.view = res.count;
        console.log("count",this.count)
      }
      else{
        console.log("error");
      }      
    })
  }
   mouseEnter(){
     this.message1 = "view1";
     
   }
   mouseLeave(div : string){

    this.message2 = '';
    
   }
 
}
