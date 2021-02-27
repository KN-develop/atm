import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {environment} from 'src/environments/environment';
import {GetAtmResponseInterface} from 'src/app/shared/types/getAtmResponseInterface';
import {AtmInterface} from 'src/app/shared/types/atm.interface';
import {GetAtmTableResponseInterface} from 'src/app/shared/modules/atmTable/types/getAtmTableResponseInterface';
import {AtmInputInterface} from 'src/app/shared/types/atmInput.interface';

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
    const url = environment.apiUrl + '/atmTable';
    return this.http.get<GetAtmTableResponseInterface>(url);
  }

  createAtm(atmInput: AtmInputInterface): Observable<AtmInterface> {
    const url = environment.apiUrl + '/atm';
    return this.http
      .post<GetAtmResponseInterface>(url, atmInput)
      .pipe(map((response: GetAtmResponseInterface) => response.atm));
  }

  deleteAtm(id: string): Observable<string> {
    const url = environment.apiUrl + '/atm/' + id;

    return this.http.delete<string>(url);
  }
}
