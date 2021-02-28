import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {RouterModule} from '@angular/router';

import {ErrorMessageModule} from 'src/app/shared/modules/errorMessage/errorMessage.module';
import {LoadingModule} from 'src/app/shared/modules/loading/loading.module';
import {AtmComponent} from 'src/app/modules/atm/components/atm.component';
import {GetAtmEffect} from 'src/app/modules/atm/store/effects/getAtm.effect';
import {reducers} from 'src/app/modules/atm/store/reducers';
import {AtmService as SharedAtmService} from 'src/app/shared/services/atm.service';

const routes = [
  {
    path: 'atm/:id',
    component: AtmComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetAtmEffect]),
    StoreModule.forFeature('atm', reducers),
    RouterModule.forChild(routes),
    ErrorMessageModule,
    LoadingModule,
  ],
  declarations: [AtmComponent],
  providers: [SharedAtmService],
})
export class AtmModule {}
