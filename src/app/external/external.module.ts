import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalRoutingModule } from './external-routing.module';
import { EquipmentPayComponent } from './equipment-pay/equipment-pay.component';

import { ExternalService } from './services/external.service'

@NgModule({
  imports: [
    CommonModule,
    ExternalRoutingModule
  ],
  providers: [ExternalService],
  declarations: [EquipmentPayComponent]
})
export class ExternalModule { }
