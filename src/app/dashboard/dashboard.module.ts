import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
    imports: [
        DashboardRoutingModule,
        ChartsModule,
        SharedModule
    ],
    declarations: [ DashboardComponent ]
})
export class DashboardModule { }
