import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KafaatLayoutComponent } from './layout-pages/kafaat-layout/kafaat-layout.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'; 
import { NgxMaskModule } from 'ngx-mask';
import { DashboardLayoutComponent } from './layout-pages/dashboard-layout/dashboard-layout.component';
import { ToastrModule } from 'ngx-toastr';
// import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    AppComponent,
    KafaatLayoutComponent,
    DashboardLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(), 
    // MatProgressBarModule,
  ],
  bootstrap: [AppComponent],
  providers:[
  ]
})
export class AppModule { }
