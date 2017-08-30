import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import { Component, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';

import { LanguageService } from '../services/language.service';
import { LanguageInterface } from '../classes/language-interface';

@Component({
  selector: 'mysidebar',
  templateUrl: './mysidebar.component.html',
  styleUrls: ['./mysidebar.component.css']
})
export class MysidebarComponent implements OnInit {
	public userData
	public language: LanguageInterface = new LanguageInterface;
  	constructor(private _cookieService: CookieService,
	  			private _languageService: LanguageService ) { 

						this._languageService.language.subscribe(language => {
				            this.language.setLabels(language);
				        });

				   }

	ngOnInit() {
		 this.userData = this._cookieService.getObject('userData');
		 let keyword = localStorage.getItem("lang");
         this._languageService.getLanguage();
	}

	setLanguage( keyword ){
        this._languageService.setLanguage(keyword);
    }

}
