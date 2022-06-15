import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  extra: FormGroup;

  constructor(private fb:FormBuilder) { 
    this.register=new FormGroup({
    //   "Firstname":new FormControl(''),
    //  " Lastname":new FormControl(''),
    //   "Age":new FormControl(''),
  "hobby":new FormArray([
      
        
      ])
      
    })
  }

  ngOnInit(): void {
    
    
  }
  registerFunction(){
    console.log(this.register);
  }
  newSkill(): FormGroup {
    return this.fb.group({
      AgE: '',
      FirstName: '',
    })
  }
  Add(){
    
   (<FormArray>this.register.get('hobby')).push(this.extra)

  }

}

