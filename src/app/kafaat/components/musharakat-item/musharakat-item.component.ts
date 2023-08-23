import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-musharakat-item',
  templateUrl: './musharakat-item.component.html',
  styleUrls: ['./musharakat-item.component.css']
})
export class MusharakatItemComponent implements OnInit {
  isMoreReadEnabled:boolean=true;
  listItems:any[]=[]
  constructor(){}
  @Input() Items: any[] = [];
  ngOnInit(): void {
    this.listItems = this.Items;
  }
  
}
