import { Component, Input, OnInit } from '@angular/core';
import { KafaatMainService } from '../../services/kafaat-main.service';

@Component({
  selector: 'app-musharakat-item',
  templateUrl: './musharakat-item.component.html',
  styleUrls: ['./musharakat-item.component.css']
})
export class MusharakatItemComponent implements OnInit {
  isMoreReadEnabled:boolean=true;
  @Input() programId:any=0
  listItems:any[]=[]
  constructor(private service:KafaatMainService){}
   @Input() Items: any[] = [];
  ngOnInit(): void {
    //  this.listItems = this.Items;
  }

  selectActivity(num:any){
    if(num==0){
      this.listItems=this.Items;
    } else{
      this.listItems=this.Items.filter(x=>x.activityId=num)
    }
  }
  
}
