import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateAtmComponent} from 'src/app/modules/createAtm/components/createAtm/createAtm.component';
import {RouterModule} from '@angular/router';
import {AtmFormModule} from 'src/app/shared/modules/atmForm/atmForm.module';
import {CreateAtmService} from 'src/app/modules/createAtm/services/createAtm.service';
import {EffectsModule} from '@ngrx/effects';
import {CreateAtmEffect} from 'src/app/modules/createAtm/store/effects/createAtm.effect';
import {StoreModule} from '@ngrx/store';
import {reducers} from 'src/app/modules/createAtm/store/reducers';

const routes = [
  {
    path: 'create',
    component: CreateAtmComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AtmFormModule,
    EffectsModule.forFeature([CreateAtmEffect]),
    StoreModule.forFeature('createAtm', reducers)
  ],
  declarations: [CreateAtmComponent],
  providers: [CreateAtmService]
})
export class CreateAtmModule {
}
