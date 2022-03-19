import { Component, Input, OnInit } from '@angular/core';
import { Emp } from '../models/dept.model';

@Component({
  selector: 'app-emp-card-holder',
  templateUrl: './emp-card-holder.component.html',
  styleUrls: ['./emp-card-holder.component.scss']
})
export class EmpCardHolderComponent implements OnInit {

  @Input() set emps(emps: Emp[]) {
    this._emps = emps;
  }

  get emps(): Emp[] {
    return this._emps;
  }

  private _emps: Emp[]
  constructor() { }

  ngOnInit(): void {
    if (this._emps) {
      console.log(this._emps)
    }
  }

}
