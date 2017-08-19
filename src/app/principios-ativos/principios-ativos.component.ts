import { Component, OnInit } from '@angular/core';

import { InterageService } from './../interage.service';

@Component({
  selector: 'app-principios-ativos',
  templateUrl: './principios-ativos.component.html',
  styles: []
})
export class PrincipiosAtivosComponent implements OnInit {

  principiosAtivos: any[];
  nextUrl: string;
  previousUrl: string;

  constructor(private interageService: InterageService) { }

  ngOnInit() {
    this.interageService.getPrincipiosAtivos( {"ordering": "id"} ).subscribe( data => {
      this.setState(data);
    });
  }

  private setState(data: any){
    this.principiosAtivos = data.results;
    this.nextUrl = data.next;
    this.previousUrl = data.previous;
  }

  toNext(){
    this.interageService.getEndpoint(this.nextUrl).subscribe( data => {
      this.setState(data);
    });
  }

  toPrevious(){
    this.interageService.getEndpoint(this.previousUrl).subscribe( data => {
      this.setState(data);
    });
  }


}
