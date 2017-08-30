import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {BehaviorSubject} from 'rxjs/Rx';

import tsConstants = require('../config/tsconstant');


@Injectable()
export class LanguageService {
    public totalTicketCount:BehaviorSubject<number> = new BehaviorSubject<number>(10);    
    public language:BehaviorSubject<object> = new BehaviorSubject<object>({});

    private _host = tsConstants.HOST;

    private languages = [];

    constructor(
        private _http: Http ) {}

    // lang?code=ur

    setLanguage( keyword ) {
        
        let language: object;
        localStorage.setItem("lang", keyword);

        if( keyword !== '' ){
            let url = this._host+"/lang?code="+keyword;
            this._http.get(url)
                .map((res:Response) => res.json())
                .subscribe( response => {
                    let data = response;
                    if( response.success ) {
                        let langObject = response.data.value;
                        let direction  = response.data.direction;
                                                
                        localStorage.setItem('langObj', JSON.stringify(langObject));
                        localStorage.setItem('langDir', JSON.stringify(direction));
                        this.language.next(langObject);                        
                        return {};
                    } else {
                       this.language.next({});
                       localStorage.setItem('langObj', JSON.stringify({}));
                       localStorage.setItem('langDir', JSON.stringify(''));
                       return {};
                    }
                });
            
        }else{
           this.language.next({});
           localStorage.setItem('langObj', JSON.stringify({}));
           localStorage.setItem('langDir', JSON.stringify(''));
           return {}     
        }     
    }

    getLanguage( ) {
        let lang = JSON.parse(localStorage.getItem('langObj'));
        if( lang ) {
            this.language.next(lang);
        }else{
           this.setLanguage( 'en' );
        }
    }

}
