import { AfterViewInit, Component, OnInit } from '@angular/core';
import { KafaatMainService } from '../../services/kafaat-main.service';
import { ResponseVM } from '../../core/models/response-vm';

@Component({
  selector: 'app-goals-kafaat',
  templateUrl: './goals-kafaat.component.html',
  styleUrls: ['./goals-kafaat.component.css']
})
export class GoalsKafaatComponent implements OnInit,AfterViewInit {
  items:any[] = [];
  test:string="ali";
  constructor(private service:KafaatMainService){}
  ngAfterViewInit(): void {
    this.getItems();
  }
  ngOnInit(): void {
    this.getItems();
  }
  getItems(){
    this.service.aboutUsService.getAll().subscribe({
      next:(res:ResponseVM)=>{
        this.items = res.data;
        // alert(this.items.length)
      },
      error:(error)=>{
        this.service.toastService.error("هناك خطأ فى استرجاع بيانات مؤســـسـوا كــفاءات")
      }
    })
  }
  trackByFn(index: number, item: any): any {
    return item.id; // Replace 'id' with the actual identifier property of your item
  }
}
