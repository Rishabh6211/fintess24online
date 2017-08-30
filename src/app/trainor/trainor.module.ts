import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainorsComponent } from './trainors/trainors.component';
import { TrainorPortfolioComponent } from './trainor-portfolio/trainor-portfolio.component';
import { Routes,RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'trainors',
    },
    children: [
    
      {
        path: '',
        component: TrainorsComponent,
        data: {
          title: 'trainors'
        }
      },
      {
        path: 'trainorsportfolio',
        component: TrainorPortfolioComponent,
        data: {
          title: 'trainors-portfolio'
        }
      }

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule],
  declarations: [TrainorsComponent, TrainorPortfolioComponent]
})
export class TrainorModule { }
