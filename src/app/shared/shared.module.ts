import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule } from '@angular/router';

import { SharedService } from './services/shared.service';
import { MysidebarComponent } from './mysidebar/mysidebar.component';
import { MaterializeModule } from 'angular2-materialize';
import { SidebarFilterComponent } from './sidebar-filter/sidebar-filter.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { SortingDropdownComponent } from './sorting-dropdown/sorting-dropdown.component';
import { RateMarqueeComponent } from './rate-marquee/rate-marquee.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { MybidProgressbarComponent } from './mybid-progressbar/mybid-progressbar.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
    imports: [
        CommonModule,
        MaterializeModule,
        NgxGalleryModule,
        RouterModule
    ],
    providers: [SharedService],
    declarations: [LoaderComponent, MysidebarComponent, SidebarFilterComponent, TruncatePipe, BreadcrumbComponent, ListItemsComponent, SortingDropdownComponent, RateMarqueeComponent, CapitalizePipe, ThumbnailComponent, MybidProgressbarComponent, ImageSliderComponent,],
    exports: [ LoaderComponent, MysidebarComponent, SidebarFilterComponent, TruncatePipe, BreadcrumbComponent, ListItemsComponent, SortingDropdownComponent, RateMarqueeComponent, CapitalizePipe, ThumbnailComponent, MybidProgressbarComponent,ImageSliderComponent]
})
export class SharedModule { }
