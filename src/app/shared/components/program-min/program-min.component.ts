import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-program-min',
  templateUrl: './program-min.component.html',
  styleUrls: ['./program-min.component.css']
})
export class ProgramMinComponent {
  @Input() direction:string="ltr"
}
