import { Component, Type } from '@angular/core';
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
    { img: 'assets/images/Programs.png',title:'برنامج موهوب',subTitle:'١٢٣ منشط' ,onClickItem:(item:ItemCarousal,index:number):void=>{
      console.log(item,index);
      
    }},
    { img: 'assets/images/Programs.png',title:'برنامج موهوب',subTitle:'١٢٣ منشط' ,onClickItem:(item:ItemCarousal,index:number):void=>{
      console.log(item,index);
      
    }},{ img: 'assets/images/Programs.png',title:'برنامج موهوب',subTitle:'١٢٣ منشط' ,onClickItem:(item:ItemCarousal,index:number):void=>{
      console.log(item,index);
      
    }},{ img: 'assets/images/Programs.png',title:'برنامج موهوب',subTitle:'١٢٣ منشط' ,onClickItem:(item:ItemCarousal,index:number):void=>{
      console.log(item,index);
      
    }},{ img: 'assets/images/Programs.png',title:'برنامج موهوب',subTitle:'١٢٣ منشط' ,onClickItem:(item:ItemCarousal,index:number):void=>{
      console.log(item,index);
      
    }},{ img: 'assets/images/Programs.png',title:'برنامج موهوب',subTitle:'١٢٣ منشط' ,onClickItem:(item:ItemCarousal,index:number):void=>{
      console.log(item,index);
      
    }},{ img: 'assets/images/Programs.png',title:'برنامج موهوب',subTitle:'١٢٣ منشط' ,onClickItem:(item:ItemCarousal,index:number):void=>{
      console.log(item,index);
      
    }},{ img: 'assets/images/Programs.png',title:'برنامج موهوب',subTitle:'١٢٣ منشط' ,onClickItem:(item:ItemCarousal,index:number):void=>{
      console.log(item,index);
      
    }},
  ]

  component: Type<any> = DisplayContentComponent;
  
}
