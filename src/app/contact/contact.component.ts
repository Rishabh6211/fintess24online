import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[ContactService]
})
export class ContactComponent implements OnInit {

	public data = {
		email:'',
		name:'',
		phone:'',
		problem:'',
		message:''
	}
	public isloading = false;
	public records:any;
  constructor( private _contactService:ContactService) { }

  ngOnInit() {
  }

  contact(){
  	this.isloading = true;
  	this._contactService.consult(this.data).subscribe(res=>{
  		this.isloading = false;
  		if(res){
  			
  			this.records = res.data;
  			console.log("res",this.data);
  		}
  		else{
  			this.isloading = false;
  			console.log('err');
  		}
  	})
  }
}
