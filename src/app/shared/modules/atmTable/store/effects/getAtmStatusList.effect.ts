import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';

import {
  getAtmStatusAction,
  getAtmStatusFailureAction,
  getAtmStatusSuccessAction,
} from 'src/app/shared/modules/atmTable/store/actions/getAtmStatus.action';
import {GetAtmStatusListResponseInterface} from 'src/app/shared/modules/atmTable/types/getAtmStatusListResponse.interface';
import {SupportService as SharedSupportService} from 'src/app/shared/services/support.service';

@Injectable()
export class GetAtmStatusListEffect {
  getAtmStatusList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAtmStatusAction),
      switchMap(({idList}) => {
        return this.sharedSupportService.getAtmStatusList(idList).pipe(
          map((atmStatusListResponse: GetAtmStatusListResponseInterface) => {
            return getAtmStatusSuccessAction({
              statusTable: atmStatusListResponse.statusTable,
            });
          }),
          catchError((e) => {
            return of(getAtmStatusFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private sharedSupportService: SharedSupportService
  ) {}
}
