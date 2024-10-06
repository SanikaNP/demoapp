// employee.ts
export interface Employee {
        id?: number; // Optional for new employees
        name: string;
        dateOfBirth: string; // Use a string for date representation
        qualification: string;
        city: string;
        state: string;
        pinCode: string;
        gender: string;
        departmentId?: number; // Link to department
      }
      