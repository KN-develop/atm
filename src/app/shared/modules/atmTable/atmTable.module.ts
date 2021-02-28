import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {RouterModule} from '@angular/router';

import {AtmTableComponent} from 'src/app/shared/modules/atmTable/components/atmTable/atmTable.component';
import {GetAtmTableEffect} from 'src/app/shared/modules/atmTable/store/effects/getAtmTable.effect';
import {reducers} from 'src/app/shared/modules/atmTable/store/reducers';
import {ErrorMessageModule} from 'src/app/shared/modules/errorMessage/errorMessage.module';
import {LoadingModule} from 'src/app/shared/modules/loading/loading.module';
import {GetAtmStatusListEffect} from 'src/app/shared/modules/atmTable/store/effects/getAtmStatusList.effect';
import {SupportService as SharedSupportService} from 'src/app/shared/services/support.service';
import {AtmService as SharedAtmService} from 'src/app/shared/services/atm.service';
import {ReactiveFormsModule} from '@angular/forms';
import {CreateAtmEffect} from 'src/app/shared/modules/atmTable/store/effects/createAtm.effect';
import {DeleteAtmEffect} from 'src/app/shared/modules/atm/store/effects/deleteAtm.effect';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      GetAtmTableEffect,
      GetAtmStatusListEffect,
      CreateAtmEffect,
      DeleteAtmEffect,
    ]),
    StoreModule.forFeature('atmTable', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    ReactiveFormsModule,
  ],
  declarations: [AtmTableComponent],
  exports: [AtmTableComponent],
  providers: [SharedAtmService, SharedSupportService],
})
export class AtmTableModule {}
