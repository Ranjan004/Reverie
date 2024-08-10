import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// for calender
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputOtpModule } from 'primeng/inputotp';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RippleModule } from 'primeng/ripple';
import { PrimeNGConfig } from "primeng/api";

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CheckboxModule,CalendarModule,DropdownModule,InputSwitchModule,InputTextModule,FloatLabelModule,ReactiveFormsModule,InputOtpModule,ListboxModule,MultiSelectModule,PasswordModule,RadioButtonModule,SelectButtonModule,ButtonModule,RippleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Reverie_dashboard';
  pizza: string[] = [];
  date1: Date | undefined;
  date2: Date | undefined;
  date3: Date | undefined;
  checked: boolean = false;
  value: string | undefined;
  cities: City[] | undefined;
  selectedCity: City | undefined;
  otp : any;
  multi!: City[];
  selectedCities!: City[];
  ingredient!: string;
  stateOptions: any[] = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];

  state: string = 'off';

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
        this.primengConfig.ripple = true;
    }
    constructor(private primengConfig: PrimeNGConfig) {
      this.multi = [
          {name: 'New York', code: 'NY'},
          {name: 'Rome', code: 'RM'},
          {name: 'London', code: 'LDN'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Paris', code: 'PRS'}
      ];
}
}
