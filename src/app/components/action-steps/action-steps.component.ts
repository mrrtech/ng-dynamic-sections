import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-action-steps',
  templateUrl: './action-steps.component.html',
  styleUrls: ['./action-steps.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ActionStepsComponent),
      multi: true
    }
  ]
})
export class ActionStepsComponent implements OnInit, ControlValueAccessor {

  @Input() stepCounter: number;

  public actionStepsForm: FormGroup = new FormGroup({
    actionName: new FormControl('',[Validators.required]),
    actionCommand: new FormControl('', [Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
  }

  public onTouched: () => void =() => {};

  writeValue(val : any): void {
    val && this.actionStepsForm.setValue(val, {emitEvent: false})
  }
  registerOnChange(fn: any): void {
    this.actionStepsForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisableState(isDisabled: boolean): void {
    isDisabled? this.actionStepsForm.disable(): this.actionStepsForm.enable();
  }
}
