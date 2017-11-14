import { Component, OnInit } from '@angular/core';
import { CenterdetailService } from './centerdetail.service';
import { Router,ActivatedRoute } from '@angular/router';
import tsConstants = require('../shared/config/tsconstant');
@Component({
  selector: 'app-centerdetail',
  templateUrl: './centerdetail.component.html',
  styleUrls: ['./centerdetail.component.css'],
  providers:[CenterdetailService]
})
export class CenterdetailComponent implements OnInit {

  constructor( private _centerDetail:CenterdetailService, private _activateRouter:ActivatedRoute, private _router:Router) { }
  public profileData;
  public yogaId;
  public services;
  public obj;
  private _host = tsConstants.HOST;
  public name;
  public title;
  public detail;
  public phone;
  public email;
  public image;
  public address;
  public facebook;
  public instaa;
  public youtube;
  public array: any;
 
  ngOnInit() {
    this.yogaProfile();
  }

   yogaProfile(){
    this.yogaId = this._activateRouter.snapshot.params['id'];
    console.log("yogaId",this.yogaId);
    this._centerDetail.yogaDetail(this.yogaId).subscribe(res=>{
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

}
