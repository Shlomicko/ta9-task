import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchBarComponent),
      multi: true,
    },
  ],
})
export class SearchBarComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() required: boolean = false;

  private innerValue: any = '';
  protected onChange: any = () => {};
  protected onTouched: any = () => {};

  protected disabled = false;
  protected valueControl = new FormControl<string>('', { nonNullable: true });

  protected onInputChange(event: Event): void {
    this.onChange((event.target as HTMLInputElement).value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    if (value !== this.innerValue) {
      this.valueControl.setValue(value);
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
