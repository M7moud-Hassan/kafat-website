import { Component, OnInit } from '@angular/core';
import { PagedRequest } from '../../core/models/paged-request';
import { PagedResponse } from '../../core/models/paged-response';
import { KafaatMainService } from '../../services/kafaat-main.service';

@Component({
  selector: 'app-posts-people',
  templateUrl: './posts-people.component.html',
  styleUrls: ['./posts-people.component.css']
})
export class PostsPeopleComponent implements OnInit {

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
    this.service.programService.getAllPosts(this.pagedRequest).subscribe(response=>{
     this.pageResponse=response;
     this.items=this.pageResponse.items;
    })
  }
  loadDataById(){
    this.service.programService.getAllPostsById(this.pagedRequest).subscribe(response=>{
      this.pageResponse=response;
      this.items=this.pageResponse.items;
     })
  }
  
}

