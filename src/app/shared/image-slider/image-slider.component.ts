import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from '../services/shared.service';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import tsConstants = require('../../shared/config/tsconstant');
import tsMessages  = require('../../shared/config/tsmessage');

import * as Materialize from "angular2-materialize";

import { LanguageService } from '../services/language.service';
import { LanguageInterface } from '../classes/language-interface';

@Component({
	selector: 'image-slider',
	templateUrl: './image-slider.component.html',
	styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
	
	public galleryOptions: NgxGalleryOptions[];
    public galleryImages: NgxGalleryImage[];
    private _host = tsConstants.HOST;

    @Input() item:any;
    @Input() type:string;


	constructor() { }

	ngOnInit() {

		console.log("item ", this.item);
		console.log("Type ", this.type);

		this.galleryOptions = [
	        {
	            width: '600px',
	            height: '400px',
	            thumbnailsColumns: 3,
	            imageAnimation: NgxGalleryAnimation.Slide
	        },

	        {
	            breakpoint: 310,
	            width: '100%',
	            height: '300px',
	            imagePercent: 80,
	            thumbnailsPercent: 80,
	            thumbnailsMargin: 80,
	            thumbnailMargin: 80
	        },
	        // max-width 400
	        {
	            breakpoint: 310,
	            preview: true
	        }
        ];

        this.galleryImages = [
		    {
		        small: '',
		        medium: 'assets/img/no-image-available.jpg',
		        big: '',
		    }
        ];       

	}


	setGallery( ) {
        
        let images = this.item.images;
        this.galleryImages = [];       

        if( !images  ) {
            this.galleryImages = [
                {
                    small: 'assets/img/no-image-available.jpg',
                    medium: 'assets/img/no-image-available.jpg',
                    big: 'assets/img/no-image-available.jpg',
                }
            ];
        }else{

            if( images.length == 0 ){
                this.galleryImages = [
                    {
                        small: 'assets/img/no-image-available.jpg',
                        medium: 'assets/img/no-image-available.jpg',
                        big: 'assets/img/no-image-available.jpg',
                    }
                ];
            } else{            
                let baseUrl = this._host+'/images/'+this.type+'/';

                for (let i = 0; i < images.length; i++) {
                    this.galleryImages.push( {
                            small: baseUrl+images[i],
                            medium: baseUrl+images[i],
                            big: baseUrl+images[i],
                        });                   
                }
            }    
        }        
    }

    ngOnChanges() {    	
    	this.setGallery();
    }
	

}
