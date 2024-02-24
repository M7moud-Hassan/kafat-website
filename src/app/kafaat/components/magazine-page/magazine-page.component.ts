import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MagazineService } from 'src/app/dashboard/services/magazine.service';
import { PagedRequest } from '../../core/models/paged-request';
import { PagedResponse } from '../../core/models/paged-response';
import { MagazinePageService } from 'src/app/dashboard/services/magazine-page.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-magazine-page',
  templateUrl: './magazine-page.component.html',
  styleUrls: ['./magazine-page.component.css']
})
export class MagazinePageComponent implements OnInit {
  pageResponse:PagedResponse={page:1,pageSize:2,totalCount:0,hasNextPage:false,hasPreviousPage:false,items:[]};
  pagedRequest:PagedRequest = {pageNumber:1,pageSize:2,name:''};
  items:any[]=[]
  constructor(private service:MagazinePageService,private service_m:MagazineService,private rouet:ActivatedRoute,
    private http: HttpClient) {
    rouet.params.subscribe(res=>{
      this.id=res['id']
      this.pagedRequest= {pageNumber:1,pageSize:2,name:'',id:res['id']};
    })
    
  }
  ngOnInit(): void {
    this.service_m.getAll().subscribe(res=>{
      this.magazines=res.data
    })
    this.service_m.getById(this.id).subscribe(res=>{
      this.magazine=res.data
    })
   this.service.getPage(this.pagedRequest).subscribe(res=>{
    this.pageResponse=res
    this.items=res.items
   })
  }
  magazine:any
  id:any
  magazines:any[]=[]

  nextClick(){
    this.pagedRequest= {pageNumber:this.pageResponse.page+1,pageSize:2,name:'',id:this.id};
    this.service.getPage(this.pagedRequest).subscribe(res=>{
      this.pageResponse=res
      this.items=res.items
     })
  }
  prevoisClick(){
    this.pagedRequest= {pageNumber:this.pageResponse.page-1,pageSize:2,name:'',id:this.id};
    this.service.getPage(this.pagedRequest).subscribe(res=>{
      this.pageResponse=res
      this.items=res.items
     })
  }
  startClick(){
    this.pagedRequest= {pageNumber:1,pageSize:2,name:'',id:this.id};
    this.service.getPage(this.pagedRequest).subscribe(res=>{
      this.pageResponse=res
      this.items=res.items
     })
  }
  endClick(){
    this.pagedRequest= {pageNumber:Math.ceil(this.pageResponse.totalCount/2),pageSize:2,name:'',id:this.id};
    this.service.getPage(this.pagedRequest).subscribe(res=>{
      this.pageResponse=res
      this.items=res.items
     })
  }

  downloadPdf(): void {
    const pdfUrl = this.magazine.pdfPath

    this.http.get(pdfUrl, { responseType: 'arraybuffer' as 'json' })
      .subscribe((data: any) => {
        const blob = new Blob([data], { type: 'application/pdf' });

       
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = this.magazine.title+'.pdf'; 
        link.click();
      });
  }
  @ViewChild('fullScreen') divRef: any;
  isFullScreen=false

  fullScreenfun(){
    const elem = this.divRef.nativeElement;
  if(!this.isFullScreen){
 

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
  this.isFullScreen=true

  }else{
    const doc = document as any;

    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.msExitFullscreen) {
      doc.msExitFullscreen();
    } else if (doc.mozCancelFullScreen) {
      doc.mozCancelFullScreen();
    } else if (doc.webkitExitFullscreen) {
      doc.webkitExitFullscreen();
    }
    this.isFullScreen=false
  }
}

slideConfig = {
  "slidesToShow": 4,
  "slidesToScroll": 1,
  "infinite": false,
  'rtl':true,
  "responsive": [

    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};
}


