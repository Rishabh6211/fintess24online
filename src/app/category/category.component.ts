import { Component, OnInit } from '@angular/core';

import * as jQuery from 'jquery';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	setTab( item ) {
		console.log( "item ", item );
		let ID = "#"+item;
		jQuery('.tab-pane').removeClass('active');
		jQuery(ID).addClass('active');
		// jQuery()
	}


}
