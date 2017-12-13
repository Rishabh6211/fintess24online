import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'give-rating',
  templateUrl: './give-rating.component.html',
  styleUrls: ['./give-rating.component.css']
})
export class GiveRatingComponent implements OnInit {
    public ratingModal: ModalDirective;

@ViewChild('ratingModal') 

    public isPostingRating: boolean = false;
    public rating:number = 0;
    @Input() ratingUserID:string;
    public isRatingProcessed: boolean = false;  

    constructor(private _sharedService: SharedService) { }

    ngOnInit() {
        console.log("ratingUserID ", this.ratingUserID);
    }

    clickStar( givenStar ) {
        console.log("givenStar ", givenStar );
        this.rating = givenStar;
        console.log("rating",this.rating);
        console.log("ratingUserID ", this.ratingUserID);
    }

    submitRating() {
        
        //this.isPostingRating = true;

        console.log("submitRating ", this.rating);
        
        let data = {
            userID: this.ratingUserID,
            rating: this.rating
        }        
        console.log("data",data);
        this._sharedService.addRating(data).subscribe( res => {
            
           // this.isPostingRating = false;
            //this.isRatingProcessed = true;
            //this.rating = 0;

        }, 
        err => {
            
            this.isPostingRating     = false;
            this.isRatingProcessed   = true;
            this.rating = 0;
        });
    }

}
