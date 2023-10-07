import { Component, OnInit, ViewChild } from '@angular/core';
import { MainDashoardService } from 'src/app/dashboard/services/main-dashoard.service';
import { ResponseVM } from '../../core/models/response-vm';
import { DialogVideoImageComponent } from 'src/app/shared/components/dialog-video-image/dialog-video-image.component';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  imageNumber1:string = '/assets/images/about2.png';
  imageNumber2:string = '/assets/images/about3.png';
  imageNumber3:string = '/assets/images/about4.png';
  imageNumber4:string = '/assets/images/about5.png';
  imageNumber5:string = '/assets/images/about6.png';
  imageNumber6:string = '/assets/images/about7.png';
  @ViewChild('dialog', { static: false }) dialogComponent: DialogVideoImageComponent | undefined;
  documentedImageItems:any[]=[];
  videoUrl:string = 'https://www.youtube.com/embed/v69praWH6cs?si=ennlWOhMnXzh2x5S';
  constructor(private service:MainDashoardService){}
  ngOnInit(): void {
    this.getDocumentedImage();
    this.getIntroductoryVideoUrl();
  }
  getDocumentedImage(){
    this.service.documentedImageService.getAll().subscribe({
      next:(res:ResponseVM)=>{
        this.documentedImageItems = res.data;
        this.imageNumber1 = this.documentedImageItems.find(x=>x.imageOrder==1) ?  this.documentedImageItems.find(x=>x.imageOrder==1).imagePath : '/assets/images/about2.png';
        this.imageNumber2 = this.documentedImageItems.find(x=>x.imageOrder==2) ?  this.documentedImageItems.find(x=>x.imageOrder==2).imagePath : '/assets/images/about3.png';
        this.imageNumber3 = this.documentedImageItems.find(x=>x.imageOrder==3) ?  this.documentedImageItems.find(x=>x.imageOrder==3).imagePath : '/assets/images/about4.png';
        this.imageNumber4 = this.documentedImageItems.find(x=>x.imageOrder==4) ?  this.documentedImageItems.find(x=>x.imageOrder==4).imagePath : '/assets/images/about5.png';
        this.imageNumber5 = this.documentedImageItems.find(x=>x.imageOrder==5) ?  this.documentedImageItems.find(x=>x.imageOrder==5).imagePath : '/assets/images/about6.png';
        this.imageNumber6 = this.documentedImageItems.find(x=>x.imageOrder==6) ?  this.documentedImageItems.find(x=>x.imageOrder==6).imagePath : '/assets/images/about7.png';
      }
    });
  }
  getIntroductoryVideoUrl(){
    this.service.contactInformationService.get().subscribe({
      next:(res:ResponseVM)=>{
        if(res.statusCode == 200){
          let link:string = res.data.introductoryVideoLink;
          this.videoUrl = link;
        }
      }
    })
  }


  showOverlay = false;
  openOrClosNav(value:boolean):void{
    this.showOverlay=value;
  }

  itemCardEnter(index:number):void{
    
    document.getElementById('p'+index)!.style.color='#005183';
    
  }
  itemCardLeave(index:number):void{
    console.log(2222)
    document.getElementById('p'+index)!.style.color='white';
  }

  openModal(){
      this.dialogComponent.openVideo(this.videoUrl);
  }
}
