
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';


@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.css'],
})

export class CountyComponent implements OnInit {

    CountryForm: FormGroup;

    constructor(private fb: FormBuilder) {
        // constructor called first time before the ngOnInit()
     }

     ngOnInit(): void {
         this.CountryForm = this.fb.group({
             CountryName: ['', Validators.required]
         });
     }

}
