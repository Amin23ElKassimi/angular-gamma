import { Directive } from '@angular/core';

@Directive({
  selector: '[appHiglight]'
})
export class HiglightDirective {

  constructor(private el: ElementRef) {}

  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
