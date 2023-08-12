import { Component, ViewChild,OnInit } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-minshat-carousal',
  templateUrl: './minshat-carousal.component.html',
  styleUrls: ['../../../shared/components/manashet-item/manashet-item.component.css','./minshat-carousal.component.css']
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
    this.slickCarousel!.slickGoTo(this.currentSlideIndex);
  }

  scrollBack() {
    if(!this.swapSlideIndex && this.currentSlideIndex>0){
      this.currentSlideIndex -= 2;
     
    }else if (this.swapSlideIndex && this.currentSlideIndex>0){
      this.currentSlideIndex -= 1;
    }
    
    this.swapSlideIndex=true;
    this.slickCarousel!.slickGoTo(this.currentSlideIndex);
  }
}
