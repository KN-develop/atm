import {createAction, props} from '@ngrx/store';

import {AtmInterface} from 'src/app/shared/types/atm.interface';
import {ActionTypes} from 'src/app/modules/editAtm/store/actionTypes';

export const getAtmAction = createAction(
  ActionTypes.GET_ATM,
  props<{ id: string }>()
);

export const getAtmSuccessAction = createAction(
  ActionTypes.GET_ATM_SUCCESS,
  props<{ atm: AtmInterface }>()
);

export const getAtmFailureAction = createAction(
  ActionTypes.GET_ATM_FAILURE
);
