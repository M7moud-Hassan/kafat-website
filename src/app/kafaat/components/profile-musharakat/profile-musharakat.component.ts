import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-musharakat',
  templateUrl: './profile-musharakat.component.html',
  styleUrls: ['./profile-musharakat.component.css']
})
export class ProfileMusharakatComponent {
  // hideTest:boolean = true;
  navList:any[]=[];
  isDropDownVisible:boolean=false;

  ngOnInit(): void {
    this.fillNavList();
    // this.hideTest = true;
  }

  selectItem(id:any){
    this.navList.map(x=>x.id==id?x.isSelected=true:x.isSelected=false);
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
  toggleOptions(){
    this.isDropDownVisible = !this.isDropDownVisible;
  }
}