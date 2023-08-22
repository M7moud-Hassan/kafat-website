import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-nav',
  templateUrl: './scroll-nav.component.html',
  styleUrls: ['./scroll-nav.component.css']
})
export class ScrollNavComponent {
  index:number=0;
  onTap(index:number):void{
    this.index=index;
  }

  slideConfig = {
    "slidesToShow": 7,
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
}
