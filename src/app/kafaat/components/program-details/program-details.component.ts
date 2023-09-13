import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramsService } from '../../services/programs.service';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.css']
})
export class ProgramDetailsComponent implements OnInit {
  tabNumberIsActive:number = 0;
  navList:any[]=[];
  id:any
  program:any
  constructor(private route:ActivatedRoute,private service:ProgramsService) {
    this.route.params.subscribe(value=>{
      this.id=value['id']
    })
  }

  ngOnInit(): void {
    this.fillNavList();
    this.loadProgram()
  }
  loadProgram(){
    this.service.getById(this.id).subscribe(response=>{
      if(response.statusCode=='200'){
        this.program=response.data
      }
      console.log(response.data)
    })
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
