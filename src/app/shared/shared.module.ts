import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ManashetItemComponent } from './components/manashet-item/manashet-item.component';
import { NavigationToBackHeaderComponent } from './components/navigation-to-back-header/navigation-to-back-header.component';
import { ImagePopUpComponent } from './components/image-pop-up/image-pop-up.component';
import { VideoPopUpComponent } from './components/video-pop-up/video-pop-up.component';
import { DisplayContentComponent } from './components/display-content/display-content.component';
import { LayoutSectionComponent } from './components/layout-section/layout-section.component';
import { ItemCarousalAngleComponent } from './components/item-carousal-angle/item-carousal-angle.component';



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
    ItemCarousalAngleComponent
  ],
  imports: [
    CommonModule
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
    ItemCarousalAngleComponent

  ]
})
export class SharedModule { }
