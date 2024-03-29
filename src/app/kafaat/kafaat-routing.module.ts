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
import { AllProgramsComponent } from './components/all-programs/all-programs.component';
import { PostsPeopleComponent } from './components/posts-people/posts-people.component';
import { MemberGuard } from '../dashboard/core/guards/member.guard';
import { PdfPopupComponent } from './components/pdf-popup/pdf-popup.component';
import { RegisterationSucceededComponent } from './components/registeration-succeeded/registeration-succeeded.component';
import { MaskedImageComponent } from '../shared/components/masked-image/masked-image.component';
import { MagazineComponent } from './components/magazine/magazine.component';
import { MagazinePageComponent } from './components/magazine-page/magazine-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'program-details/:id',component:ProgramDetailsComponent},
  {path:'activity-details/:id',component:ManshatDetailsComponent},
  {path:'magazine/:id',component:MagazinePageComponent},
  {path:'',component:HomePageComponent,},
  {path:'program-details',component:ProgramDetailsComponent},
  {path:'event-details',component:ManshatDetailsComponent},
  {path:'event-details-in-progress',component:ManshatDetailsInProgressComponent},
  {path:'breadcrumb',component:BreadCrumbComponent},
  {path:'about',component:AboutPageComponent},
  {path:'',component:HomePageComponent},
  {path:'payment',component:PaymentComponent},
  {path:'payment-success',component:PaymentSuccessComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'profile',component:ProfileLayoutComponent,canActivate:[MemberGuard]},
  {path:'winners',component:WinnerComponent},
  {path:'famous-posts',component:PostsSlidesComponent},
  {path:'post-people',component:PostsPeopleComponent},
  {path:'profile',component:ProfileLayoutComponent},
  {path:'programs',component:AllProgramsComponent},
  {path:'request-send-success',component:RegisterationSucceededComponent},
  {path:'pdf',component:PdfPopupComponent},
  {path:'mask',component:MaskedImageComponent},
  {path:'magazine',component:MagazineComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KafaatRoutingModule { }
