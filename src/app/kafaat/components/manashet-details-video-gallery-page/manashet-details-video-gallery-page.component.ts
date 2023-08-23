import { Component, ViewChild } from '@angular/core';
import { DialogVideoImageComponent } from 'src/app/shared/components/dialog-video-image/dialog-video-image.component';

@Component({
  selector: 'app-manashet-details-video-gallery-page',
  templateUrl: './manashet-details-video-gallery-page.component.html',
  styleUrls: ['./manashet-details-video-gallery-page.component.css']
})
export class ManashetDetailsVideoGalleryPageComponent {

  @ViewChild('dialog', { static: false }) dialogComponent: DialogVideoImageComponent | undefined;
  openModal(){
    console.log(this.dialogComponent)
    if (this.dialogComponent) {
      this.dialogComponent.openVideo("https://www.youtube.com/embed/Apl8h-P0F9Q");
    }
  }
}
