import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { AddActivityComponent } from './components/add-activity/add-activity.component';
import { UpdateActivityComponent } from './components/update-activity/update-activity.component';
import { ActivityTypesComponent } from './components/activity-types/activity-types.component';
import { AddActivityTypeComponent } from './components/add-activity-type/add-activity-type.component';
import { UpdateActivityTypeComponent } from './components/update-activity-type/update-activity-type.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCategoryShowComponent } from './components/user-category-show/user-category-show.component';
import { UserCategoryAddComponent } from './components/user-category-add/user-category-add.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { AddWorkTypeComponent } from './components/add-work-type/add-work-type.component';
import { EditWorkTypeComponent } from './components/edit-work-type/edit-work-type.component';
import { WorkTypesComponent } from './components/work-types/work-types.component';
import { AddCountryComponent } from './components/add-country/add-country.component';
import { EditCountryComponent } from './components/edit-country/edit-country.component';
import { CountriesComponent } from './components/countries/countries.component';
import { DialogDeleteComponent } from './components/dialog-delete/dialog-delete.component';
import { DeleteCountryComponent } from './components/delete-country/delete-country.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CitiesComponent } from './components/cities/cities.component';
import { AddCityComponent } from './components/add-city/add-city.component';
import { EditCityComponent } from './components/edit-city/edit-city.component';
import { DistrictsComponent } from './components/districts/districts.component';
import { EditDistrictComponent } from './components/edit-district/edit-district.component';
import { AddDistrictComponent } from './components/add-district/add-district.component';
import { AddQualificationComponent } from './components/add-qualification/add-qualification.component';
import { EditQualificationComponent } from './components/edit-qualification/edit-qualification.component';
import { QualificationsComponent } from './components/qualifications/qualifications.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { EditDepartmentComponent } from './components/edit-department/edit-department.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { SpecializationsComponent } from './components/specializations/specializations.component';
import { EditSpecializationComponent } from './components/edit-specialization/edit-specialization.component';
import { AddSpecializationsComponent } from './components/add-specializations/add-specializations.component';


@NgModule({
  declarations: [
    HomeComponent,
    ActivitiesComponent,
    AddActivityComponent,
    UpdateActivityComponent,
    ActivityTypesComponent,
    AddActivityTypeComponent,
    UpdateActivityTypeComponent,
    LoginComponent,

    UserCategoryAddComponent,
      AddWorkTypeComponent,
      EditWorkTypeComponent,
      WorkTypesComponent,
      AddCountryComponent,
      EditCountryComponent,
      CountriesComponent,
      DialogDeleteComponent,
      DeleteCountryComponent,
      CitiesComponent,
      AddCityComponent,
      EditCityComponent,
      DistrictsComponent,
      EditDistrictComponent,
      AddDistrictComponent,
      AddQualificationComponent,
      EditQualificationComponent,
      QualificationsComponent,
      AddDepartmentComponent,
      EditDepartmentComponent,
      DepartmentsComponent,
      SpecializationsComponent,
      EditSpecializationComponent,
      AddSpecializationsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    UserCategoryShowComponent,
    MatCardModule,
    NgxPaginationModule
  ],
  providers:[
  ]
})
export class DashboardModule { }
