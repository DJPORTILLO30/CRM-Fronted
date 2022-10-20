import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string = '../'
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log(' Esta imagen no funciona -->', this.elHost);
    elNative.src = this.customImg

  }

  constructor(private elHost: ElementRef) {


  }

}