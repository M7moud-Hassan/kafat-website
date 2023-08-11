import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

const routes: Routes = [];
=======
import { ProgramDetailsComponent } from './components/program-details/program-details.component';
import { BreadCrumbComponent } from '../shared/components/bread-crumb/bread-crumb.component';

const routes: Routes = [
  {path:'program-details',component:ProgramDetailsComponent},
  {path:'breadcrumb',component:BreadCrumbComponent},
];
>>>>>>> b17576b7723de78bb978e7fd357eb33154d530b3

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KafaatRoutingModule { }
