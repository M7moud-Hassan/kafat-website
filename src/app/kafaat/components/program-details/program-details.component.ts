import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.css']
})
export class ProgramDetailsComponent implements OnInit {
  tabNumberIsActive:number = 0;
  navList:any[]=[];

  ngOnInit(): void {
    this.fillNavList();
  }
  selectItem(id:any){
    this.navList.map(x=>x.id==id?x.isSelected=true:x.isSelected=false);
  }
  fillNavList(){
    this.navList = [
      {id:1,label:'جميع المناشط',isSelected:true},
      {id:2,label:'القادمة',isSelected:false},
      {id:3,label:'الحالية',isSelected:false},
      {id:4,label:'السابقة',isSelected:false},
    ];
  }
  onTabSelected(index:any){
    this.tabNumberIsActive = index;
  }
}
