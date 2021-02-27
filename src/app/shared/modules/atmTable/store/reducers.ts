import {AtmTableStateInterface} from 'src/app/shared/modules/atmTable/types/atmTableState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {routerNavigationAction} from '@ngrx/router-store';

import {
  getAtmTableAction,
  getAtmTableFailureAction,
  getAtmTableSuccessAction,
} from 'src/app/shared/modules/atmTable/store/actions/getAtmTable.action';
import {
  getAtmStatusAction,
  getAtmStatusFailureAction,
  getAtmStatusSuccessAction,
} from 'src/app/shared/modules/atmTable/store/actions/getAtmStatus.action';

const initialState: AtmTableStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const atmTableReducer = createReducer(
  initialState,
  on(
    getAtmTableAction,
    (state): AtmTableStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getAtmTableSuccessAction,
    (state, action): AtmTableStateInterface => ({
      ...state,
      isLoading: true,
      data: action.atmTable,
    })
  ),
  on(
    getAtmTableFailureAction,
    (state): AtmTableStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),

  on(
    getAtmStatusAction,
    (state): AtmTableStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getAtmStatusSuccessAction,
    (state, action): AtmTableStateInterface => {
      const res = {
        ...state,
        isLoading: false,
      };

      if (state.data && action.atmService) {
        const newData = [...state.data];

        action.atmService.forEach((statusElement) => {
          const index = newData.findIndex((el) => el.id === statusElement.id);

          if (index !== -1) {
            newData[index] = Object.assign({}, newData[index], {
              status: statusElement.status,
            });

            res.data = newData;
          }
        });
      }

      return res;
    }
  ),

  on(
    getAtmStatusFailureAction,
    (state): AtmTableStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),

  on(routerNavigationAction, (): AtmTableStateInterface => initialState)
);

export function reducers(state: AtmTableStateInterface, action: Action) {
  return atmTableReducer(state, action);
}
