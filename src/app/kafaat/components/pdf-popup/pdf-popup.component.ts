import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Inject, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CvImagePopupComponent } from 'src/app/shared/components/cv-image-popup/cv-image-popup.component';
@Component({
  selector: 'app-pdf-popup',
  templateUrl: './pdf-popup.component.html',
  styleUrls: ['./pdf-popup.component.css'],
  standalone:true,
imports:[PdfViewerModule]
})
export class PdfPopupComponent implements AfterViewInit {
  title = '';
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<CvImagePopupComponent>) {
    
    this.title= data.cvPdf.split('/')[data.cvPdf.split('/').length-1]
   
    
  }

  ngAfterViewInit() {
	
	}
}
