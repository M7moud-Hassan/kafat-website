import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf-popup',
  templateUrl: './pdf-popup.component.html',
  styleUrls: ['./pdf-popup.component.css']
})
export class PdfPopupComponent {
  pdfUrl:string = "http://localhost:59638/images/FullStack.pdf";
}
