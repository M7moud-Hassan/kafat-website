import { Component, Input, Renderer2 ,OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  @Input() typeNav: string="light";
  @Output() handleOpenNav = new EventEmitter<boolean>();

  constructor(private renderer: Renderer2) {
    
    
  }
  ngOnInit(): void {
  
  
  }
  openNav(): void {
    document.getElementById("mySidenav")!.style.width = "75%";
    this.handleOpenNav.emit(true);
  }

  closeNav(): void {
    document.getElementById("mySidenav")!.style.width = "0";
    this.handleOpenNav.emit(false);
  }
}
