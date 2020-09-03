import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { stateComponent } from './state/state.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'state',component:stateComponent}
];

@NgModule({
  declarations:[
    stateComponent
  ],
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })

export class AdministrationRoutingModule {

}
