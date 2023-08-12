import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';
import { BreadCrumbComponent } from '../shared/components/bread-crumb/bread-crumb.component';
import { ManshatDetailsComponent } from './components/manshat-details/manshat-details.component';

const routes: Routes = [
  {path:'program-details',component:ProgramDetailsComponent},
  {path:'event-details',component:ManshatDetailsComponent},
  {path:'breadcrumb',component:BreadCrumbComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KafaatRoutingModule { }
