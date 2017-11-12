import { Component, OnInit } from '@angular/core';
import { CenterdetailService } from './centerdetail.service';
import { Router,ActivatedRoute } from '@angular/router';

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
  ngOnInit() {
    this.yogaProfile();
  }

   yogaProfile(){
    this.yogaId = this._activateRouter.snapshot.params['id'];
    console.log("yogaId",this.yogaId);
    this._centerDetail.yogaDetail(this.yogaId).subscribe(res=>{
      console.log("data",res);
      if(res){
        this.profileData =res.data;
        console.log("profileData",this.profileData);
      }
    })
  }

  viewProfile(){
      let route = '/profile/'+this.yogaId;
      this._router.navigate([route]);
  }

}
