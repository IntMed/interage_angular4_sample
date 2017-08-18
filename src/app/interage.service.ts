import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class InterageService {
  interageApiUrl = environment.interageApiUrl;
  interageAuthToken = environment.interageAuthToken;
  headers = new Headers();
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers.append('Authorization', 'Token ' + this.interageAuthToken);
    this.options = new RequestOptions({headers: this.headers});
  }

  getPrincipiosAtivos() {
    console.log(this.interageAuthToken);
    return this.http.get(this.interageApiUrl + 'principios-ativos/', this.options).map( (res: Response) => res.json());
  }

}
