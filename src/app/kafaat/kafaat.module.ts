import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KafaatRoutingModule } from './kafaat-routing.module';
import { SharedModule } from '../shared/shared.module';
<<<<<<< HEAD


@NgModule({
  declarations: [],
=======
import { ProgramDetailsComponent } from './components/program-details/program-details.component';


@NgModule({
  declarations: [
    ProgramDetailsComponent
  ],
>>>>>>> b17576b7723de78bb978e7fd357eb33154d530b3
  imports: [
    CommonModule,
    KafaatRoutingModule,
    SharedModule
  ]
})
export class KafaatModule { }
