import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule }   from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import {  HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared/shared.module';
import { SlickModule } from 'ngx-slick';

@NgModule({
	imports: [
	    CommonModule,
	    FormsModule,
		CustomFormsModule,
	    HomeRoutingModule,
        SharedModule,
        SlickModule.forRoot()   
	],
	declarations: [HomeComponent]
})
export class HomeModule { }
