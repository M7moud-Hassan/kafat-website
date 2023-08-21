import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KafaatLayoutComponent } from './layout-pages/kafaat-layout/kafaat-layout.component';
import { HomePageComponent } from './kafaat/components/home-page/home-page.component';
import { LoginComponent } from './kafaat/components/login/login.component';
import { ForgottenPasswordComponent } from './kafaat/components/forgotten-password/forgotten-password.component';
import { CodeAuthComponent } from './kafaat/components/code-auth/code-auth.component';
import { NewPasswordComponent } from './kafaat/components/new-password/new-password.component';
import { RegisterationComponent } from './kafaat/components/registeration/registeration.component';
import { RegisterationSucceededComponent } from './kafaat/components/registeration-succeeded/registeration-succeeded.component';

const routes: Routes = [
  {path:'',component:KafaatLayoutComponent,children:[
    {path:'',component:HomePageComponent},
    {path:'kafaat',loadChildren:()=>import('./kafaat/kafaat.module').then(m=>m.KafaatModule)},
  ]},
  {path:'registeration',component:RegisterationComponent},
  {path:'registeration-succeeded',component:RegisterationSucceededComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotten-password',component:ForgottenPasswordComponent},
  {path:'code-auth',component:CodeAuthComponent},
  {path:'new-password',component:NewPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
