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
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { DiscoverProgramsComponent } from './components/discover-programs/discover-programs.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ManshatDetailsInProgressComponent } from './components/manshat-details-in-progress/manshat-details-in-progress.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { WinnerComponent } from './components/winner/winner.component';
import { PostsSlidesComponent } from './components/posts-slides/posts-slides.component';
import { LoginComponent } from './components/login/login.component';
import { ForgottenPasswordComponent } from './components/forgotten-password/forgotten-password.component';
import { CodeAuthComponent } from './components/code-auth/code-auth.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';



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
    CarousalHomeComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    DiscoverProgramsComponent,
         AboutPageComponent,
    ManshatDetailsInProgressComponent,
    ContactUsComponent,
    WinnerComponent,
    PostsSlidesComponent,
    LoginComponent,
    ForgottenPasswordComponent,
    CodeAuthComponent,
    NewPasswordComponent,

  ],
  imports: [
    CommonModule,
    KafaatRoutingModule,
    SharedModule,
    SlickCarouselModule
  ]
  
})
export class KafaatModule { }
