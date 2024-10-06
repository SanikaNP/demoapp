import { Component, OnInit } from '@angular/core';
import { Employee } from './employee'; // Ensure this path is correct
import { EmployeeService } from './employee.service'; // Ensure this path is correct

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  newEmployee: Employee = {
    id: 0,
    name: '',
    dateOfBirth: '',
    qualification: '',
    city: '',
    state: '',
    pinCode: '',
    gender: '',
  };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  addEmployee(): void {
    this.employeeService.addEmployee(this.newEmployee).subscribe((employee) => {
      this.employees.push(employee);
      this.newEmployee = {
        id: 0,
        name: '',
        dateOfBirth: '',
        qualification: '',
        city: '',
        state: '',
        pinCode: '',
        gender: '',
      };
    });
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter((e) => e.id !== id);
    });
  }
}
