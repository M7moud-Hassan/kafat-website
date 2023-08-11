import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
<<<<<<< HEAD
=======
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ManashetItemComponent } from './components/manashet-item/manashet-item.component';
>>>>>>> b17576b7723de78bb978e7fd357eb33154d530b3



@NgModule({
  declarations: [
    FooterComponent,
<<<<<<< HEAD
    NavbarComponent
=======
    NavbarComponent,
    BreadCrumbComponent,
    PageHeaderComponent,
    ManashetItemComponent
>>>>>>> b17576b7723de78bb978e7fd357eb33154d530b3
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
<<<<<<< HEAD
    NavbarComponent
=======
    NavbarComponent,
    BreadCrumbComponent,
    PageHeaderComponent,
    ManashetItemComponent
>>>>>>> b17576b7723de78bb978e7fd357eb33154d530b3
  ]
})
export class SharedModule { }
