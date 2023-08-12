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



@NgModule({
  declarations: [
    FooterComponent,

    NavbarComponent,
    BreadCrumbComponent,
    PageHeaderComponent,
    ManashetItemComponent,
    NavigationToBackHeaderComponent,
    ImagePopUpComponent,
    VideoPopUpComponent

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
    
  ]
})
export class SharedModule { }
