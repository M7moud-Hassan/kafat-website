import { ElementRef, HostListener, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KafaatSharedService {

  constructor(
    private renderer: Renderer2, private elementRef: ElementRef
  ) { }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any): void {
    this.checkWindowWidth();
  }

  checkWindowWidth(): void {
    const windowWidth = window.innerWidth;
    const element = this.elementRef.nativeElement;

    if (windowWidth > 767) {
      this.renderer.removeClass(element, 'your-class');
    } else {
      this.renderer.addClass(element, 'your-class');
    }
  }
  
}
