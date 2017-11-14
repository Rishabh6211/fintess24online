import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule } from '@angular/router';

import { SharedService } from './services/shared.service';

import { MaterializeModule } from 'angular2-materialize';

import { TruncatePipe } from './pipes/truncate.pipe';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

import { CapitalizePipe } from './pipes/capitalize.pipe';

import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
    imports: [
        CommonModule,
        MaterializeModule,
        NgxGalleryModule,
        RouterModule
    ],
    providers: [SharedService],
    declarations: [LoaderComponent,  TruncatePipe, BreadcrumbComponent,  CapitalizePipe],
    exports: [ LoaderComponent, TruncatePipe, BreadcrumbComponent]
})
export class SharedModule { }
