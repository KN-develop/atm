import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AtmFormComponent} from 'src/app/shared/modules/atmForm/components/atmForm/atmForm.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BackendErrorMessagesModule} from 'src/app/shared/modules/backendErrorMessages/backendErrorMessages.module';
import {ErrorMessageModule} from 'src/app/shared/modules/errorMessage/errorMessage.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, BackendErrorMessagesModule, ErrorMessageModule],
  declarations: [AtmFormComponent],
  exports: [AtmFormComponent]
})
export class AtmFormModule {}
