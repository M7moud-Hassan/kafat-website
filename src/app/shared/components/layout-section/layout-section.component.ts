import { Component, ComponentFactoryResolver, Input, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-layout-section',
  templateUrl: './layout-section.component.html',
  styleUrls: ['./layout-section.component.css']
})
export class LayoutSectionComponent {
  slidesLength:number=0;
  @Input() componentToDisplay: number=-1;
  @Input() title:string='';
  @Input() header='a'
  constructor(
  
  ) { }
  // handleSlidesLength(data: number) {
  //   this.slidesLength = data;
  // }
  ngOnInit() {
    
  }
}
