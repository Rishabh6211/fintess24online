import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie';

@Injectable()
export class DeactiveRouteGuard implements CanActivate {

    constructor(private router : Router, private _cookieService: CookieService) { }

    canActivate() {
  	
  	    let token = this._cookieService.get('accesstoken');
    
        if(token) {
          return true;
        } else {
            this._cookieService.put('accessAlert', 'Please login to continue.');
            this.router.navigate(['/login']);
        }
    }  
}