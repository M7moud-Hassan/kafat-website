import { Component, ViewChild,OnInit } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-posts-carousal-home',
  templateUrl: './posts-carousal-home.component.html',
  styleUrls: ['./posts-carousal-home.component.css']
})
export class PostsCarousalHomeComponent implements OnInit{
  
  slides=[1,2,3,4,5,6,7]
  @ViewChild('slickCarousel', { static: false }) slickCarousel: SlickCarouselComponent | undefined;
   currentSlideIndex = 0;
   swapSlideIndex=false;
   maxlength=0;
   ngOnInit(): void {
     this.maxlength= this.slides.length
    }
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "infinite": false,
  }

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
