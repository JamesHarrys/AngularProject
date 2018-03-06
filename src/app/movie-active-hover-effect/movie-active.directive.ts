import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMovieActive]'
})
export class MovieActiveDirective {

  @HostListener('mouseenter') onmouseenter() {
    this.el.nativeElement.style.backgroundColor = '#FFBC4B';
  }
  @HostListener('mouseleave') onmouseleave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
  
  constructor(public el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'color';
  }  
  
}
