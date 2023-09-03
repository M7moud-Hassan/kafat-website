import { Component } from '@angular/core';

@Component({
  selector: 'app-manashet-details-shared-page',
  templateUrl: './manashet-details-shared-page.component.html',
  styleUrls: ['../contact-us/contact-us.component.css','./manashet-details-shared-page.component.css']
})
export class ManashetDetailsSharedPageComponent {
  isDropDownVisible:boolean=false;


  toggleOptions(){
    this.isDropDownVisible = !this.isDropDownVisible;
  }

}
