import { Component,ElementRef,Renderer2,Type,AfterViewInit, ViewChild } from '@angular/core';
import { DisplayContentComponent } from 'src/app/shared/components/display-content/display-content.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements AfterViewInit{
  showOverlay = false;
  
  constructor(private renderer: Renderer2, private el: ElementRef) {
   
    
  }
  ngAfterViewInit(): void {
    this.playAnimation()
   
  }

  openOrClosNav(value:boolean):void{
    this.showOverlay=value;
  }
 

  component: Type<any> = DisplayContentComponent;

  playAnimation(){
    const elements = this.el.nativeElement.querySelectorAll('.top-anim');
    const elements2 = this.el.nativeElement.querySelectorAll('.top-30');
    elements.forEach((element:any) => {
      
      this.renderer.setStyle(element, 'top', '0');
    });

    elements2.forEach((element:any) => {
     if(window.innerWidth<720){
      this.renderer.setStyle(element, 'top', '-40px');
     }else{
      this.renderer.setStyle(element, 'top', '30%');
     }
    });
  }


  
}
