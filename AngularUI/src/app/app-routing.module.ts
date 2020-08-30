import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationRoutingModule } from './Administration/administration-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, AdministrationRoutingModule]
})
export class AppRoutingModule { }
