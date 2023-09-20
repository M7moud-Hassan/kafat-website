import { Component, OnInit } from '@angular/core';
import { KafaatMainService } from '../../services/kafaat-main.service';
import { PagedResponse } from '../../core/models/paged-response';
import { PagedRequest } from '../../core/models/paged-request';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent  implements OnInit{
  pageResponse:PagedResponse={page:1,pageSize:10,totalCount:0,hasNextPage:false,hasPreviousPage:false,items:[]};
  pagedRequest:PagedRequest = {pageNumber:1,pageSize:16,name:''};
  items:any
constructor(private service:KafaatMainService) {

}
  ngOnInit(): void {
    this.loadData();
  }

  onselect(event:number){
    if(event>0){
      this.pagedRequest.id=event;
      this.loadDataById();
    }else{
      this.loadData();
    }
    
  }

  loadData(){
    this.service.programService.getAllWinners(this.pagedRequest).subscribe(response=>{
     this.pageResponse=response;
     this.items=this.pageResponse.items;
    })
  }
  loadDataById(){
    this.service.programService.getAllWinnersById(this.pagedRequest).subscribe(response=>{
      this.pageResponse=response;
      this.items=this.pageResponse.items;
     })
  }
  
}
