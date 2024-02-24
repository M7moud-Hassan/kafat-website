import { Component, OnInit } from '@angular/core';
import { MagazineService } from 'src/app/dashboard/services/magazine.service';
import { PagedRequest } from '../../core/models/paged-request';
import { PagedResponse } from '../../core/models/paged-response';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {
  pageResponse:PagedResponse={page:1,pageSize:16,totalCount:0,hasNextPage:false,hasPreviousPage:false,items:[]};
  pagedRequest:PagedRequest = {pageNumber:1,pageSize:16,name:''};
  items:any[]=[]
  constructor(private service:MagazineService) {
    
  }
  ngOnInit(): void {
    this.service.getPage(this.pagedRequest).subscribe(res=>{
      this.pageResponse=res;
     this.items=this.pageResponse.items;
    })
  }
  onselect(event:any){

  }
}
