import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { ActivatedRoute } from '@angular/router';
import { KafaatMainService } from '../../services/kafaat-main.service';

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

  constructor(private service:KafaatMainService,private route:ActivatedRoute) {
    this.route.params.subscribe(param=>{
      this.id=param['id']
    })
  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.service.activityService.getAllDetails({id:this.id,idParti:this.service.authService.currentUser().id}).subscribe(response=>{
      if(response.statusCode=='200'){
        this.activity=response.data
        this.attchments=this.activity.attachments;
        this.images=this.activity.images
       this.videos=this.activity.videos
      }
    })
  }

  JoinActivity(){
    this.service.activityParticipantsService.add({ActivityId:this.id,ParticipantId:this.service.authService.currentUser().id}).subscribe(response=>{
      if(response.statusCode=='200'){
      this.service.toastService.success(response.message);
      this.activity.isParticipant=true;
      }else{
        this.service.toastService.error(response.message); 
      }
    })
  }

  onTabSelected(index:any){
    this.tabNumberIsActive = index;
  }
}
