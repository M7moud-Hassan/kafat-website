import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KafaatRoutingModule } from './kafaat-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';
import { MusharakatItemComponent } from './components/musharakat-item/musharakat-item.component';


@NgModule({
  declarations: [
    ProgramDetailsComponent,
    MusharakatItemComponent
  ],
  imports: [
    CommonModule,
    KafaatRoutingModule,
    SharedModule
  ]
})
export class KafaatModule { }
