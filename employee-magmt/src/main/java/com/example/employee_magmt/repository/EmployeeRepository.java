package com.example.employee_magmt.repository;

import com.example.employee_magmt.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
