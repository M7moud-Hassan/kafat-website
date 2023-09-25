import { Component, ViewChild,OnInit } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { KafaatMainService } from 'src/app/kafaat/services/kafaat-main.service';

@Component({
  selector: 'app-posts-carousal-home',
  templateUrl: './posts-carousal-home.component.html',
  styleUrls: ['./posts-carousal-home.component.css']
})
export class PostsCarousalHomeComponent implements OnInit{
  
  slides:any[]=[]
  
  constructor(private service:KafaatMainService) {
   
    
  }
  loadData(){
    this.service.postsActivity.getHightLight().subscribe(response=>{
      if(response.statusCode=='200'){
        this.slides=response.data;
        this.maxlength= this.slides.length
      }
    })
  }
  @ViewChild('slickCarousel', { static: false }) slickCarousel: SlickCarouselComponent | undefined;
   currentSlideIndex = 0;
   swapSlideIndex=false;
   maxlength=0;
   ngOnInit(): void {
     this.loadData()
    }
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "infinite": false,
    "autoplay":true
  }

  scrollNext() {
    this.slickCarousel!.slickNext();
  }

  scrollBack() {
    this.slickCarousel!.slickPrev();
  }
}
