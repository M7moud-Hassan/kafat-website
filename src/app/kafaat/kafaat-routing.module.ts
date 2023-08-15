import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';
import { BreadCrumbComponent } from '../shared/components/bread-crumb/bread-crumb.component';
import { ManshatDetailsComponent } from './components/manshat-details/manshat-details.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { ManshatDetailsInProgressComponent } from './components/manshat-details-in-progress/manshat-details-in-progress.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'program-details',component:ProgramDetailsComponent},
  {path:'event-details',component:ManshatDetailsComponent},
  {path:'event-details-in-progress',component:ManshatDetailsInProgressComponent},
  {path:'breadcrumb',component:BreadCrumbComponent},
  {path:'payment',component:PaymentComponent},
  {path:'payment-success',component:PaymentSuccessComponent},
  {path:'contact-us',component:ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KafaatRoutingModule { }
