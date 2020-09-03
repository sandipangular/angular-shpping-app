import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { stateComponent } from './state/state.component';

const routes: Routes = [
  {path: 'state', component: stateComponent}
];

@NgModule({
  declarations: [
    stateComponent
  ],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })

export class AdministrationRoutingModule {

}
