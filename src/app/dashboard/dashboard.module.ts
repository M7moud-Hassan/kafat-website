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
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    UserCategoryShowComponent,
    MatCardModule
  ],
  providers:[
  ]
})
export class DashboardModule { }
