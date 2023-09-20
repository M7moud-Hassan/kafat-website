import { Component } from '@angular/core';
import { KafaatMainService } from '../../services/kafaat-main.service';
import { PagedRequest } from '../../core/models/paged-request';
import { PagedResponse } from '../../core/models/paged-response';

@Component({
  selector: 'app-posts-slides',
  templateUrl: './posts-slides.component.html',
  styleUrls: ['./posts-slides.component.css']
})
export class PostsSlidesComponent {

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
    this.service.programService.getAllShares(this.pagedRequest).subscribe(response=>{
     this.pageResponse=response;
     this.items=this.pageResponse.items;
    })
  }
  loadDataById(){
    this.service.programService.getAllSharesById(this.pagedRequest).subscribe(response=>{
      this.pageResponse=response;
      this.items=this.pageResponse.items;
     })
  }
  
}
