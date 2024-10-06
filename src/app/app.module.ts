import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component'; // Ensure this path is correct

// Define your application routes
const routes: Routes = [
  { path: 'employees', component: EmployeeComponent },
  { path: 'departments', component: DepartmentComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' }, // Default route
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes), // Ensure this is here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
