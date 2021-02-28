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
import {
  deleteAtmAction, deleteAtmFailureAction,
  deleteAtmSuccessAction,
} from 'src/app/shared/modules/atm/store/actions/deleteAtm.action';
import {
  createAtmAction,
  createAtmFailureAction,
  createAtmSuccessAction
} from 'src/app/shared/modules/atmTable/store/actions/createAtm.action';

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

      if (state.data && action.statusTable) {
        const newData = [...state.data];

        action.statusTable.forEach((statusElement) => {
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

  on(
    deleteAtmAction,
    (state): AtmTableStateInterface => ({
      ...state,
    })
  ),
  on(
    deleteAtmSuccessAction,
    (state, action): AtmTableStateInterface => ({
      ...state,
      data: state.data ? state.data.filter(el => el.id !== action.id) : null,
    })
  ),
  on(
    deleteAtmFailureAction,
    (state): AtmTableStateInterface => ({
      ...state,
    })
  ),

  on(
    createAtmAction,
    (state): AtmTableStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    createAtmSuccessAction,
    (state, action): AtmTableStateInterface => ({
      ...state,
      data: state.data ? [...state.data.slice(), action.atm] : [action.atm],
      isLoading: false,
    })
  ),
  on(
    createAtmFailureAction,
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
