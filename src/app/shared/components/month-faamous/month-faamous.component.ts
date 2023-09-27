import { Component, OnInit } from '@angular/core';
import { MainDashoardService } from 'src/app/dashboard/services/main-dashoard.service';
import { ResponseVM } from 'src/app/kafaat/core/models/response-vm';

@Component({
  selector: 'app-month-faamous',
  templateUrl: './month-faamous.component.html',
  styleUrls: ['./month-faamous.component.css']
})
export class MonthFaamousComponent implements OnInit {
  distinguishedMembers:any[]=[];
  constructor(private service:MainDashoardService){
  }
  ngOnInit(): void {
    this.getData();
  }
  
  getData(){
    this.service.activityService.getLastDistinguishedMembers().subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode == 200){
          // var allMembers:any[] = res.data.sort(() => Math.random() - 0.5);
          // this.distinguishedMembers = allMembers.slice(0,4);
          this.distinguishedMembers = res.data;
          // alert(this.distinguishedMembers.length);
        }
      },
      error:(error)=>{
        this.service.toastService.error("حدث خطأ ما أثناء استرجاع بيانات متميزوا الشهر")
      }
    });
  }
}
