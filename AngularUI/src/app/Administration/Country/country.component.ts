
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

import { BusinessService, CommanConfigration } from '../../BusinessLogic/Business/business.service';
import { Country } from '../../BusinessLogic/Model/Country';

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.css'],
})

export class CountyComponent implements OnInit {

    CountryForm: FormGroup;
    CountryList: Country[];
    Country:Country;

    constructor(private fb: FormBuilder, private businessService: BusinessService) {}

     ngOnInit(): void {
         this.GetCountry();
         this.CountryForm = this.fb.group({
             CountryName: ['', Validators.required]
         });
     }

     OnSubmit(): void {
         this.Insert();
     }

     GetCountry(): void {
        this.businessService.HttpGet<Country>(CommanConfigration.EndPoint).subscribe(
            (value) => this.CountryList = value,
            (err) => console.log(err)
          );
     }
     
     GetCountryById(Id:string): void {
        this.businessService.HttpGetById<Country>(CommanConfigration.EndPoint, Id).subscribe(
            (value) => this.Country = value,
            (err) => console.log(err)
          );
     }

     Insert(): void {
        this.businessService.HttpPost<Country>(CommanConfigration.EndPoint, this.Country).subscribe(
            (value) => this.Country = value,
            (err) => console.log(err)
        );
     }

     Update(): void {
        this.businessService.HttpPut<Country>(CommanConfigration.EndPoint, this.Country).subscribe(
            (value) => this.Country = value,
            (err) => console.log(err)
        );
     }

     Delete(Id:string): void {
        this.businessService.HttpDelete<Country>(CommanConfigration.EndPoint, Id).subscribe(
            (value) => this.Country = value,
            (err) => console.log(err)
        );
     }
}
