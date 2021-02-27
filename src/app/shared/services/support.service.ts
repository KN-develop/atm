import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {environment} from 'src/environments/environment';
import {GetAtmStatusListResponseInterface} from 'src/app/shared/modules/atmTable/types/getAtmStatusListResponse.interface';

@Injectable()
export class SupportService {
  constructor(private http: HttpClient) {
  }

  getAtmStatusList(idList: string[]): Observable<GetAtmStatusListResponseInterface> {
    const url = environment.apiUrl + '/atmService';
    return this.http.get<GetAtmStatusListResponseInterface>(url);
  }
}
