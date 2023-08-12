import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KafaatRoutingModule } from './kafaat-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';
import { MusharakatItemComponent } from './components/musharakat-item/musharakat-item.component';
import { ManshatDetailsComponent } from './components/manshat-details/manshat-details.component';
import { ManashetDetailsReportPageComponent } from './components/manashet-details-report-page/manashet-details-report-page.component';
import { ManashetDetailsAttachmentPageComponent } from './components/manashet-details-attachment-page/manashet-details-attachment-page.component';
import { ManashetDetailsImageGalleryPageComponent } from './components/manashet-details-image-gallery-page/manashet-details-image-gallery-page.component';
import { ManashetDetailsVideoGalleryPageComponent } from './components/manashet-details-video-gallery-page/manashet-details-video-gallery-page.component';
import { ManashetDetailsSharedPageComponent } from './components/manashet-details-shared-page/manashet-details-shared-page.component';
import { ManashetDetailsDistinguishedPageComponent } from './components/manashet-details-distinguished-page/manashet-details-distinguished-page.component';



import { HomePageComponent } from './components/home-page/home-page.component';
import { CarousalHomeComponent } from './components/carousal-home/carousal-home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [
    ProgramDetailsComponent,
    MusharakatItemComponent,
    ManshatDetailsComponent,
    ManashetDetailsReportPageComponent,
    ManashetDetailsAttachmentPageComponent,
    ManashetDetailsImageGalleryPageComponent,
    ManashetDetailsVideoGalleryPageComponent,
    ManashetDetailsSharedPageComponent,
    ManashetDetailsDistinguishedPageComponent,
    HomePageComponent,
    CarousalHomeComponent
  ],
  imports: [
    CommonModule,
    KafaatRoutingModule,
    SharedModule,
    SlickCarouselModule
  ]
})
export class KafaatModule { }
