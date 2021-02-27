import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {AtmInputInterface} from 'src/app/shared/types/atmInput.interface';
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'at-atm-form',
  templateUrl: './atmForm.component.html',
})
export class AtmFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps?: AtmInputInterface;
  @Input('isSubmitting') isSubmittingProps!: boolean;
  @Input('errors') errorsProps!: BackendErrorsInterface | null;

  @Output('atmSubmit') atmSubmitEvent = new EventEmitter<AtmInputInterface>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      name: this.initialValuesProps?.name,
      address: this.initialValuesProps?.address,
      vendor: this.initialValuesProps?.vendor,
      model: this.initialValuesProps?.model,
      //status: this.initialValuesProps?.status,
    });
  }

  onSubmit(): void {
    this.atmSubmitEvent.emit(this.form.value);
  }
}
