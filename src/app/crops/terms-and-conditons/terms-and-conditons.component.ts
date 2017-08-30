import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-terms-and-conditons',
  templateUrl: './terms-and-conditons.component.html',
  styleUrls: ['./terms-and-conditons.component.css']
})
export class TermsAndConditonsComponent implements OnInit {
	
	private type:string;
	private cropID: string;

	private termsAndConditonsType:string; 

  	constructor(
  		private _router: Router,
    	private _activateRouter: ActivatedRoute) { 
  	}

  	ngOnInit() {
  		this.cropID = this._activateRouter.snapshot.params['id'];
  		this.type   = this._activateRouter.snapshot.params['type'];

  		console.log("CropID ", this.cropID);
  		console.log("type ", this.type);

  		if( this.type == 'toc' ){
  			this.termsAndConditonsType = 'Terms & conditons';
  		} else {
  			this.termsAndConditonsType = 'Delivery conditons';
  		}

  	}
}
