import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {environment} from 'src/environments/environment';
import {GetAtmResponseInterface} from 'src/app/shared/modules/atm/types/getAtmResponse.interface';
import {AtmInterface} from 'src/app/shared/types/atm.interface';
import {GetAtmTableResponseInterface} from 'src/app/shared/modules/atmTable/types/getAtmTableResponseInterface';
import {AtmInputInterface} from 'src/app/shared/types/atmInput.interface';
import {DeleteAtmResponseInterface} from 'src/app/shared/modules/atm/types/deleteAtmResponse.interface';

@Injectable()
export class AtmService {
  constructor(private http: HttpClient) {}

  getAtm(id: string): Observable<AtmInterface> {
    const fullUrl = environment.apiUrl + '/atm/' + id;

    return this.http
      .get<GetAtmResponseInterface>(fullUrl)
      .pipe(map((response: GetAtmResponseInterface) => response.atm));
  }

  getAtmTable(): Observable<GetAtmTableResponseInterface> {
    const url = environment.apiUrl + '/atm/all';
    return this.http.get<GetAtmTableResponseInterface>(url);
  }

  createAtm(atmInput: AtmInputInterface): Observable<AtmInterface> {
    const url = environment.apiUrl + '/atm';

    return this.http.post<AtmInterface>(url, atmInput);
  }

  deleteAtm(id: string): Observable<boolean> {
    const headers = new HttpHeaders();
    headers.set('Access-Control-Request-Method', 'DELETE');
    headers.set('Access-Control-Request-Headers', 'Content-Type');
    const url = environment.apiUrl + '/atm/' + id;

    return this.http
      .delete<DeleteAtmResponseInterface>(url, {headers})
      .pipe(map((response: DeleteAtmResponseInterface) => response.result));
  }
}
