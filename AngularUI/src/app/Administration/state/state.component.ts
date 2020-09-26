import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { State } from '../../BusinessLogic/Model/state';
  

@Component({
    selector: 'state-master',
    templateUrl: './state.component.html',
    styleUrls: ['./state.component.css']
  })

  export class StateComponent implements OnInit{
    stateForm:FormGroup;
    submitted=false;
    constructor(private _FB:FormBuilder){}

      ngOnInit(){
        this.stateForm=this._FB.group({
            stateName:['',Validators.required],
        })
      }
      get errorControl(){
          return this.stateForm.controls;
      }
      onSubmit(){
        this.submitted=true
        if(this.stateForm.invalid){
            return;
        }
        else{
            alert(JSON.stringify(this.stateForm.value));
        }
      }
  }