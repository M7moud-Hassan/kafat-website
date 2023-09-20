import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KafaatMainService } from 'src/app/kafaat/services/kafaat-main.service';

@Component({
  selector: 'app-scroll-nav',
  templateUrl: './scroll-nav.component.html',
  styleUrls: ['./scroll-nav.component.css']
})
export class ScrollNavComponent  implements OnInit{
  @Output() numberSelected = new EventEmitter<number>();
  items:any[]=[]
  constructor(private service:KafaatMainService) {
  
    
  }
  ngOnInit(): void {
   this.service.programService.geAll().subscribe(response=>{
    if(response.statusCode=='200'){
      this.items=response.data
    }
   })
  }

  getIterationCount(): number[] {
    const count = 7 - this.items.length;
    return count > 0 ? new Array(count) : [];
  }
 
  index:number=0;
  onTap(index:number):void{
    this.index=index;
    this.numberSelected.emit(index);
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
