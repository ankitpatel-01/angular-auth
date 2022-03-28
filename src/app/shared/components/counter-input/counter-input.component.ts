import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent implements OnInit {

  @Input() min: number;
  @Input() max: number;
  @Input() initailValue: number;

  public value=0;

  constructor() { }

  ngOnInit(): void {
    if(this.initailValue){
      this.value = this.initailValue;
    }
    if(this.min){
      this.value = this.min;
    }
  }

  decrease(){
    console.log(this.value)
    console.log(this.min)
    if(this.value > this.min)
      this.value--;
  }

  increase(){
    if(this.value < this.max)
      this.value++;
  }

}
