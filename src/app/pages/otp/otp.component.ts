import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PrimeNGConfig } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { InputOtpModule } from 'primeng/inputotp';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SharedDataService } from '../../shared-data.service';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormsModule, InputTextModule, RippleModule, ButtonModule, InputOtpModule, ToastModule],
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
  providers: [MessageService]
})
export class OtpComponent implements OnInit, OnDestroy {
  otpData: string = '';
  phoneNumber: string = '';
  resendLabel: string = 'Resend (1:20)';
  private timer: any;
  private countdown: number = 80; // 80 seconds countdown
  isOtpComplete: boolean = false;

  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private sharedDataService: SharedDataService, // Inject the service
    private router: Router // Inject Router for navigation
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;

    // Get Phone number from the shared service
    this.phoneNumber = this.sharedDataService.getPhoneNumber();
    this.phoneNumber = this.maskPhoneNumber(this.phoneNumber);

    setTimeout(() => {
      this.showToastMessage();
    }, 0);

    // Start the countdown timer
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  showToastMessage() {
    this.messageService.add({
      detail: 'A Personalised OTP in your selected language has been sent on your given Phone number.'
    });
  }

  resendOtp() {
    // Reset countdown
    this.countdown = 80;
    this.startTimer();
  }

  private startTimer() {
    this.timer = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
        const minutes = Math.floor(this.countdown / 60);
        const seconds = this.countdown % 60;
        this.resendLabel = `Resend (${minutes}:${seconds < 10 ? '0' : ''}${seconds})`;
      } else {
        this.resendLabel = 'Resend';
        clearInterval(this.timer);
      }
    }, 1000);
  }

  private maskPhoneNumber(phone: string): string {
    return phone.replace(/.(?=.{4})/g, '*'); // Example masking function
  }

  checkOtpComplete() {
    this.isOtpComplete = this.otpData.length === 4; // Adjust based on your OTP length
  }

  submitOtp() {
    if (this.isOtpComplete) {
      // Add any OTP validation logic here
      // For example, checking if the OTP is correct
      const isValidOtp = this.validateOtp(this.otpData); // Replace with real validation
      if (isValidOtp) {
        this.router.navigate(['/dashboard']); // Navigate to dashboard page
      } else {
        this.messageService.add({
          severity: 'error',
          detail: 'Invalid OTP. Please try again.'
        });
      }
    } else {
      this.messageService.add({
        severity: 'warn',
        detail: 'Please enter a complete OTP.'
      });
    }
  }

  private validateOtp(otp: string): boolean {
    // Replace this with actual OTP validation logic
    return otp === '1234';
  }
}
