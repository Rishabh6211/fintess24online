import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { AddupdateComponent } from './addupdate/addupdate.component';
import { MaterializeModule } from 'angular2-materialize';
import { EquipmentsRoutingModule } from './equipments-routing.module';

import { ImageUploadModule } from 'ng2-imageupload';
import { MyequipmentsComponent } from './myequipments/myequipments.component';
import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './detail/detail.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { ProductsByUserComponent } from './products-by-user/products-by-user.component';
@NgModule({
  imports: [
    CommonModule,
    EquipmentsRoutingModule,
    SharedModule,
    MaterializeModule,
    ImageUploadModule,
    NgxGalleryModule
  ],
  declarations: [ListComponent,AddupdateComponent, MyequipmentsComponent, DetailComponent, ProductsByUserComponent]
})
export class EquipmentsModule { }
