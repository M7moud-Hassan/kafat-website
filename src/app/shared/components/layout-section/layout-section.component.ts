import { Component, ComponentFactoryResolver, Input, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-layout-section',
  templateUrl: './layout-section.component.html',
  styleUrls: ['./layout-section.component.css']
})
export class LayoutSectionComponent {
  @Input() componentToDisplay: any;

  constructor(
  
  ) { }

  ngOnInit() {
    
  }
}
