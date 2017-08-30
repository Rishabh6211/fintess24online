import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LanguageService } from '../services/language.service';
import { LanguageInterface } from '../classes/language-interface';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

	public language: LanguageInterface = new LanguageInterface;
	@Input() id: string    = '';
	@Input() class: string = '';
	@Input() page: string  = '';
	

	constructor(private _languageService: LanguageService) {
		this._languageService.language.subscribe(language => {
            this.language.setLabels(language);
        });	
	}

	ngOnInit() {
		this._languageService.getLanguage();
	}

}
