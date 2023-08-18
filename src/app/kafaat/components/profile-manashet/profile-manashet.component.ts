import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-manashet',
  templateUrl: './profile-manashet.component.html',
  styleUrls: ['./profile-manashet.component.css']
})
export class ProfileManashetComponent implements OnInit {
  hideTest:boolean = true;
  navList:any[]=[];

  ngOnInit(): void {
    this.fillNavList();
    this.hideTest = true;
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

}
