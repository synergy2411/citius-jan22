import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NewEmployeeComponent } from "./components/new-employee/new-employee.component";

@NgModule({
  declarations :      [NewEmployeeComponent],
  providers :         [],
  imports :           [CommonModule],
  exports :           [NewEmployeeComponent]
})
export class EmployeeModule{}
