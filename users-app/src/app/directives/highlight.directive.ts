import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector : '[app-highlight]'
})
export class HighlightDirective{

  @Input() favColor : string;
  @HostBinding('style.backgroundColor') bgColor : any = 'transparent';
  @HostBinding('style.fontSize') fontSize : any;

  @HostListener('mouseenter')
  onMouseEnter(){
    this.bgColor = this.favColor;
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.bgColor = 'transparent';
  }

  // constructor(private elementRef : ElementRef){
  //   console.log(this.elementRef.nativeElement);
  //   this.elementRef.nativeElement.style.backgroundColor = 'grey';
  // }
}

// <app-highlight></app-highlight>
// <div app-highlight></div>
