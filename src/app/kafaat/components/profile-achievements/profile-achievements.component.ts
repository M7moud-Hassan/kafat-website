import { Component } from '@angular/core';
import { KafaatMainService } from '../../services/kafaat-main.service';

@Component({
  selector: 'app-profile-achievements',
  templateUrl: './profile-achievements.component.html',
  styleUrls: ['./profile-achievements.component.css']
})
export class ProfileAchievementsComponent {
  // hideTest:boolean = true;
  /**
   *
   */
  constructor(private service:KafaatMainService) {
    
  }
  navList:any[]=[];
  items:any[]
  filterItems:any[]
  isDropDownVisible:boolean=false;
  isDropDownOptionsVisible:boolean=false;


  ngOnInit(): void {
    //this.fillNavList();
    // this.hideTest = true;
    this.loadData()
  }

  loadData(){
    this.service.programService.geAll().subscribe(res=>{
      this.navList=res.data;
      this.navList[0].isSelected=true;
      this.service.activityParticipantsService.getActivitiesParticipants(this.service.authService.currentUser().id)
      .subscribe(res=>{
        this.items=res.data
        this.filterItems=this.items.filter(x=>x.programName==this.navList[0].title)
      })
    })
  }

  selectItem(title:any){
    this.navList.map(x=>x.title==title?x.isSelected=true:x.isSelected=false);
    this.filterItems=this.items.filter(x=>x.programName==title)
    // if(id==7){
    //   this.isDropDownOptionsVisible=!this.isDropDownOptionsVisible;
    // }
  }
  fillNavList(){
    this.navList = [
      {id:1,label:'جميع البرامج',isSelected:true},
      {id:2,label:'برنامج قارئ',isSelected:false},
      {id:3,label:'برنامج كاتب',isSelected:false},
      {id:4,label:'برنامج ماهر',isSelected:false},
      {id:5,label:'برنامج متفوق',isSelected:false},
      {id:6,label:'برنامج موهوب',isSelected:false},
      {id:7,label:'المزيد',isSelected:false},
    ];
  }
  // toggleOptions(){
  //   this.isDropDownVisible = !this.isDropDownVisible;
  // }
}
