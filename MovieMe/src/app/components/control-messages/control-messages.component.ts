import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.scss']
})
export class ControlMessagesComponent {
  //  errorMessage: string;
   @Input() control: FormGroup;
   constructor() {}
  
  //======================================================//
  //=========  run and find all errors from group ========//
  //======================================================//
  errorMessage() {
     for (let propertyName in this.control.errors) {
       if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
         return this.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
       }
     }
     
     return null;
   }

  //======================================================//
  //====  return a error message by the type of this =====//
  //======================================================//
   getValidatorErrorMessage(validatorName: string, validatorValue?: any){
    let config = {
      'required': 'Required',
      'minlength': `Minimum length ${validatorValue.requiredLength}`,
      'pattern': 'Alphanumeric only allowed',
    };
    return config[validatorName];
   }
 }
