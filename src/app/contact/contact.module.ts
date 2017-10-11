import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { Routes,RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule }   from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    data: {
      title: 'contact',
    }
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    CustomFormsModule
  ],
  exports: [RouterModule],
  declarations: [ContactComponent]
})
export class ContactModule { }
