import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../utility/Config';

import { IConfig } from '../utility/IConfig';


@Injectable({
  providedIn: 'root',
})
export class AirlineService {
  constructor(
    private _httpClient: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IConfig
  ) {}
  
  getPage(page: number): Observable<any> {
    return this._httpClient
    .get(this.appConfig.apiEndPoint + '?page=${page}&size=10');
  }
}
