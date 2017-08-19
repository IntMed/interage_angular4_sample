import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipiosAtivosComponent } from './principios-ativos/principios-ativos.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'principios-ativos',
    component: PrincipiosAtivosComponent
  },
  {
    path: 'medicamentos',
    component: MedicamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
