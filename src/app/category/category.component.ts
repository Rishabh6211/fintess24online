import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
//import {StringFilterPipe} from './filter';
import { Router,ActivatedRoute } from '@angular/router';
import * as jQuery from 'jquery';
import  { CategoryService } from './category.service'
import tsConstants = require('../shared/config/tsconstant');

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {
  @Input('data')

	private _host = tsConstants.HOST;
	public yoga = 'yoga';
	public isloading = false;
 // public term;
	public data:string[];
  public data1:any;
  public Gym = 'gym';
  public data2:any;
  public physiotherapy = 'physiotherapy';
	constructor(private _categoryService:CategoryService,private _router:Router) { }

	ngOnInit() {
    //console.log("filter",StringFilterPipe)
		this.findYoga();
    this.Physio();
    this.gym();
	}

	setTab( $event ) {
		console.log( "item ", $event );
		let ID = "#"+$event.target.value;
		jQuery('.tab-pane').removeClass('active');
		jQuery(ID).addClass('active');
		// jQuery()
	}

	findYoga(){
  	this.isloading = true;
  	this._categoryService.getYoga(this.yoga).subscribe(res => {
      this.isloading = false;
  		if(res){
  		//this.isloading = false;	
  			this.data = res.data;
  			console.log("data",this.data);
  		}
  		else{
  			console.log("err");
  		}
  	},
  	err=>{
  			console.log("server error");
  	});
  }
  Physio(){

    this.isloading = true;
    this._categoryService.getPhysiotherapy(this.physiotherapy).subscribe(res => {
      this.isloading = false;
      if(res){
      //this.isloading = false; 
        this.data1 = res.data;
       
      }
      else{
        console.log("err");
      }
    },
    err=>{
        console.log("server error");
    });
  }

  gym(){
  
    this.isloading = true;
    this._categoryService.getGym(this.Gym).subscribe(res => {
      this.isloading = false;
      if(res){
      //this.isloading = false; 
        this.data2 = res.data;

        console.log("data2",this.data2);
      
      }
      else{
        console.log("err");
      }
    },
    err=>{
        console.log("server error");
    });
  }

  viewProfile(yogaId){
      let route = '/profile/'+yogaId;
      this._router.navigate([route]);
  }


}
