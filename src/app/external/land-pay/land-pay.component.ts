import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ExternalService } from '../services/external.service'
import { SharedService } from '../../shared/services/shared.service';
import { LanguageService } from '../../shared/services/language.service';
import { LanguageInterface } from '../../shared/classes/language-interface';
import tsConstants = require('../../shared/config/tsconstant');
import tsMessages  = require('../../shared/config/tsmessage');


@Component({
  selector: 'app-land-pay',
  templateUrl: './land-pay.component.html',
  styleUrls: ['./land-pay.component.css']
})
export class LandPayComponent implements OnInit {

	public id: string;
	public amount: number;
	public userID: string;
	public productID: string;
	public language: LanguageInterface = new LanguageInterface;

	constructor(
		private _activateRouter: ActivatedRoute,
		private _externalService: ExternalService,
		private _router: Router,
		private _sharedService: SharedService,
		private _languageService: LanguageService
		) { 
		this._languageService.language.subscribe(language => {
				this.language.setLabels(language);
			});

	}

	ngOnInit() {

		this.id 		= this._activateRouter.snapshot.params['id'];
		this.amount 	= this._activateRouter.snapshot.params['amt'];
		this.userID 	= this._activateRouter.snapshot.params['sell'];
		this.productID	= this._activateRouter.snapshot.params['land'];
	}

	payNow(): void {
		this._externalService.landPayment(this.id,this.amount,this.userID,this.productID).subscribe(res => {
			console.log("----------------",res);
                if(res.success) {
                	this._sharedService.showToast(tsMessages.PAYMENT_SUCCESSFULL, tsConstants.COLOR_SUCESS);
                } else {
                	this._sharedService.showToast(tsMessages.PAYMENT_FAIL, tsConstants.COLOR_DANGER);
                }
                this._router.navigate(['/home']);
            },
            err => {
                this._sharedService.checkAccessToken(err, false);
            });

		//this._externalService.testPayment();


	}


}
