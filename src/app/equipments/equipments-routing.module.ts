import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AddupdateComponent } from './addupdate/addupdate.component';
import { ListComponent } from './list/list.component';
import { MyequipmentsComponent } from './myequipments/myequipments.component';
import { ActiveRouteGuard } from '../auth/services/activate-route-guard';
import { DeactiveRouteGuard } from '../auth/services/deactivate-route-guard';
import { DetailComponent } from './detail/detail.component';
import { EquipmentService } from './services/equipment.service';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Equipments'
    },
    children: [
      {
        path: '',
        component: ListComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'add',
        component: AddupdateComponent,
        data: {
          title: 'Add Equipments'
        },
        canActivate: [DeactiveRouteGuard]
      }, 
      {
        path: 'myequipments',
        component: MyequipmentsComponent,
        data: {
          title: 'My equipments'
        },
        canActivate: [DeactiveRouteGuard]
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
        data: {
        title: 'Equipment detail'
        }
      },
      {
        path: 'edit/:id',
        component: AddupdateComponent,
        data: {
        title: 'Edit Equipments'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,    
    HttpModule   
  ],
  providers: [
    EquipmentService
  ],
  exports: [
    RouterModule,
    FormsModule    
  ]
})
export class EquipmentsRoutingModule {}
