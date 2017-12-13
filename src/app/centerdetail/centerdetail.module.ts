import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {CenterdetailComponent} from './centerdetail.component'
import {CeiboShare} from './social/ng2-social-share'
import { BarRatingModule } from "ngx-bar-rating";
import { StarRatingModule } from 'angular-star-rating';

const routes: Routes = [
  {
    path: '',
    component: CenterdetailComponent,
    data: {
      title: 'profile',
    }
  }
];

@NgModule({
  imports: [
     CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    BarRatingModule,
    StarRatingModule.forRoot()
  ],
  exports: [RouterModule],
  declarations: [CenterdetailComponent,CeiboShare]
})
export class CenterdetailModule { }
