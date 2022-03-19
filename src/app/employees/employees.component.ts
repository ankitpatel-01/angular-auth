import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { Dept } from './models/dept.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {


  public depts: Dept[];

  constructor(
    private empService: EmployeesService
  ) { }

  ngOnInit(): void {
    this.empService.getAllDept().subscribe({
      next: (data) => {
        this.depts = data
      }
    })
  }

}
