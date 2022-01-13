import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector : '[app-highlight]'
})
export class HighlightDirective{

  @HostBinding('style.backgroundColor') bgColor : any;

  @HostListener('mouseenter')
  mouseneter(){
    this.bgColor = 'aqua';
  }

  @HostListener('mouseleave')
  mouseleave(){
    this.bgColor = 'transparent';
  }

  // constructor(private elementRef : ElementRef){
  //   console.log(this.elementRef.nativeElement);
  //   this.elementRef.nativeElement.style.backgroundColor = 'grey';
  // }
}

// <app-highlight></app-highlight>
// <div app-highlight></div>
