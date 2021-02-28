import {createFeatureSelector, createSelector} from '@ngrx/store';

import {AppStateInterface} from 'src/app/shared/types/appState.interface';
import {AtmStateInterface} from 'src/app/modules/atm/types/atmState.interface';

export const atmFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AtmStateInterface
>('atm');

export const isLoadingSelector = createSelector(
  atmFeatureSelector,
  (atmState: AtmStateInterface) => atmState.isLoading
);

export const errorSelector = createSelector(
  atmFeatureSelector,
  (atmState: AtmStateInterface) => atmState.error
);

export const atmSelector = createSelector(
  atmFeatureSelector,
  (atmState: AtmStateInterface) => atmState.data
);
