import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Subscription} from 'rxjs/Subscription';
import { SlickModule } from 'ngx-slick';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { SharedService } from '../shared/services/shared.service';
import { LanguageService } from '../shared/services/language.service';

import { LanguageInterface } from '../shared/classes/language-interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    // providers: [LanguageService]
  
})

export class HomeComponent implements OnInit {
	public slides : SlickModule[]; 
    public slick:any; 

	public language: LanguageInterface = new LanguageInterface;

    public origin; 
    public destination;
    public distance;
    public slideConfig;
    public slickModal = '';
	constructor(  
        private _sharedService: SharedService,
		private _languageService: LanguageService,
	) {}

	ngOnInit() {
        this._languageService.language.subscribe( language => {
            this.language.setLabels(language);
        });

        this.slides = [
            {img: "http://placehold.it/350x150/000000"},
            {img: "http://placehold.it/350x150/111111"},
            {img: "http://placehold.it/350x150/333333"},
            {img: "http://placehold.it/350x150/666666"}
        ];
        this.slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
       // this.afterChange;
	}

    
    getData( ) {
        console.log("This is a test!");

        console.log("origin ", this.origin);
        console.log("destination ", this.destination);
        
        this._sharedService.getDistance(this.origin,this.destination).subscribe( res => {
            let response = res.json();

            // console.log( "response ", response );
            /*if( response == 'undefined' ) {
                this.distance = "Input address not valid";
            } else {
                this.distance = response.data.distances.rows.elements.distance.text;
            }*/

            if( response.success == "false" ) {
                console.log( "response1 ", response.message );
            } else {
                // console.log( "response3 ", response.data );
                console.log( "response4 ", response.data.distance.text );
                console.log( "response4 ", response.data.distance.value );
            }


        }); 
    }

}