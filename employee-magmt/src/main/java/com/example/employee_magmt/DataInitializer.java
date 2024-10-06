package com.example.employee_magmt;

import com.example.employee_magmt.repository.DepartmentRepository;
import com.example.employee_magmt.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public void run(String... args) {
        // Initialize Departments
        Department hr = new Department();
        hr.setName("Human Resources");
        hr.setShortDescription("Handles employee relations");
        departmentRepository.save(hr);

        Department it = new Department();
        it.setName("Information Technology");
        it.setShortDescription("Manages IT infrastructure");
        departmentRepository.save(it);

        // Initialize Employees
        Employee emp1 = new Employee();
        emp1.setName("John Doe");
        emp1.setDateOfBirth(String.valueOf(LocalDate.parse("1985-05-15")));
        emp1.setQualification("MBA");
        emp1.setCity("New York");
        emp1.setState("New York");
        emp1.setPinCode("10001");
        emp1.setGender("Male");
        emp1.setDepartment(hr);
        employeeRepository.save(emp1);

        Employee emp2 = new Employee();
        emp2.setName("Jane Smith");
        emp2.setDateOfBirth(String.valueOf(LocalDate.parse("1990-08-20")));
        emp2.setQualification("B.Tech");
        emp2.setCity("San Francisco");
        emp2.setState("California");
        emp2.setPinCode("94101");
        emp2.setGender("Female");
        emp2.setDepartment(it);
        employeeRepository.save(emp2);
    }
}
