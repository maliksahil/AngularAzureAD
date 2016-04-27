import {Injectable) from 'angular2/core';
import {Http, Headers) from 'angular2/http';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import { AzureADAuthHelper } from "./AzureADAuthHelper.service";

import {Response} from 'angular2/http';
import {Observable, Subscriber} from 'rxjs';

@Injectable()
export class AuthenticatedHttpService {
  constructor(private http: Http, private _router: Router, private _azureADAuthHelper:AzureADAuthHelper) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + this._azureADAuthHelper.access_token);
  }

  get(url) {
    var promise = new Promise((resolve, reject) => {
      let headers = new Headers();
      this.createAuthorizationHeader(headers);
      var observable = this.http.get(url, { headers: headers });
      observable.subscribe(
        res => {
          resolve(res.json());
        },
        err => {
          if (err.status == 401) {
            this._router.navigate(['/Login']);
          } else reject(err);          
        });
    });
    return promise;
    // return this.http.get(url, { headers: headers });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}