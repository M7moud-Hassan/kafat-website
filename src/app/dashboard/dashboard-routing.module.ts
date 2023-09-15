import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './components/activities/activities.component';
import { AddActivityComponent } from './components/add-activity/add-activity.component';
import { UpdateActivityComponent } from './components/update-activity/update-activity.component';
import { UpdateActivityTypeComponent } from './components/update-activity-type/update-activity-type.component';
import { AddActivityTypeComponent } from './components/add-activity-type/add-activity-type.component';
import { ActivityTypesComponent } from './components/activity-types/activity-types.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserCategoryShowComponent } from './components/user-category-show/user-category-show.component';
import { UserCategoryAddComponent } from './components/user-category-add/user-category-add.component';
import { EditWorkTypeComponent } from './components/edit-work-type/edit-work-type.component';
import { AddWorkTypeComponent } from './components/add-work-type/add-work-type.component';
import { WorkTypesComponent } from './components/work-types/work-types.component';
import { EditCountryComponent } from './components/edit-country/edit-country.component';
import { AddCountryComponent } from './components/add-country/add-country.component';
import { CountriesComponent } from './components/countries/countries.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { CitiesComponent } from './components/cities/cities.component';
import { DistrictsComponent } from './components/districts/districts.component';
import { QualificationsComponent } from './components/qualifications/qualifications.component';
import { SpecializationsComponent } from './components/specializations/specializations.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DistinguishedTypesComponent } from './components/distinguished-types/distinguished-types.component';
import { FamilyBranchesComponent } from './components/family-branches/family-branches.component';
import { DetailsActivityComponent } from './components/details-activity/details-activity.component';
import { ContactInformationsComponent } from './components/contact-informations/contact-informations.component';
import { AdminsComponent } from './components/admins/admins.component';
import { MembersComponent } from './components/members/members.component';
import { JoinRequestsComponent } from './components/join-requests/join-requests.component';

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'activities',component:ActivitiesComponent},
  {path:'details-activity/:id',component:DetailsActivityComponent},
  {path:'edit-activity/:id',component:AddActivityComponent},
  {path:'add-activity',component:AddActivityComponent},
  {path:'update-activity/:id',component:UpdateActivityComponent},
  {path:'user-category-show',component:UserCategoryShowComponent},
  {path:'user-category-add',component:UserCategoryAddComponent},
  {path:'programs',component:ProgramsComponent},
  {path:'types-activity',component:ActivityTypesComponent},
  {path:'add-activityType',component:AddActivityTypeComponent},
  {path:'update-activityType/:id',component:UpdateActivityTypeComponent},
  {path:'update-work-type/:id',component:EditWorkTypeComponent},
  {path:'add-work-type',component:AddWorkTypeComponent},
  {path:'work-types',component:WorkTypesComponent},
  {path:'update-country/:id',component:EditCountryComponent},
  {path:'add-country',component:AddCountryComponent},
  {path:'countries',component:CountriesComponent},
  {path:'countries',component:CountriesComponent},
  {path:'cities',component:CitiesComponent},
  {path:'districts',component:DistrictsComponent},
  
  {path:'qualifications',component:QualificationsComponent},
  {path:'specializations',component:SpecializationsComponent},
  {path:'departments',component:DepartmentsComponent},

  {path:'workTypes',component:WorkTypesComponent},
  {path:'distinguishedTypes',component:DistinguishedTypesComponent},
  {path:'familyBranches',component:FamilyBranchesComponent},

  {path:'contactInformation',component:ContactInformationsComponent},

  {path:'admins',component:AdminsComponent},
  {path:'members',component:MembersComponent},
  {path:'join-requests',component:JoinRequestsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
