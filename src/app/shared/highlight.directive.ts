import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective implements OnChanges {
  constructor(private el: ElementRef) {
    el.nativeElement.style.customProperty = true;
  }
  defaultColor = 'rgb(211,211,211)';
  @Input('highlight') bgColor = '';
  ngOnChanges() {
    this.el.nativeElement.backgroundColor = this.bgColor || this.defaultColor;
  }
}
