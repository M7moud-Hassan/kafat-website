import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.css']
})
export class ProgramDetailsComponent implements OnInit {
  isManashetActive:boolean = true;
  navList:any[]=[];

  ngOnInit(): void {
    this.isManashetActive = true;
    this.fillNavList();
  }
  
  toggleLinks(){
    this.isManashetActive = !this.isManashetActive;
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
