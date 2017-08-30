import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../../shared/services/language.service';
import { LanguageInterface } from '../../shared/classes/language-interface';

@Component({
  selector: 'productsByUser',
  templateUrl: './products-by-user.component.html',
  styleUrls: ['./products-by-user.component.css']
})
export class ProductsByUserComponent implements OnInit {

	public language: LanguageInterface = new LanguageInterface;

	constructor(private _languageService: LanguageService ) { }

	ngOnInit() {
		this._languageService.language.subscribe(language => {
			this.language.setLabels(language);
		});

		this._languageService.getLanguage();
	}

}
