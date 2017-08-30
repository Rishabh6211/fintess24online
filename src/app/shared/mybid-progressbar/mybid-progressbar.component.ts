import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { LanguageInterface } from '../classes/language-interface';

@Component({
  selector: 'mybid-progressbar',
  templateUrl: './mybid-progressbar.component.html',
  styleUrls: ['./mybid-progressbar.component.css']
})
export class MybidProgressbarComponent implements OnInit {
	
	public language: LanguageInterface = new LanguageInterface;
	// @Output() category = new EventEmitter<any>();  	
	@Input() bidStatus:string;
					;
	public states = [ 'Pending', 'Accepted', 'UpfrontPaid', 'BalancePaid', 'Delivered' ];
	public items = [
				{title:"Pending", value: "Pending", class:"disabled"},
				{title:"Accepted",  value: "Accepted", class:"disabled"},
				{title:"Upfront paid",  value: "UpfrontPaid", class:"disabled"},
				{title:"Final Payment",  value: "BalancePaid", class:"disabled"},
				{title:"Delivered",  value: "Delivered", class:"disabled"},
			]

	constructor() { }

	ngOnInit() {

		if( this.bidStatus !== 'Rejected' ){
			for (let i = 0; i < this.states.length; i++) {
				if( this.items[i].value == this.bidStatus  ){
			  		this.items[i].class = "active"
			  		break;
				}else{
					this.items[i].class = "complete"
				}
			}
		}
	}



}
