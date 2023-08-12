import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KafaatRoutingModule } from './kafaat-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';
import { MusharakatItemComponent } from './components/musharakat-item/musharakat-item.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CarousalHomeComponent } from './components/carousal-home/carousal-home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [
    ProgramDetailsComponent,
    MusharakatItemComponent,
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
