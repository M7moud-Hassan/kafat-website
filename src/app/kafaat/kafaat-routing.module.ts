import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';
import { BreadCrumbComponent } from '../shared/components/bread-crumb/bread-crumb.component';
import { ManshatDetailsComponent } from './components/manshat-details/manshat-details.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { ManshatDetailsInProgressComponent } from './components/manshat-details-in-progress/manshat-details-in-progress.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProfileLayoutComponent } from './components/profile-layout/profile-layout.component';
import { WinnerComponent } from './components/winner/winner.component';
import { PostsSlidesComponent } from './components/posts-slides/posts-slides.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'program-details',component:ProgramDetailsComponent},
  {path:'event-details',component:ManshatDetailsComponent},
  {path:'event-details-in-progress',component:ManshatDetailsInProgressComponent},
  {path:'breadcrumb',component:BreadCrumbComponent},
  {path:'about',component:AboutPageComponent},
  {path:'',component:HomePageComponent},
  {path:'payment',component:PaymentComponent},
  {path:'payment-success',component:PaymentSuccessComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'profile',component:ProfileLayoutComponent},
  {path:'winners',component:WinnerComponent},
  {path:'famous-posts',component:PostsSlidesComponent},
  {path:'winners',component:WinnerComponent},
  {path:'famous-posts',component:PostsSlidesComponent},
  {path:'profile',component:ProfileLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KafaatRoutingModule { }
