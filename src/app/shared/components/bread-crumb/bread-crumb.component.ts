import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent {
@Input() title:string=''
@Input() subTitles:string=''
@Input() subSubTitle:string=''
@Input() subSubSubTitle:string=''
}
