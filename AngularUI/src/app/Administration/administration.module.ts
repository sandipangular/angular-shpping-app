import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdministrationRoutingModule } from './administration-routing.module';

//Components
import { CountyComponent } from './Country/country.component';
import { StateComponent } from './State/state.component';

@NgModule({
    declarations: [ 
        CountyComponent,
        StateComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AdministrationRoutingModule
    ],
    exports: [],
    providers: [],
})

export class AdministartionModule {

}
