import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective    {
 @Input("LightBox") highLightColor:string = "green"
  constructor(private elementRef: ElementRef) {
  //  this.elementRef.nativeElement.style.border = "2px solid red"
   }

   @HostListener("mouseover") onMouseIn() {
   this.elementRef.nativeElement.style.border = `2px solid ${this.highLightColor}`
   }
   @HostListener("mouseout") onMouseOut() {
   this.elementRef.nativeElement.style.border = "2px solid green"
   }

}
