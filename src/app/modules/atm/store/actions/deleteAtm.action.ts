import {createAction, props} from '@ngrx/store';
import {ActionTypes} from 'src/app/modules/atm/store/actionTypes';

export const deleteAtmAction = createAction(
  ActionTypes.DELETE_ATM,
  props<{ id: string }>()
);


export const deleteAtmSuccessAction = createAction(
  ActionTypes.DELETE_ATM_SUCCESS
);


export const deleteAtmFailureAction = createAction(
  ActionTypes.DELETE_ATM_FAILURE
);
