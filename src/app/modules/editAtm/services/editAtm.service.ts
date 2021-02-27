import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AtmInputInterface} from 'src/app/shared/types/atmInput.interface';
import {Observable} from 'rxjs';
import {AtmInterface} from 'src/app/shared/types/atm.interface';
import {environment} from 'src/environments/environment';
import {map} from 'rxjs/operators';
import {SaveAtmResponseInterface} from 'src/app/shared/types/saveAtmResponse.interface';

@Injectable()
export class EditAtmService {
  constructor(private http: HttpClient) {
  }

  updateAtm(id: string, atmInput: AtmInputInterface): Observable<AtmInterface> {
    const fullUrl = environment.apiUrl + '/atm/' + id;

    return this.http
      .put<SaveAtmResponseInterface>(fullUrl, atmInput)
      .pipe(map((response: SaveAtmResponseInterface) => response.atm));
  }
}
