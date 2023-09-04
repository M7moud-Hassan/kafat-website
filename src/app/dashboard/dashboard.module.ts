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


@NgModule({
  declarations: [
    HomeComponent,
    ActivitiesComponent,
    AddActivityComponent,
    UpdateActivityComponent,
    ActivityTypesComponent,
    AddActivityTypeComponent,
    UpdateActivityTypeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
