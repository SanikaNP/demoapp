import { Component, OnInit } from '@angular/core';
import { Department } from './department'; // Adjust path if department.ts is in the same folder
import { DepartmentService } from './department.service'; // Adjust path if department.service.ts is in the same folder


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  departments: Department[] = [];
  newDepartment: Department = {
    name: '',
    shortDescription: '',
    id: 0
  };

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe((data) => {
      this.departments = data;
    });
  }

  addDepartment(): void {
    this.departmentService.addDepartment(this.newDepartment).subscribe((department) => {
      this.departments.push(department);
      this.newDepartment = {
        name: '',
        shortDescription: '',
      };
    });
  }

  deleteDepartment(id: number): void {
    this.departmentService.deleteDepartment(id).subscribe(() => {
      this.departments = this.departments.filter((d) => d.id !== id);
    });
  }
}