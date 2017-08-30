import { Component, OnInit, Input } from '@angular/core';
import tsConstants = require('../config/tsconstant');

@Component({
  selector: 'thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
	private _host = tsConstants.HOST;
	private url: string = '/';

	@Input() id: string;
	@Input() item: object;
	@Input() page: string		
	
	constructor() { }

	ngOnInit() {
		this.url = this._host+'/'+this.page+'/detail/'+this.id;
	}

}
