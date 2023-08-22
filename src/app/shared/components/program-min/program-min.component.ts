import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-program-min',
  templateUrl: './program-min.component.html',
  styleUrls: ['./program-min.component.css']
})
export class ProgramMinComponent {
  @Input() direction:string="ltr"
  @Input() image:string='';
  @Input() title:string='';
  @Input() image2:string='';

}
