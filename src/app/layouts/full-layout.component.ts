import { Component, OnInit,TemplateRef  } from '@angular/core';
import { Router, ActivatedRoute, RouterLink, NavigationEnd } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from "angular2-social-login";

import { SharedService } from '../shared/services/shared.service';


declare var jQuery:any;

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Subscription} from 'rxjs/Subscription';

import { TruncatePipe } from '../shared/pipes/truncate.pipe';

@Component({
    selector: 'app-dashboard',
    templateUrl: './full-layout.component.html',
        // providers: [LanguageService]    
})
export class FullLayoutComponent implements OnInit {
    
    public ticketCount:number = 0;
    

    public navigation: boolean = false;
    public isLoggedIn: boolean = false;
    public isloading: boolean  = true;

    public userData:any;

    public disabled:boolean        = false;
    public status:{isopen:boolean} = {isopen: false};


    /*public theme: object = {
        themeColor: '',
        topNavbar: '',
        mainNavbar: 'orange'       

    };   */

    
    constructor(        
            private _auth: AuthService,
            private _router: Router,
            private _sharedService: SharedService,
            private _cookieService: CookieService,
          
            private _cd: ChangeDetectorRef ) { 

        
        this._router.events.subscribe(path => {
            
            if (!(path instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
               
            if( path.url == '/' || path.url == '/home' ){
                this.navigation = true;                               
            }else{
                this.navigation = false;
            }
            
            this.setData();

            /*set theme */
            //this.setTheme(path.url);

            /*close menu.*/
            this.closeMenu();   

            this._cd.markForCheck();
        });
        
    }

    ngOnInit(): void {
        console.log("this",this.isLoggedIn)
        if(  this._router.url === '/home' ){
            this.navigation = true;
        }
        
        if( this._cookieService.get('token')){
            this.isLoggedIn = true;
            this.userData   = this._cookieService.getObject('userData');
        }
        
        // this.setLanguage(keyword);
     
    }

    setData(): void {
        if( this._cookieService.get('token')){
            this.isLoggedIn = true;
            this.userData   = this._cookieService.getObject('userData');
            console.log("cook", this.userData)
        }
    }

    public toggled(open:boolean):void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event:MouseEvent):void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }


    logout(): void{
        console.log("logout")
        
        this._cookieService.removeAll();
        this.isLoggedIn = false;

        this._router.navigate(['/']);
    }

    /*set theme function*/
   /* setTheme( route ): void {
        
        if( route.includes("crops") ) {

            this.theme['themeColor'] = 'green-theme';
            this.theme['topNavbar']  = 'greencolor';
            this.theme['mainNavbar'] = 'greencolor';

        } else if( route.includes("inputs") ) {

            this.theme['themeColor'] = 'sky-blue-theme';
            this.theme['topNavbar']  = 'skycolor';
            this.theme['mainNavbar'] = 'skycolor';

        }else if( route.includes("equipments") ) {

            this.theme['themeColor'] = 'redish-theme';
            this.theme['topNavbar']  = 'redishcolor';
            this.theme['mainNavbar'] = 'redishcolor';

        } else {

            this.theme['themeColor'] = '';
            this.theme['topNavbar']  = '';
            this.theme['mainNavbar'] = 'orange';
            
        }
    }*/

    closeMenu() {
        jQuery('.dropdown-menu a').click(function(){
            jQuery('.navbar-collapse').collapse('hide');
        });
        jQuery('.single-item a').click(function(){
            jQuery('.navbar-collapse').collapse('hide');
        });               
    }

    toggleDropdownMenu( dropdownID ) {
        console.log("dropdownID ", dropdownID);
        let id = "#"+dropdownID;
        jQuery(id).toggleClass('show');
    }
 
 
}