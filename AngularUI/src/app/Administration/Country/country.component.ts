
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.css'],
})

export class CountyComponent implements OnInit {

    constructor() {
        // constructor called first time before the ngOnInit()
     }
   
     ngOnChanges() {

     }

     ngOnInit() {
        // called after the constructor and called  after the first ngOnChanges();
     }

    

    ngDOCheck() {

    }

    ngAfterContentInit() {

    }

    ngAfterContentChecked() {
        
    }

    ngAfterViewInit() {
        
    }

    ngAfterViewChecked() {
        
    }

    ngOnDestroy() {

    }
}
