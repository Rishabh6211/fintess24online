import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DatePickerModule } from 'ng2-datepicker';

import { MaterializeModule } from 'angular2-materialize';

import { AddupdateComponent } from './addupdate/addupdate.component';
import { ListComponent } from './list/list.component';
import { MycropsComponent } from './mycrops/mycrops.component';

import { CropsRoutingModule } from './crops-routing.module';

import { SharedModule } from '../shared/shared.module';
import { CropsService } from './services/crops.service';

import { ImageUploadModule } from 'ng2-imageupload';
import { DialogService } from "ng2-bootstrap-modal";
import { DetailComponent } from './detail/detail.component';
import { LogisticsComponent } from './logistics/logistics.component';

// import { NgxGalleryModule } from 'ngx-gallery';
import { MybidsComponent } from './mybids/mybids.component';
import { BidslistComponent } from './bidslist/bidslist.component';
import { BidAcceptComponent } from './bidaccept/bidaccept.component';
import { ProductsByUserComponent } from './products-by-user/products-by-user.component';
import { UserbidlistComponent } from './userbidlist/userbidlist.component';
import { BidhistoryComponent } from './bidhistory/bidhistory.component';
// Modal Component
import { ModalModule } from 'ng2-bootstrap/modal';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TermsAndConditonsComponent } from './terms-and-conditons/terms-and-conditons.component';


@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    CropsRoutingModule,
    SharedModule,
    FormsModule,
    ModalModule.forRoot(),  
    CustomFormsModule,
    DatePickerModule,
    ImageUploadModule,    
    TooltipModule.forRoot()
  ],
  providers:[CropsService, DialogService],
  declarations: [AddupdateComponent, ListComponent, MycropsComponent, DetailComponent, MybidsComponent, BidslistComponent, BidAcceptComponent, ProductsByUserComponent, UserbidlistComponent, LogisticsComponent,BidhistoryComponent, TermsAndConditonsComponent]
})
export class CropsModule { }
