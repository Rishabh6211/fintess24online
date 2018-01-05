import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule }   from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import {  HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { NgxGalleryModule } from 'ngx-gallery';



@NgModule({
	imports: [
	    CommonModule,
	    FormsModule,
		  CustomFormsModule,
	    HomeRoutingModule,
      SharedModule,
      NgxGalleryModule,
      ModalModule.forRoot(),
	],
	declarations: [HomeComponent]
})
export class HomeModule { }
