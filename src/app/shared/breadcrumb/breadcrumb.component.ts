import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {


	@Input() id: string    = '';
	@Input() class: string = '';
	@Input() page: string  = '';
	

	constructor() {
		
	}

	ngOnInit() {
		
	}

}
