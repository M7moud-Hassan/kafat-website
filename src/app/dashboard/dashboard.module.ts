import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule, routes } from './dashboard-routing.module';
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
import { ProgramsComponent } from './components/programs/programs.component';
import { AddProgramComponent } from './components/add-program/add-program.component';
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
import { DistinguishedTypesComponent } from './components/distinguished-types/distinguished-types.component';
import { AddDistinguishedTypesComponent } from './components/add-distinguished-types/add-distinguished-types.component';
import { EditDistinguishedTypesComponent } from './components/edit-distinguished-types/edit-distinguished-types.component';
import { AddFamilyBranchComponent } from './components/add-family-branch/add-family-branch.component';
import { EditFamilyBranchComponent } from './components/edit-family-branch/edit-family-branch.component';
import { FamilyBranchesComponent } from './components/family-branches/family-branches.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { MatSelectModule } from '@angular/material/select';
import { DetailsActivityComponent } from './components/details-activity/details-activity.component';
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
    UserCategoryShowComponent,
    UserCategoryAddComponent,
      AddWorkTypeComponent,
      EditWorkTypeComponent,
      WorkTypesComponent,
      AddCountryComponent,
      EditCountryComponent,
      CountriesComponent,
      DialogDeleteComponent,
      DeleteCountryComponent,
      ProgramsComponent,
      AddProgramComponent,
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
      DistinguishedTypesComponent,
      AddDistinguishedTypesComponent,
      EditDistinguishedTypesComponent,
      AddFamilyBranchComponent,
      EditFamilyBranchComponent,
      FamilyBranchesComponent,
      DetailsActivityComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatCardModule,
    NgxPaginationModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    NgxMatSelectSearchModule,
    MatSelectModule,
   
  ],
  providers:[
  ]
})
export class DashboardModule { }
