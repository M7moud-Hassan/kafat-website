import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manshat-details',
  templateUrl: './manshat-details.component.html',
  styleUrls: ['./manshat-details.component.css']
})
export class ManshatDetailsComponent implements OnInit {
  tabNumberIsActive:number = 0;
  navigationItemsList:any[]=[];
  id:number
  attchments:any[]=[]
  images:any[]=[]
  activity:any
  videos:any

  constructor(private service:ActivityService,private route:ActivatedRoute) {
    route.params.subscribe(param=>{
      this.id=param['id']
    })
  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.service.getAllDetails(this.id).subscribe(response=>{
      if(response.statusCode=='200'){
        this.activity=response.data
        this.attchments=this.activity.attachments;
        this.images=this.activity.images
       this.videos=this.activity.videos
      }
    })
  }

  onTabSelected(index:any){
    this.tabNumberIsActive = index;
  }
}
