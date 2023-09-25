import { Component, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dialog-video-image',
  templateUrl: './dialog-video-image.component.html',
  styleUrls: ['./dialog-video-image.component.css']
})
export class DialogVideoImageComponent {
  /**
   *
   */
  constructor(private renderer:Renderer2) {
    
    
  }
  
  videoContainer:any
  iframe:any
   modalImageSrc:string=''
 videoSource:string='';
  modalVisible: boolean = false;
  openImage(source:string) {
    this.modalImageSrc=source;
    this.videoSource='';
    this.modalVisible = true;
  }

  openVideo(source:string) {
    this.videoSource=source;
    this.modalImageSrc='';
    this.modalVisible = true;

   setTimeout(()=>{
     this.videoContainer = document.getElementById('div-video');
    if (this.videoContainer) {
      
       this.iframe = this.renderer.createElement('iframe');
      this.renderer.setAttribute(this.iframe, 'width', '100%');
      this.renderer.setAttribute(this.iframe, 'height', '100%');
      this.renderer.setAttribute(
        this.iframe,
        'src',
        source
      );
      this.renderer.setAttribute(this.iframe, 'title', 'YouTube video player');
      this.renderer.setAttribute(this.iframe, 'frameborder', '0');
      this.renderer.setAttribute(
        this.iframe,
        'allow',
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      );
      this.renderer.setAttribute(this.iframe, 'allowfullscreen', '');

      this.renderer.appendChild(this.videoContainer, this.iframe);
    }
   },500)
  
  }

  closeModal() {
    this.modalVisible = false;
    this.renderer.removeChild(this.videoContainer, this.iframe);
  }
}
