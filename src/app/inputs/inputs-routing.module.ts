import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';


import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ActiveRouteGuard } from '../auth/services/activate-route-guard';
import { DeactiveRouteGuard } from '../auth/services/deactivate-route-guard';

import { InputService } from './services/input.service';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Inputs'
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
        path: 'detail/:id',
        component: DetailComponent,
        data: {
          title: 'Input detail'
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
    InputService
  ],
  exports: [
    RouterModule,
    FormsModule    
  ]
})
export class InputsRoutingModule {}
