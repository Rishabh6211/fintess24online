import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { LanguageInterface } from '../classes/language-interface';

@Component({
  selector: 'sortingDropdown',
  templateUrl: './sorting-dropdown.component.html',
  styleUrls: ['./sorting-dropdown.component.css']
})
export class SortingDropdownComponent implements OnInit {

	public language: LanguageInterface = new LanguageInterface;
	
	constructor( private _languageService: LanguageService) { 
		this._languageService.language.subscribe(language => {
		    this.language.setLabels(language);
		});
	}

	ngOnInit() {
		this._languageService.getLanguage();	
	}

}