import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { InterageService } from './../interage.service';

@Component({
  selector: 'app-apresentacao-medicamentos',
  templateUrl: './apresentacao-medicamentos.component.html',
  styles: []
})
export class ApresentacaoMedicamentosComponent implements OnInit {
  apresentacaoMedicamentos: any[];
  nextUrl: string;
  previousUrl: string;

  /*
  Variaveís para o typeAhead utilizando a biblioteca ngx-boostrap.
  Fonte: http://valor-software.com/ngx-bootstrap/#/typeahead
  */
  public asyncSelected: string;
  public dataSource: Observable<any>;


  constructor(private interageService: InterageService) { }

  ngOnInit() {
    this.interageService.getApresentacaoMedicamentos( {"ordering": "id", "page_size": 10} ).subscribe( data => {
      this.setState(data);
    });

    this.dataSource = Observable
    .create((observer: any) => {
      // Runs on every search
      observer.next(this.asyncSelected);
    })
    .mergeMap((token: string) => this.interageService.getApresentacaoMedicamentos({"search": token})).map(data => data.results);
  }

  private setState(data: any){
    this.apresentacaoMedicamentos = data.results;
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
