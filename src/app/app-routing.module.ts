import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KafaatLayoutComponent } from './layout-pages/kafaat-layout/kafaat-layout.component';
import { HomePageComponent } from './kafaat/components/home-page/home-page.component';

const routes: Routes = [
  {path:'',component:KafaatLayoutComponent,children:[
    {path:'',component:HomePageComponent},
    {path:'kafaat',loadChildren:()=>import('./kafaat/kafaat.module').then(m=>m.KafaatModule)},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
