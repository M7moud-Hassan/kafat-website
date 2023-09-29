import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input('appTooltip') tooltipText: string;
  private tooltipElement: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    if (!this.tooltipElement) {
      this.createTooltipElement();
    }

    this.renderer.appendChild(document.body, this.tooltipElement);
    const { top, left } = this.el.nativeElement.getBoundingClientRect();
    console.log(`top : ${top} , left : ${left}`)
    this.renderer.setStyle(this.tooltipElement, 'top', `${top - 40}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${left - 20}px`);
  }

  private hideTooltip() {
    if (this.tooltipElement && this.tooltipElement.parentNode) {
      this.tooltipElement.parentNode.removeChild(this.tooltipElement);
    }
  }

  private createTooltipElement() {
    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltipElement, 'customTooltip');
    this.renderer.appendChild(this.tooltipElement, this.renderer.createText(this.tooltipText));
  }
}