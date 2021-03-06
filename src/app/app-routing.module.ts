import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipiosAtivosComponent } from './principios-ativos/principios-ativos.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { ApresentacaoMedicamentosComponent } from './apresentacao-medicamentos/apresentacao-medicamentos.component';
import { InteracoesComponent } from './interacoes/interacoes.component';

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
  },
  {
    path: 'apresentacao-medicamentos',
    component: ApresentacaoMedicamentosComponent
  },
  {
    path: 'interacoes',
    component: InteracoesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
