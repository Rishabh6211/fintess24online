import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import {DashboardService} from './dashboard.service'
import tsConstants = require('../shared/config/tsconstant');
@Component({
  templateUrl: 'dashboard.component.html',
  providers:[DashboardService]
})
export class DashboardComponent implements OnInit {

    public isLoggedIn: boolean = false;
    public isloading: boolean  = true;

    public userData:any;
    public userId;
    public array;
    private _host = tsConstants.HOST;
  constructor(private _cookieService: CookieService, private _dashboardService:DashboardService) { }

   ngOnInit(){
    this.profileLike();
    this.setData();
    
   
   }
     setData(): void {
        if( this._cookieService.get('token')){
            this.isLoggedIn = true;
            this.userData   = this._cookieService.getObject('userData');
            
        }
    }

    profileLike():void{
      this.userData   = this._cookieService.getObject('userData');
    this.userId = this.userData.id;
       console.log("user", this.userId)
      this._dashboardService.getProfile(this.userId).subscribe( res=> {
        if(res){
          this.array = res.message;
          console.log("array",this.array)
        }
        else{
          console.log("err")
        }
      })
    }


  }
