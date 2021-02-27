import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable()
export class AtmService {
  constructor(private http: HttpClient) {
  }

  deleteAtm(id: string): Observable<{}> {
    const url = `${environment.apiUrl}/atm/${id}`;

    return this.http.delete<{}>(url);
  }
}
