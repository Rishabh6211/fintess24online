import { Component, OnInit } from '@angular/core';
import  { TrainorService } from '../trainor.service'
import tsConstants = require('../../shared/config/tsconstant');
@Component({
  selector: 'app-trainors',
  templateUrl: './trainors.component.html',
  styleUrls: ['./trainors.component.css'],
  providers:[TrainorService]
})
export class TrainorsComponent implements OnInit {
	private _host = tsConstants.HOST;
	public trainor = 'trainor';
	public isloading = false;
	public data:any;
  constructor(private _trainorService:TrainorService) { }

  ngOnInit() {
  	this.findTrainor();
  }

  findTrainor(){
  	this.isloading = true;
  	this._trainorService.getTrainor(this.trainor).subscribe(res => {
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
