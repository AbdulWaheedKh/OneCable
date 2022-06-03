import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { area } from 'src/app/models/area';
import { GenericServiceService } from 'src/app/services/generic2example-service.service';
import { gnericServiceService } from 'src/app/services/gnericServiceService';

@Component({
  selector: 'app-area-component',
  templateUrl: './area-component.component.html',
  styleUrls: ['./area-component.component.css']
})
export class AreaComponentComponent implements OnInit {

  dataSaved = false;  
  areaForm: any;  
  allAreas: Observable<area[]>;  
  employeeIdUpdate = null;  
  massage = null;  
  constructor(private formbulider: FormBuilder, private genericService:gnericServiceService) { }

  ngOnInit(): void {
  //  alert("pakistan")
  this.areaForm = this.formbulider.group({  
    name: ['', [Validators.required]],  
    description: ['', [Validators.required]], 
    isActive: ['', [Validators.required]],  
    // created: ['', [Validators.required]],  
    // modified: ['', [Validators.required]], 
  });
  this.loadAllAreas();  
  }
  loadAllAreas() {  
    this.allAreas = this.genericService.getAllAreas();  
  }  
  onFormSubmit() {  
    this.dataSaved = false;  
    const area = this.areaForm.value;  
    this.CreateArea(area);  
    this.areaForm.reset();  
  }  


  loadEmployeeToEdit(areaId:number) {  
    this.genericService.getareaById(areaId).subscribe(employee=> {  
      this.massage = null;  
      this.dataSaved = false;  
      this.employeeIdUpdate = employee.id;  
      this.areaForm.controls['name'].setValue(employee.name);  
     this.areaForm.controls['description'].setValue(employee.description);  
      this.areaForm.controls['isActive'].setValue(employee.isActive);  
      // this.areaForm.controls['created'].setValue(employee.created);  
      // this.areaForm.controls['modified'].setValue(employee.modified);  
   //   this.areaForm.controls['PinCode'].setValue(employee.PinCode);  
    });  
  
  }  

  CreateArea(area: area) {  
    if (this.employeeIdUpdate == null) {  
     this.genericService.createarea(area).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.massage = 'Record saved Successfully';  
          this.loadAllAreas();  
          this.employeeIdUpdate = null;  
          this.areaForm.reset();  
        }  
    ); 
    } else {  
      area.id = this.employeeIdUpdate;  
      this.genericService.updatearea(area).subscribe(() => {  
        this.dataSaved = true;  
        this.massage = 'Record Updated Successfully';  
        this.loadAllAreas();  
        this.employeeIdUpdate = null;  
        this.areaForm.reset();  
      });  
    }  
  }   
  deleteEmployee(id: number) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.genericService.deleteareaById(id).subscribe(() => {  
      this.dataSaved = true;  
      this.massage = 'Record Deleted Succefully';  
      this.loadAllAreas();  
      this.employeeIdUpdate = null;  
      this.areaForm.reset();  
  
    });  
  }  
}  

  resetForm() {  
    this.areaForm.reset();  
    this.massage = null;  
    this.dataSaved = false;  
  }  

}
