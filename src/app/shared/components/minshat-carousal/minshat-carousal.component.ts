import { Component, ViewChild,OnInit, Output, EventEmitter } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { KafaatMainService } from 'src/app/kafaat/services/kafaat-main.service';

@Component({
  selector: 'app-minshat-carousal',
  templateUrl: './minshat-carousal.component.html',
  styleUrls: ['../manashet-item/manashet-item.component.css','./minshat-carousal.component.css']
})
export class MinshatCarousalComponent implements OnInit {
   slides:any[]=[];
   
   constructor(private service:KafaatMainService) {
   }
  //  @Output() slidesLength_dataEvent = new EventEmitter<number>();

   loadData(){
    this.service.activityService.getHigthLigthActivities().subscribe(response=>{
      if(response.statusCode=='200'){
        this.slides=response.data;
        this.maxlength= this.slides.length;
        // this.slidesLength_dataEvent.emit(this.slides.length);
      }
    })
   }
   @ViewChild('slickCarousel', { static: false }) slickCarousel: SlickCarouselComponent | undefined;
   currentSlideIndex = 0;
   swapSlideIndex=false;
   maxlength=0;
   ngOnInit(): void {
    this.loadData();
   
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

 

  onMouseEnter(index:number):void{
    document.getElementById('d'+index)!.style.top='0';
  }
  onMouseLeave(index:number):void{
    document.getElementById('d'+index)!.style.top='-45px';
  }
}
