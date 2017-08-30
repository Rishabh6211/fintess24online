import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';
import { Routes,RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  {
    path: '',
    component: AboutusComponent,
    data: {
      title: 'About us',
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
  declarations: [AboutusComponent]
})
export class AboutusModule { }
