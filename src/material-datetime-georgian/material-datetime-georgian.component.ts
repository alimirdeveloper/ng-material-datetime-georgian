import { Direction } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { Component, forwardRef, inject, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { noop } from 'rxjs';


export const DATETIME_GEORGIAN_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MindboardDatetimeGeorgianComponent),
  multi: true
};

export const MOMENT_DATETIME_FORMATS: MatDateFormats = {
  parse: {
    dateInput: "YYYY-MM-DD HH:mm",  // Parses date and time input
  },
  display: {
    dateInput: "YYYY-MM-DD HH:mm",  // Displays date and time in input field
    monthYearLabel: "MMM YYYY",      // Displays month and year in the dropdown
    dateA11yLabel: "LL",             // Accessible label for the full date (long format)
    monthYearA11yLabel: "MMMM YYYY"  // Accessible label for month-year (long format)
  }
};


@Component({
  selector: 'material-datetime-georgian',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MindboardDatetimeGeorgianComponent),
      multi: true,
    },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MOMENT_DATETIME_FORMATS },
  ],
  templateUrl: './material-datetime-georgian.component.html',
  styleUrl: './material-datetime-georgian.component.scss'
})
export class MindboardDatetimeGeorgianComponent implements OnInit, ControlValueAccessor {

  @Input() controller ?: FormControl;
  @Input() label:string ='date'
  @Input() disabled ?:boolean;

  @Input()
  placeholder?: string = 'set a place holder';

  @Input()
  minDate!: any;

  @Input()
  maxDate!: any;


  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): string {
    return this.innerValue;
  };

  timeHourModel = new FormControl('0', [Validators.required, Validators.max(23), Validators.min(0)])
  timeMinuteModel = new FormControl('0', [Validators.required, Validators.max(59), Validators.min(0)])


  //set accessor including call the onchange callback
  set value(v: string) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  //#endregion
  /**
 * internal value (for ngmodel)
 */
  private innerValue: string = '';


  constructor() {

  }
  ngOnInit(): void {
}

  ngAfterViewInit(): void {

  }
  //From ControlValueAccessor interface
  public registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  public registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  //From ControlValueAccessor interface
  public writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }
  public onApplyTime(): void {
    if (!this.timeHourModel)
      return;

    let selectedDate = this.controller?.value; // Get the selected date or default to today
    if (!selectedDate && !this.value)
      return;

    selectedDate = selectedDate || this.value;
    const timeArray = this.timeHourModel.value?.split(':') || [];
    const hour = timeArray[0] || 0;
    const minute = timeArray[1] || 0;

    const updatedDate = selectedDate.set('hour', +hour).set('minute', +minute).set('second', 0);


    if (this.controller) {
      this.controller.setValue(updatedDate); // Update the Reactive Form control
    } else {
      this.value = updatedDate.toISOString(); // Update the ngModel bound value
    }
  }

}
