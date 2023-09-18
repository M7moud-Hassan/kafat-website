import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResponseVM } from 'src/app/kafaat/core/models/response-vm';
import { MainDashoardService } from '../../services/main-dashoard.service';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';



@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  imports:[MatSelectModule,ReactiveFormsModule,CommonModule,NgxMatSelectSearchModule ],
  standalone:true
})
export class AddPostComponent implements OnInit {
  form:FormGroup = new FormGroup({});
  filterActivityType:FormGroup = new FormGroup({});
  participants:any[]
  participantsFilter:any[]
  
  constructor(private service:MainDashoardService,private dialogRef: MatDialogRef<AddPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      
    }
  ngOnInit(): void {
   this.loadData()
    this.createForm();
    this.filterActivityType.valueChanges.subscribe(newValue => {      
      this.participants = this.participantsFilter.filter(value => value.userDisplayName.includes(newValue.filterInput0));
    });
  }

  loadData(){
    this.service.activityParticipantsService.getAll(this.data.idActivity).subscribe(response=>{
      if(response.statusCode=='200'){
        this.participants=response.data
        this.participantsFilter =response.data
        
      }
    })
  }
  createForm(){
    if(this.data){
      this.form = this.service.formBuilder.group({
        participant:[this.data.uid,[Validators.required]],
        Description:[this.data.description,[Validators.required]],
        ImageFile:[this.data.imagePath,[Validators.required]],
       
      });
    }else{
      this.form = this.service.formBuilder.group({
        participant:[null,[Validators.required]],
        Description:['',[Validators.required]],
        ImageFile:[null,[Validators.required]],
       
      });
    }
    this.filterActivityType=this.service.formBuilder.group({
      filterInput0:['']
    })
  }

  get filterInput0(){
    return  this.filterActivityType.controls['filterInput0']; 
  }
  get participant(){
    return this.form.controls['participant'];
  }
  get ImageFile(){
    return this.form.controls['ImageFile'];
  }
  get Description(){
    return this.form.controls['Description'];
  }
  fileIn:File=null;


  onFileSelected(event: any): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.fileIn=file;
    }
  }

 
  
  submit() {
    // this.service.printFormValues(this.form);
    if(this.form.valid){
        const formData = new FormData();
        formData.append('ActivityId', this.data.idActivity);
        formData.append('Description', this.form.value.Description);
        formData.append('image', this.fileIn);
        formData.append('ParticipantId',this.form.value.participant);
        
        if(this.data.id){
          console.log(this.data.id);
          
          formData.append('Id', this.data.id);
          this.service.postService.update(formData).subscribe({
            next:(response:ResponseVM)=>{
              if(response.statusCode==200){
                this.service.toastService.success(response.message);
                this.closeDialog();
              }else{
                this.service.toastService.error(response.message);
              }
            },
            error:(error)=>{
              this.service.toastService.error(error);
            }
          })
        }else{
          formData.append('id', '0');
        this.service.postService.add(formData).subscribe({
        next:(response:ResponseVM)=>{
          if(response.statusCode==200){
            this.service.toastService.success(response.message);
            this.closeDialog();
          }else{
            this.service.toastService.error(response.message);
          }
        },
        error:(error)=>{
          this.service.toastService.error(error);
        }
      })
    }
    }else{
      this.service.toastService.error("افحص كل المطلوب");
    }
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}

