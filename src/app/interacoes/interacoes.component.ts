import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeaheadMatch } from 'ngx-bootstrap';

import { InterageService } from './../interage.service';

@Component({
  selector: 'app-interacoes',
  templateUrl: './interacoes.component.html',
  styles: []
})
export class InteracoesComponent implements OnInit {
  principiosAtivos = [];
  interacoes = [];
  /*
  Variaveís para o typeAhead utilizando a biblioteca ngx-boostrap.
  Fonte: http://valor-software.com/ngx-bootstrap/#/typeahead
  */
  public asyncSelected: string;
  public dataSource: Observable<any>;

  constructor(private interageService: InterageService) { }

  ngOnInit() {
    // this.interageService.getInteracoes({'principios_ativos': [17,443]}).subscribe();
    this.dataSource = Observable
    .create((observer: any) => {
      // Runs on every search
      observer.next(this.asyncSelected);
    })
    .mergeMap((token: string) => this.interageService.getPrincipiosAtivos({"search": token})).map(data => data.results);
  }

  principioAtivoSelected(e: TypeaheadMatch){
    this.principiosAtivos.push(e.item);
    this.asyncSelected = null;
  }

  getInteracoes(){
    const principiosAtivosId = this.principiosAtivos.map(e => e.id)
    this.interageService.getInteracoes({"principios_ativos": principiosAtivosId}).subscribe( data => {
      this.interacoes = data.results;
    })
  }

  clearInteracoes(){
    this.interacoes = [];
    this.principiosAtivos = [];
  }


}
