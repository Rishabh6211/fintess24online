import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { Routes,RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    data: {
      title: 'category',
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
  declarations: [CategoryComponent]
})
export class CategoryModule { }
