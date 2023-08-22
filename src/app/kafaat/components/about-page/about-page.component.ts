import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {
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
}
