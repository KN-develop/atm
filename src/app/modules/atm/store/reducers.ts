import {Action, createReducer, on} from '@ngrx/store';
import {routerNavigationAction} from '@ngrx/router-store';

import {AtmStateInterface} from 'src/app/modules/atm/types/atmState.interface';
import { getAtmAction, getAtmFailureAction, getAtmSuccessAction } from 'src/app/shared/modules/atm/store/actions/getAtm.action';

const initialState: AtmStateInterface = {
  isLoading: false,
  error: null,
  data: null
};

const atmReducer = createReducer(
  initialState,
  on(getAtmAction, (state): AtmStateInterface => ({
    ...state,
    isLoading: true
  })),
  on(getAtmSuccessAction, (state, action): AtmStateInterface => ({
    ...state,
    isLoading: false,
    data: action.atm
  })),
  on(getAtmFailureAction, (state): AtmStateInterface => ({
    ...state,
    isLoading: false
  })),
  on(routerNavigationAction, (): AtmStateInterface => initialState)
);

export function reducers(state: AtmStateInterface, action: Action) {
  return atmReducer(state, action);
}
