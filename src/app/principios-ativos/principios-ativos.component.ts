import { Component, OnInit } from '@angular/core';

import { InterageService } from './../interage.service';

@Component({
  selector: 'app-principios-ativos',
  templateUrl: './principios-ativos.component.html',
  styles: []
})
export class PrincipiosAtivosComponent implements OnInit {

  constructor(private interageService: InterageService) { }

  ngOnInit() {
    this.interageService.getPrincipiosAtivos().subscribe( pa => console.log(pa));
  }

}
