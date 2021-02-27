import {createFeatureSelector, createSelector} from '@ngrx/store';

import {AppStateInterface} from 'src/app/shared/types/appState.interface';
import {AtmTableStateInterface} from 'src/app/shared/modules/atmTable/types/atmTableState.interface';

export const atmTableFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AtmTableStateInterface
  >('atmTable');

export const isLoadingSelector = createSelector(
  atmTableFeatureSelector,
  (atmTableState: AtmTableStateInterface) => atmTableState.isLoading
);

export const errorSelector = createSelector(
  atmTableFeatureSelector,
  (atmTableState: AtmTableStateInterface) => atmTableState.error
);

export const atmTableSelector = createSelector(
  atmTableFeatureSelector,
  (atmTableState: AtmTableStateInterface) => atmTableState.data
);
