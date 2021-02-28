import {createAction, props} from '@ngrx/store';

import {ActionTypes} from 'src/app/shared/modules/atm/store/actionTypes';
import {AtmInterface} from 'src/app/shared/types/atm.interface';

export const getAtmAction = createAction(
  ActionTypes.GET_ATM,
  props<{id: string}>()
);

export const getAtmSuccessAction = createAction(
  ActionTypes.GET_ATM_SUCCESS,
  props<{atm: AtmInterface}>()
);

export const getAtmFailureAction = createAction(
  ActionTypes.GET_ATM_FAILURE
);
