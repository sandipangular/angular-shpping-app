import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'Vender',
      children: []
    }
  ];

@NgModule({
    declarations: [],
      imports: [
        RouterModule.forChild(routes)
      ],
      exports: [RouterModule]
    })

export class VenderRoutingModule {

}
