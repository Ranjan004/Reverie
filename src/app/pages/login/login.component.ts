import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PrimeNGConfig } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../../shared-data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HeaderComponent,
    FormsModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  submitted = false;

  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private sharedDataService: SharedDataService // Inject the service
  ) {
    this.loginform = new FormGroup({
      Username: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginform.valid) {
      const phone = this.loginform.get('phone')?.value; // Use get to ensure proper value extraction
      console.log('Phone number extracted:', phone);

      // Store phone number in the service
      this.sharedDataService.setPhoneNumber(phone);

      // Navigate to OTP component
      this.router.navigate(['/otp']);
    } else {
      console.log('Form is invalid');
    }
  }
}
