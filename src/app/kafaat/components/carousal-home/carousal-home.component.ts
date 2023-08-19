import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousal-home',
  templateUrl: './carousal-home.component.html',
  styleUrls: ['./carousal-home.component.css']
})
export class CarousalHomeComponent implements OnInit {
  @Input() slides: ItemCarousal[] = [];
  @ViewChild('slickCarousel', { static: false }) slickCarousel: SlickCarouselComponent | undefined;
  currentSlideIndex = 0;
  swapSlideIndex = false;
  maxlength = 0;
  ngOnInit(): void {
    this.maxlength = this.slides.length
  }
  slideConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "infinite": false,

    "responsive": [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };
  scrollNext() {
    if (this.swapSlideIndex && this.currentSlideIndex < this.maxlength - 1) {
      this.currentSlideIndex += 2;
    }
    else if (!this.swapSlideIndex && this.currentSlideIndex < this.maxlength - 1) {
      this.currentSlideIndex += 1;
    }
    this.swapSlideIndex = false;
    this.slickCarousel!.slickGoTo(this.currentSlideIndex);
  }

  scrollBack() {
    if (!this.swapSlideIndex && this.currentSlideIndex > 0) {
      this.currentSlideIndex -= 2;

    } else if (this.swapSlideIndex && this.currentSlideIndex > 0) {
      this.currentSlideIndex -= 1;
    }

    this.swapSlideIndex = true;
    this.slickCarousel!.slickGoTo(this.currentSlideIndex);
  }

  onItemClick(item: ItemCarousal, index: number) {
    if (item.onClickItem) {
      item.onClickItem(item, index);
    }
  }


  onCarouselItemMouseEnter(index:number) {
   const element= document.getElementById('p'+index);
   element!.style.color='var(--main-color)';
  }

  onCarouselItemMouseLeave(index:number) {
    const element= document.getElementById('p'+index);
    element!.style.color='';
  }


}

export interface ItemCarousal {
  img: String;
  title: String;
  subTitle: String;
  onClickItem: ((item: this, index: number) => void) | null;
}