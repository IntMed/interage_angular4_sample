import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';


@Injectable()
export class InterageService {
  interageApiUrl = environment.interageApiUrl;
  interageAuthToken = environment.interageAuthToken;
  headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Authorization', 'Token ' + this.interageAuthToken);
  }

  getPrincipiosAtivos(filter: any = {}) {
    const options = new RequestOptions({headers: this.headers, params: filter});
    return this.http.get(this.interageApiUrl + 'principios-ativos/', options).map( (res: Response) => res.json());
  }

}
