import { Component, OnInit, Input } from '@angular/core';
import tsConstants = require('../config/tsconstant');
import { LanguageService } from '../../shared/services/language.service';
import { LanguageInterface } from '../../shared/classes/language-interface';

@Component({
  selector: 'listItems',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
	public language: LanguageInterface = new LanguageInterface;
	private _host = tsConstants.HOST;
	@Input() id: string;
	@Input() item: object;
	@Input() page: string;

	private url: string = '/';

	constructor(  private _languageService: LanguageService ) {
		this._languageService.language.subscribe(language => {
                    this.language.setLabels(language);
                });
	 }

	ngOnInit() {
		this.url = '/'+this.page+'/detail/'+this.id;
		 let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();
	}
	 setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }

}
