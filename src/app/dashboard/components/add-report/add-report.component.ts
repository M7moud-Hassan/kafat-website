import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainDashoardService } from '../../services/main-dashoard.service';
import { ActivatedRoute } from '@angular/router';
declare const Quill: any;

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})

export class AddReportComponent implements OnInit , AfterViewInit{
  data:any;
  form:FormGroup = new FormGroup({});
  id:number;
  @ViewChild('editor', { static: true }) editorElement: ElementRef;
  constructor(private service:MainDashoardService,private route:ActivatedRoute) {

    route.params.subscribe(params=>{
      this.id=params['id']
    })
    
  }
  ngAfterViewInit(): void {
    this.getReportDate();
    this.initializeQuillEditor();
  }
  ngOnInit(): void {
  }
  private initializeQuillEditor() {
    const toolbarOptions = [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ "font": [12,15,20,25,30] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'color': ['red','white','black','yellow','blue','green'] }, { 'background': ['red','white','black','yellow','blue','green'] }],
      // [{ 'align': ['rtl','ltr'] }],
      // ['image', 'video'],
      ['clean']
    ];

    const quill = new Quill(this.editorElement.nativeElement, {
      modules: {
        toolbar: toolbarOptions
      },
      theme: 'snow'
    });    
  }
  getReportDate(){
    this.service.activityService.getٌReport(this.id).subscribe(response=>{
      if(response.statusCode=='200'){
        this.data=response.data;        
      }else{
        this.service.toastService.error(response.message);
      }      
    });
  }

  submit(){
    var report=document.getElementsByClassName('ql-editor')[0].innerHTML;
    if(report=='<p><br></p>'){
      this.service.toastService.error('ادخل وصف المنشط مطلوب');
      return;
    }
      this.service.activityService.addReport({id:this.id,report:report}).subscribe(response=>{
        if(response.statusCode=='200'){
          this.service.toastService.success('تم اضافة البيانات')
        }else{
          this.service.toastService.error(response.message);
        }
      });
  }}