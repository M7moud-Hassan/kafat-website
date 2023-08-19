import { Component, ElementRef, HostListener, Type, ViewChild } from '@angular/core';
import { ItemCarousal } from '../carousal-home/carousal-home.component';
import { DisplayContentComponent } from 'src/app/shared/components/display-content/display-content.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  showOverlay = false;

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

  @ViewChild('targetElement', { static: true }) targetElement: ElementRef | undefined;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.checkIfElementReachedTop();
  }

  private checkIfElementReachedTop() {
    const elementTop = this.targetElement!.nativeElement.getBoundingClientRect().top;
    const scrollPosition = window.scrollY || window.pageYOffset;
    if (elementTop <= 0) {
     
      document.getElementById('navbar')!.style.display='block';
    }
    else if(scrollPosition <= 0)
    {
      document.getElementById('navbar')!.style.display='none';
    }
  }
  
}
