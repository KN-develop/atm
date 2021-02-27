import {createAction, props} from '@ngrx/store';

import {ActionTypes} from 'src/app/shared/modules/atmTable/store/actionTypes';
import {AtmInterface} from 'src/app/shared/types/atm.interface';

export const getAtmTableAction = createAction(
  ActionTypes.GET_ATM_TABLE
);


export const getAtmTableSuccessAction = createAction(
  ActionTypes.GET_ATM_TABLE_SUCCESS,
  props<{ atmTable: AtmInterface[] }>()
);


export const getAtmTableFailureAction = createAction(
  ActionTypes.GET_ATM_TABLE_FAILURE
);
