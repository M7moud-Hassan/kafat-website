import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent {
  indexSelected=0
  onTap(index:number):void{
    this.indexSelected=index;
  }
}
