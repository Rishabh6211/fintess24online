import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {CenterdetailComponent} from './centerdetail.component'
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
    SharedModule
  ],
  exports: [RouterModule],
  declarations: [CenterdetailComponent]
})
export class CenterdetailModule { }
