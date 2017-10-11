import { Component, OnInit } from '@angular/core';

import * as jQuery from 'jquery';
import  { CategoryService } from './category.service'
import tsConstants = require('../shared/config/tsconstant');

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {
	private _host = tsConstants.HOST;
	public yoga = 'yoga';
	public isloading = false;
	public data:any;
	constructor(private _categoryService:CategoryService) { }

	ngOnInit() {
		this.findYoga();
	}

	setTab( item ) {
		console.log( "item ", item );
		let ID = "#"+item;
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

}
