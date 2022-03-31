import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input('appSort') list: Array<any>;
  public sortDir = 1;//1= 'ASE' -1= DSC

  constructor(private targetElement: ElementRef) { }

  @HostListener("click")
  sortData() {

    const el = this.targetElement.nativeElement;

    const order = el.getAttribute("data-order");

    const property = el.getAttribute("data-name");

    if (order === "dsc") {
      this.sortDir = -1;
      el.setAttribute("data-order","asc");
    }
    else {
      this.sortDir = 1;
      el.setAttribute("data-order","dsc");
    }
    this.sortArr(property, this.sortDir)
  }

  sortArr(property: any, direction: any) {
    this.list.sort((a, b) => {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  }
}
