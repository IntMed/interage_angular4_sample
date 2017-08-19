import { Component, OnInit } from '@angular/core';
import { InterageService } from './../interage.service';

@Component({
  selector: 'app-interacoes',
  templateUrl: './interacoes.component.html',
  styles: []
})
export class InteracoesComponent implements OnInit {

  constructor(private interageService: InterageService) { }

  ngOnInit() {
    this.interageService.getInteracoes({'principios_ativos': [17,443]}).subscribe();
  }

}
