import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule }   from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import {  HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { SlickModule } from 'ngx-slick';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxGalleryModule } from 'ngx-gallery';

const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 3,
  slidesPerView: 3,
  centeredSlides: true,
  keyboardControl: true
};

@NgModule({
	imports: [
	    CommonModule,
	    FormsModule,
		  CustomFormsModule,
	    HomeRoutingModule,
      SharedModule,
      NgxGalleryModule,
      ModalModule.forRoot(),
      SlickModule.forRoot(),
      SwiperModule.forRoot(SWIPER_CONFIG),  
	],
	declarations: [HomeComponent]
})
export class HomeModule { }
