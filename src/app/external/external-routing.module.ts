import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EquipmentPayComponent } from './equipment-pay/equipment-pay.component';

const routes: Routes = [{
    path: '',
    data: {
      title: 'External'
    },
    children: [
      	{
	        path: 'equipmentpay/:id/:amt/:sell',
	        component: EquipmentPayComponent,
	        data: {
	          	title: 'List'
	        }
      	},
      	{
	        path: 'equipmentpay/:id/:amt/:sell/:buyer',
	        component: EquipmentPayComponent,
	        data: {
	          	title: 'List'
	        }
      	}


    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ExternalRoutingModule { }
