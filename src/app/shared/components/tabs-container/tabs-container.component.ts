import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent {
  @Output() tabSelected: EventEmitter<number> = new EventEmitter<number>();
  indexSelected=0
  onTap(index:number):void{
    this.indexSelected=index;
    this.tabSelected.emit(index);
  }
}
