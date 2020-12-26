import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ConfirmationService]
})
export class AppComponent implements OnInit {
  title = 'ng-reactiveforms-add-sections-dynamic';
  actionCreateForm: FormGroup;
  stepsArray: FormArray;
  actionName: any;
  actionCommand: any;
  constructor(private fb: FormBuilder, private confirmationService: ConfirmationService, private location: Location) {
  
  }
  ngOnInit() {
    this.actionCreateForm = this.fb.group({
      clientId:['',[Validators.required]],
      clientName:['',[Validators.required]],
      stepsArray: this.fb.array([])    
    });
    this.stepsArray = this.actionCreateForm.get('stepsArray') as FormArray;
  }

  get stepsArrayGroup() {
    return this.actionCreateForm.get('stepsArray') as FormArray;
  }
  initStepsArray() {
    return this.fb.group({
      actionStepsForm:['']
    })
  }
  addStep(){
    this.stepsArray = this.actionCreateForm.get('stepsArray') as FormArray;
    this.stepsArray.push(this.initStepsArray())
  }
  removeStep(index) {
    this.stepsArray = this.actionCreateForm.get('stepsArray') as FormArray;
    this.stepsArray.removeAt(index);
  }
  getStepsArrayGroup(index): FormGroup {
    const formGroup = this.stepsArray.controls[index] as FormGroup;
    return formGroup;
  }

  resetForm() {
    this.actionCreateForm.reset();
    location.reload();
  }

  submitForm() {
    const clientId = this.actionCreateForm.value.clientId;
    const clientName = this.actionCreateForm.value.clientName;
    const stepsArray = this.actionCreateForm.value.stepsArray;
    for(const prop in stepsArray){
      if(stepsArray[prop] !== null){
        this.actionName = stepsArray[prop].actionStepsForm.actionName;
        this.actionCommand = stepsArray[prop].actionStepsForm.actionCommand;
      }
      console.log(this.actionName+''+this.actionCommand);
    }
    console.log(clientId +''+clientName);
  }
}
