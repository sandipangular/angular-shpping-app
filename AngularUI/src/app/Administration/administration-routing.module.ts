import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Component
import { CountyComponent } from './Country/country.component';
import { StateComponent } from './State/state.component';

const routes: Routes = [
  { path: 'Administration',
    children: [
      { path: 'Country', component: CountyComponent},
      { path: 'State', component: StateComponent}
    ]
  }
];

@NgModule({
  declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: []
  })

export class AdministrationRoutingModule {

}
