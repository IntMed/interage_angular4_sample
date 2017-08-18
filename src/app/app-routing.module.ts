import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipiosAtivosComponent } from './principios-ativos/principios-ativos.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'principios-ativos',
    component: PrincipiosAtivosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
