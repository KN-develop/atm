import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoadingComponent} from 'src/app/shared/modules/loading/components/loading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent]
})
export class LoadingModule {}
