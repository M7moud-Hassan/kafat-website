import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ManashetItemComponent } from './components/manashet-item/manashet-item.component';
import { DisplayContentComponent } from './components/display-content/display-content.component';
import { LayoutSectionComponent } from './components/layout-section/layout-section.component';
import { ItemCarousalAngleComponent } from './components/item-carousal-angle/item-carousal-angle.component';
import { NavigationToBackHeaderComponent } from './components/navigation-to-back-header/navigation-to-back-header.component';
import { ImagePopUpComponent } from './components/image-pop-up/image-pop-up.component';
import { VideoPopUpComponent } from './components/video-pop-up/video-pop-up.component';
import { MinshatCarousalComponent } from './components/minshat-carousal/minshat-carousal.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PostsCarousalHomeComponent } from './components/posts-carousal-home/posts-carousal-home.component';
import { MonthFaamousComponent } from './components/month-faamous/month-faamous.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { PageHeaderLabeledComponent } from './components/page-header-labeled/page-header-labeled.component';
import { TabsContainerComponent } from './components/tabs-container/tabs-container.component';
import { ImageThirdComponent } from './components/image-third/image-third.component';
import { PaginationsComponent } from './components/paginations/paginations.component';
import { ScrollNavComponent } from './components/scroll-nav/scroll-nav.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgramMinComponent } from './components/program-min/program-min.component';
import { RouterModule } from '@angular/router';
import { DialogVideoImageComponent } from './components/dialog-video-image/dialog-video-image.component';
import { MainDashoardService } from '../dashboard/services/main-dashoard.service';
import { DashboardModule } from '../dashboard/dashboard.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnersInterceptor } from './core/Interceptors/spinners.interceptor';
import { CvImagePopupComponent } from './components/cv-image-popup/cv-image-popup.component';
import { EmptyDataComponent } from './components/empty-data/empty-data.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    BreadCrumbComponent,
    PageHeaderComponent,
    ManashetItemComponent,
    NavigationToBackHeaderComponent,
    ImagePopUpComponent,
    VideoPopUpComponent,
    DisplayContentComponent,
    LayoutSectionComponent,
    ItemCarousalAngleComponent,
    DisplayContentComponent,
    LayoutSectionComponent,
    ItemCarousalAngleComponent,
    NavigationToBackHeaderComponent,
    ImagePopUpComponent,
    VideoPopUpComponent,
    MinshatCarousalComponent,
    PostsCarousalHomeComponent,
    MonthFaamousComponent,
    FormContactComponent,
    TabsContainerComponent,
    ImageThirdComponent,
    PageHeaderLabeledComponent,
    TabsContainerComponent,
    PaginationsComponent,
    ScrollNavComponent,
    DatePickerComponent,
    ProgramMinComponent,
    DialogVideoImageComponent,
    SpinnerComponent,
    CvImagePopupComponent,
    EmptyDataComponent,
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    BreadCrumbComponent,
    PageHeaderComponent,
    ManashetItemComponent,
    NavigationToBackHeaderComponent,
    ImagePopUpComponent,
    LayoutSectionComponent,
    ItemCarousalAngleComponent,
    LayoutSectionComponent,
    ItemCarousalAngleComponent,
    NavigationToBackHeaderComponent,
    ImagePopUpComponent,
    MinshatCarousalComponent,
    PostsCarousalHomeComponent,
    MonthFaamousComponent,
    TabsContainerComponent,
    ImageThirdComponent,
    PageHeaderLabeledComponent,
    TabsContainerComponent,
    PaginationsComponent,
    ScrollNavComponent,
    DatePickerComponent,
    ProgramMinComponent,
    DialogVideoImageComponent,
    SpinnerComponent,
    CvImagePopupComponent,
    EmptyDataComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnersInterceptor,
      multi: true
    }
  ],
})
export class SharedModule { }
