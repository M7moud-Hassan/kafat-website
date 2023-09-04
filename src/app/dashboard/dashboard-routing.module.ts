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

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'activities',component:ActivitiesComponent},
  {path:'add-activity',component:AddActivityComponent},
  {path:'update-activity/:id',component:UpdateActivityComponent},
  {path:'user-category-show',component:UserCategoryShowComponent},
  {path:'user-category-add',component:UserCategoryAddComponent},
  {path:'activityTypes',component:ActivityTypesComponent},
  {path:'add-activityType',component:AddActivityTypeComponent},
  {path:'update-activityType/:id',component:UpdateActivityTypeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
