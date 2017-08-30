import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule }   from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import {  HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared/shared.module';


@NgModule({
	imports: [
	    CommonModule,
	    FormsModule,
		CustomFormsModule,
	    HomeRoutingModule,
        SharedModule    
	],
	declarations: [HomeComponent]
})
export class HomeModule { }
