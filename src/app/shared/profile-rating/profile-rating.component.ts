import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';

import tsConstants = require('../config/tsconstant');
@Component({
  selector: 'app-profile-rating',
  templateUrl: './profile-rating.component.html',
  styleUrls: ['./profile-rating.component.css']
})
export class ProfileRatingComponent implements OnInit {

  	@Input() userID:string = '';
	@Input() type:string = 'detail';

	private rating:number = null;
	
	private ratingClass:object = {
		one: 'fa fa-star-o',
		two: 'fa fa-star-o',
		three: 'fa fa-star-o',
		four: 'fa fa-star-o',
		five: 'fa fa-star-o'
	}

	private fullStar:string  = 'fa fa-star';
	private emptyStar:string = 'fa fa-star-o';
	private halfStar:string  = 'fa fa-star-half-full';
	

	

	constructor(  
		 
		private _sharedService: SharedService ) {

				

	}

	ngOnInit() {}

	ngOnChanges() {

		console.log("Rating give ", this.userID);
		this.getRating();
	}

	getRating() {
		
		this._sharedService.getRating( this.userID ).subscribe( res => {
			
			this.rating = res.data.rating;		
			this.setRatingStars();

		}, err => {
			console.log("Err ", err);
		});
	}

	setRatingStars() {
		
		if(this.rating != null ){
			switch(this.rating) {
				case 1:
					this.ratingClass['one'] = this.fullStar;
				    break;
				case 1.5:
					this.ratingClass['one'] = this.fullStar;
					this.ratingClass['two'] = this.halfStar;
				    break;
				case 2:
					this.ratingClass['one'] = this.fullStar;
					this.ratingClass['two'] = this.fullStar;
				    break;
				case 2.5:
					this.ratingClass['one']   = this.fullStar;
					this.ratingClass['two']   = this.fullStar;
					this.ratingClass['three'] = this.halfStar;
				    break;
				case 3:
					this.ratingClass['one']   = this.fullStar;
					this.ratingClass['two']   = this.fullStar;
					this.ratingClass['three'] = this.fullStar;
				    break;
				case 3.5:
					this.ratingClass['one']   = this.fullStar;
					this.ratingClass['two']   = this.fullStar;
					this.ratingClass['three'] = this.fullStar;
					this.ratingClass['four']  = this.halfStar;
				    break;        
				case 4:
					this.ratingClass['one']   = this.fullStar;
					this.ratingClass['two']   = this.fullStar;
					this.ratingClass['three'] = this.fullStar;
					this.ratingClass['four']  = this.fullStar;
				    break;
				case 4.5:
					this.ratingClass['one']   = this.fullStar;
					this.ratingClass['two']   = this.fullStar;
					this.ratingClass['three'] = this.fullStar;
					this.ratingClass['four']  = this.fullStar;
					this.ratingClass['five']  = this.halfStar;
				    break;        
				case 5:
					this.ratingClass['one']   = this.fullStar;
					this.ratingClass['two']   = this.fullStar;
					this.ratingClass['three'] = this.fullStar;
					this.ratingClass['four']  = this.fullStar;
					this.ratingClass['five']  = this.fullStar;
				    break;
				default:
					this.ratingClass['one']   = this.emptyStar;
					this.ratingClass['two']   = this.emptyStar;
					this.ratingClass['three'] = this.emptyStar;
					this.ratingClass['four']  = this.emptyStar;
					this.ratingClass['five']  = this.emptyStar;
					break;
			}
		}
	}

}
