import { Component,ElementRef,Renderer2,Type,AfterViewInit, ViewChild } from '@angular/core';
import { ItemCarousal } from '../carousal-home/carousal-home.component';
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
  slides:ItemCarousal[]=[
    { img: 'assets/images/more_horiz.png',title:'برنامج موهوب',subTitle:'١٢٣ منشط' ,onClickItem:(item:ItemCarousal,index:number):void=>{
      console.log(item,index);
      
    }},
    { img: 'assets/images/Programs.png',title:'برنامج موهوب',subTitle:'١٢٣ منشط' ,onClickItem:(item:ItemCarousal,index:number):void=>{
      console.log(item,index);
      
    }},{ img: 'assets/images/Programs.png',title:'برنامج موهوب',subTitle:'١٢٣ منشط' ,onClickItem:(item:ItemCarousal,index:number):void=>{
      console.log(item,index);
      
    }},{ img: 'assets/images/slide5.png',title:'برنامج موهوب',subTitle:'١٢٣ منشط' ,onClickItem:(item:ItemCarousal,index:number):void=>{
      console.log(item,index);
      
    }},{ img: 'assets/images/slide4.png',title:'برنامج ماهر',subTitle:'١٢٣ منشط' ,onClickItem:(item:ItemCarousal,index:number):void=>{
      console.log(item,index);
      
    }},{ img: 'assets/images/Programs.png',title:'برنامج متفوق',subTitle:'١٢٣ منشط' ,onClickItem:(item:ItemCarousal,index:number):void=>{
      console.log(item,index);
      
    }},{ img: 'assets/images/slide2.png',title:'برنامج مبتكر',subTitle:'١٢٣ منشط' ,onClickItem:(item:ItemCarousal,index:number):void=>{
      console.log(item,index);
      
    }},{ img: 'assets/images/more_horiz.png',title:'جميع البرامج',subTitle:'' ,onClickItem:(item:ItemCarousal,index:number):void=>{
      console.log(item,index);
      
    }},
  ]

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
