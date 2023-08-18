import { Component, OnInit } from '@angular/core';
import { KafaatMainService } from '../../services/kafaat-main.service';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.css']
})
export class ProfileLayoutComponent implements OnInit {
  navigationItemsList:any[]=[];
// constructor(private service:KafaatMainService){}
  ngOnInit(): void {
    this.loadNavigationItemsList();
  }

  loadNavigationItemsList(){
    this.navigationItemsList = [
      {id:1,label:'معلومات الحساب',url:'#',isSelected:true},
      {id:2,label:'المناشط',url:'#',isSelected:false},
      {id:3,label:'المدفوعات',url:'#',isSelected:false},
      {id:4,label:'المشاركات',url:'#',isSelected:false},
      {id:5,label:'الإنجازات',url:'#',isSelected:false},
      {id:6,label:'تسجيل الخروج',url:'#',isSelected:false},
      {id:7,label:'حذف الحساب',url:'#',isSelected:false},
    ];
  }
  chageNavigationLink(id:any){
    this.navigationItemsList.map(x=>x.id==id?x.isSelected=true:x.isSelected=false);
  }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     width: '400px', // Adjust the width as needed
  //     // You can pass data to the dialog component using the `data` property
  //     data: { message: 'Hello, this is a dialog!' }
  //   });
  
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     // Handle any actions after the dialog is closed, if needed
  //   });
  // }
}
