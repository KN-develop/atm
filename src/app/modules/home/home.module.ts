import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AtmTableModule} from 'src/app/shared/modules/atmTable/atmTable.module';
import {HomeComponent} from 'src/app/modules/home/components/home.component';
import {UtilsService} from '../../shared/services/utils.service';

const routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), AtmTableModule],
  providers: [UtilsService],
  declarations: [HomeComponent],
})
export class HomeModule {}
