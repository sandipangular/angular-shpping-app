
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.css'],
})

export class CountyComponent implements OnInit {

    title = 'Country';

    constructor() {
        // constructor called first time before the ngOnInit()
     }

     ngOnInit(): void {
        this.title = 'country master';
     }

}
