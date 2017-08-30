import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AddupdateComponent } from './addupdate/addupdate.component';
import { ListComponent } from './list/list.component';
import { MycropsComponent } from './mycrops/mycrops.component';
import { DetailComponent } from './detail/detail.component';
import { MybidsComponent } from './mybids/mybids.component';
import { BidslistComponent } from './bidslist/bidslist.component';
import { BidAcceptComponent } from './bidaccept/bidaccept.component';
import { ActiveRouteGuard } from '../auth/services/activate-route-guard';
import { DeactiveRouteGuard } from '../auth/services/deactivate-route-guard';
import { UserbidlistComponent } from './userbidlist/userbidlist.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { BidhistoryComponent } from './bidhistory/bidhistory.component';
import { CropsService } from './services/crops.service';
import { TermsAndConditonsComponent } from './terms-and-conditons/terms-and-conditons.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Crops'
    },
    children: [
      {
        path: '',
        component: ListComponent,
        data: {
          title: 'List'
        }, 
      },
      {
        path: 'add',
        component: AddupdateComponent,
        data: {
          title: 'Add Crops'
        },
        canActivate: [DeactiveRouteGuard]
      },
      {
        path: 'mycrops',
        component: MycropsComponent,
        data: {
          title: 'My crops'
        },
        canActivate: [DeactiveRouteGuard]
      },
      {
        path: 'edit/:id',
        component: AddupdateComponent,
        data: {
          title: 'Edit Crop'
        }
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
        data: {
          title: 'Crop detail'
        }
      },
      {
        path: 'mybids',
        component: MybidsComponent,
        data: {
          title: 'My Bids'
        },
        canActivate: [DeactiveRouteGuard]
      },
      {
        path: 'bidslist/:id',
        component: BidslistComponent,
        data: {
          title: 'Bids List'
        },
        canActivate: [DeactiveRouteGuard]
      },
      {
        path: 'bidaccept/:id/:bidid',
        component: BidAcceptComponent,
        data: {
          title: 'Bid Accept'
        },
        canActivate: [DeactiveRouteGuard]
      },
       {
        path: 'userbidlist/:id',
        component: UserbidlistComponent,
        data: {
          title: 'User Bid List'
        }
      },
      {
        path: 'logistics',
        component: LogisticsComponent,
        data: {
          title: 'Logistics'
        },
        canActivate: [DeactiveRouteGuard]
      },
      {
        path: 'logistics/:cropID/:bidID',
        component: LogisticsComponent,
        data: {
          title: 'Logistics'
        },
        // canActivate: [DeactiveRouteGuard]
      },
      {
        path: 'bidhistory/:id',
        component: BidhistoryComponent,
        data: {
          title: 'Bid History'
        }
      },
      {
      	path: 'terms/:type/:id',
        component: TermsAndConditonsComponent,
        data: {
          title: 'Terms and conditions'
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
    CropsService
  ],
  exports: [
    RouterModule,
    FormsModule    
  ]
})
export class CropsRoutingModule {}
