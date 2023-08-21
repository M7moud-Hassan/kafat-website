import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manshat-details',
  templateUrl: './manshat-details.component.html',
  styleUrls: ['./manshat-details.component.css']
})
export class ManshatDetailsComponent implements OnInit {
  tabNumberIsActive:number = 0;
  navigationItemsList:any[]=[];

  ngOnInit(): void {
    // this.loadNavigationItemsList();
  }

  // loadNavigationItemsList(){
  //   this.navigationItemsList = [
  //     {id:1,label:'تقرير المنشط',url:'#',isSelected:true},
  //     {id:2,label:'المرفقات',url:'#',isSelected:false},
  //     {id:3,label:'معرض الصور',url:'#',isSelected:false},
  //     {id:4,label:'معرض الفيديو',url:'#',isSelected:false},
  //     {id:5,label:'المشاركات',url:'#',isSelected:false},
  //     {id:6,label:'المتميزون',url:'#',isSelected:false},
  //   ];
  // }
  // chageNavigationLink(id:any){
  //   debugger;
  //   this.navigationItemsList.map(x=>x.id==id?x.isSelected=true:x.isSelected=false);
  // }
  onTabSelected(index:any){
    this.tabNumberIsActive = index;
  }
}
