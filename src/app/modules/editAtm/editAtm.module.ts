import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {reducers} from 'src/app/modules/editAtm/store/reducers';
import {EditAtmService} from 'src/app/modules/editAtm/services/editAtm.service';
import {AtmService as SharedAtmService} from 'src/app/shared/services/atm.service';
import {GetAtmEffect} from 'src/app/modules/editAtm/store/effects/getAtm.effect';
import {UpdateAtmEffect} from 'src/app/modules/editAtm/store/effects/updateAtm.effect';
import {EditAtmComponent} from 'src/app/modules/editAtm/components/editAtm/editAtm.component';
import {LoadingModule} from 'src/app/shared/modules/loading/loading.module';
import {AtmFormModule} from 'src/app/shared/modules/atmForm/atmForm.module';

const routes = [
  {
    path: 'atm/:id/edit',
    component: EditAtmComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AtmFormModule,
    EffectsModule.forFeature([GetAtmEffect, UpdateAtmEffect]),
    StoreModule.forFeature('editAtm', reducers),
    LoadingModule
  ],
  declarations: [EditAtmComponent],
  providers: [EditAtmService, SharedAtmService]
})
export class EditAtmModule {
}
