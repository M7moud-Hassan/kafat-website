import { AfterViewInit, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@Component({
  selector: 'app-pdf-popup',
  templateUrl: './pdf-popup.component.html',
  styleUrls: ['./pdf-popup.component.css'],
  standalone:true,
imports:[PdfViewerModule]
})
export class PdfPopupComponent implements AfterViewInit {
  pdfUrl = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<PdfPopupComponent>) {
    this.pdfUrl= data.cvPdf.split('/')[data.cvPdf.split('/').length-1] 
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

  ngAfterViewInit() {
	
	}
}
