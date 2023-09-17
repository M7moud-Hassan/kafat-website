import { Component, Input, Renderer2 ,OnInit, Output, EventEmitter, HostListener} from '@angular/core';
import { KafaatMainService } from 'src/app/kafaat/services/kafaat-main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isUserAuth:boolean=false;
  userName:string='';
  @Input() typeNav: string="light";
  @Input() active:number=-1;
  @Output() handleOpenNav = new EventEmitter<boolean>();

  constructor(private renderer: Renderer2,private service:KafaatMainService) {
    this.service.authService.isUserAuthSubj.subscribe(status=>{
      this.isUserAuth = status;
    })
  }
  ngOnInit(): void {
    if(this.isUserAuth){
      this.userName = this.service.authService.currentUser().userName;
    }
  }
  openNav(): void {
    document.getElementById("mySidenav")!.style.width = "75%";
    this.handleOpenNav.emit(true);
  }

  closeNav(): void {
    document.getElementById("mySidenav")!.style.width = "0";
    this.handleOpenNav.emit(false);
  }

 
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.checkIfElementReachedTop();
  }

  private checkIfElementReachedTop() {
    
    const scrollPosition = window.scrollY || window.pageYOffset;
     if(scrollPosition <= 0)
    {
      document.getElementById('navbar')!.style.display='none';
    }else{
      document.getElementById('navbar')!.style.display='block';
    }
  }
  logout(){
    this.service.authService.logoutWithoutRedirect();
  }
}
