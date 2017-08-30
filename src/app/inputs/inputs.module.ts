import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { InputsRoutingModule } from './inputs-routing.module';

import { DetailComponent } from './detail/detail.component';

import { SharedModule } from '../shared/shared.module';
import { NgxGalleryModule } from 'ngx-gallery';
import { ProductsByUserComponent } from './products-by-user/products-by-user.component';

@NgModule({
  imports: [
    CommonModule,
    InputsRoutingModule,
    SharedModule,
    NgxGalleryModule
  ],
  declarations: [ListComponent,DetailComponent, ProductsByUserComponent]
})
export class InputsModule { }
