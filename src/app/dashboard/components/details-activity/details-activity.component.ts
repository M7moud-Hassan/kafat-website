import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-activity',
  templateUrl: './details-activity.component.html',
  styleUrls: ['./details-activity.component.css']
})
export class DetailsActivityComponent {
  id:number
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id']; 
      
    });
  }
}
