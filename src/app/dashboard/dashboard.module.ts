import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';


@NgModule({
    imports: [
        DashboardRoutingModule,
        ChartsModule,
        SharedModule,
        CommonModule,
        FormsModule
    ],
    declarations: [ DashboardComponent ]
})
export class DashboardModule { }
