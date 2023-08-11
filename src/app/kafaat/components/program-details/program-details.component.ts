import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.css']
})
export class ProgramDetailsComponent implements OnInit {
  isManashetActive:boolean = true;

  ngOnInit(): void {
    this.isManashetActive = true;
  }
  
  toggleLinks(){
    this.isManashetActive = !this.isManashetActive;
  }
  
}
