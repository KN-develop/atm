import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from 'src/environments/environment';
import {GetAtmStatusListResponseInterface} from 'src/app/shared/modules/atmTable/types/getAtmStatusListResponse.interface';

@Injectable()
export class SupportService {
  constructor(private http: HttpClient) {}

  getAtmStatusList(
    idList: string[]
  ): Observable<GetAtmStatusListResponseInterface> {
    const url = environment.apiAtmServiceUrl + '/status';
    const headers = new HttpHeaders();
    headers.set('Access-Control-Request-Method', 'POST');
    headers.set('Access-Control-Request-Headers', 'Content-Type');

    return this.http.post<GetAtmStatusListResponseInterface>(url, idList, {
      headers,
    });
  }
}
