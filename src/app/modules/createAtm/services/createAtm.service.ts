import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AtmInputInterface} from 'src/app/shared/types/atmInput.interface';
import {Observable} from 'rxjs';
import {AtmInterface} from 'src/app/shared/types/atm.interface';
import {environment} from 'src/environments/environment';
import {map} from 'rxjs/operators';
import {SaveAtmResponseInterface} from 'src/app/shared/types/saveAtmResponse.interface';

@Injectable()
export class CreateAtmService {
  constructor(private http: HttpClient) {
  }

  creatAtm(atmInput: AtmInputInterface): Observable<AtmInterface> {
    const fullUrl = environment.apiUrl + '/atm';

    return this.http
      .post<SaveAtmResponseInterface>(fullUrl, atmInput)
      .pipe(map((response: SaveAtmResponseInterface) => response.atm));
  }
}
