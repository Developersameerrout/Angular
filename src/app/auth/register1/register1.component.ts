import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.scss']
})
export class Register1Component{
  skillsForm: FormGroup;
 
  constructor(private fb:FormBuilder) {
 
    this.skillsForm = this.fb.group({
      name: '',
      skills: new FormArray([]) ,
    });
  
  }

  // get skills() : FormArray {
  //   return this.skillsForm.get("skills") as FormArray
  // }
  newSkill(): FormGroup {
    return this.fb.group({
      Name: '',
      Age: '',
    })
 }
 addSkills() {
  (<FormArray>this.skillsForm.get('skills')).push(this.newSkill());
}
removeSkill(i:number) {
  (<FormArray>this.skillsForm.get('skills')).removeAt(i);
} 
onSubmit() {
  console.log(this.skillsForm.value);
}

}
