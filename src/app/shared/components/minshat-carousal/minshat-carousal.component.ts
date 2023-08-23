import { Component, ViewChild,OnInit } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-minshat-carousal',
  templateUrl: './minshat-carousal.component.html',
  styleUrls: ['../manashet-item/manashet-item.component.css','./minshat-carousal.component.css']
})
export class MinshatCarousalComponent implements OnInit {
   slides=[1,2,3,4,5,6,7,8]
   @ViewChild('slickCarousel', { static: false }) slickCarousel: SlickCarouselComponent | undefined;
   currentSlideIndex = 0;
   swapSlideIndex=false;
   maxlength=0;
   ngOnInit(): void {
     this.maxlength= this.slides.length
    }
   slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "infinite": false,
    "responsive": [
     
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
       
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  scrollNext() {
    if(this.swapSlideIndex && this.currentSlideIndex<this.maxlength-1){
    this.currentSlideIndex += 2;
    }
    else if(!this.swapSlideIndex && this.currentSlideIndex<this.maxlength-1){
      this.currentSlideIndex += 1; 
    }
    this.swapSlideIndex=false;
    this.slickCarousel!.slickNext();
  }

  scrollBack() {
   
    this.slickCarousel!.slickPrev()
  }

  data=[
   {
    image:'assets/images/car1.png',
    title:'تأملات في السيرة النبوية',
    subTitle:'برنامج مثقف',
    des:'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في ',
   },
   {
    image:'assets/images/car2.png',
  
    subTitle:'برنامج كاتب',
    des:'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في '
   },
   {
    image:'assets/images/car3.png',
   
    subTitle:'برنامج ماهر',
    des:'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في'
   }
  ]

  onMouseEnter(index:number):void{
    document.getElementById('d'+index)!.style.top='0';
  }
  onMouseLeave(index:number):void{
    document.getElementById('d'+index)!.style.top='-45px';
  }
}
