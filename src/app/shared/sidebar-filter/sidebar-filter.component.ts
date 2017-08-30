import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { LanguageInterface } from '../classes/language-interface';

@Component({
  selector: 'app-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
  styleUrls: ['./sidebar-filter.component.css']
})
export class SidebarFilterComponent implements OnInit {

	public language: LanguageInterface = new LanguageInterface;
	@Output() category = new EventEmitter<any>();  
	
	constructor(private _languageService: LanguageService) { 

		this._languageService.language.subscribe(language => {
			this.language.setLabels(language);
		});

	}

	ngOnInit() {
		let keyword = localStorage.getItem("lang");
        this._languageService.getLanguage();
	}

	setCategory( category ){
		this.category.emit( category )
		console.log("category ", category);
	}

	setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }
}
