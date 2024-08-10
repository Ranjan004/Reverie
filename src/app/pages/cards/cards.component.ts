import { Component, OnInit } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';
import { Router, RouterModule } from '@angular/router'; // Import RouterModule
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { StepperModule } from 'primeng/stepper';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedDataService } from '../../shared-data.service';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

interface Bank {
  name: string;
  code: string;
}

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    ButtonModule,
    RippleModule,
    CommonModule,
    TabViewModule,
    StepperModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    DropdownModule,
    RouterModule // Import RouterModule
  ],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  isActive = false;
  loginForm!: FormGroup;
  submitted = false;
  date: Date | undefined;
  banks: Bank[] | undefined;
  selectedBank: Bank | undefined;

  cardFrom = false;

  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private sharedDataService: SharedDataService // Inject the service
  ) {}

  ngOnInit(): void {
    this.banks = [
      { name: 'Allahabad Bank', code: 'ALB' },
      { name: 'Andhra Bank', code: 'ANB' },
      { name: 'Axis Bank', code: 'AXB' },
      { name: 'Bank of Bahrain and Kuwait', code: 'BBK' },
      { name: 'Bank of Baroda - Corporate Banking', code: 'BOB-CB' },
      { name: 'Bank of Baroda - Retail Banking', code: 'BOB-RB' },
      { name: 'Bank of India', code: 'BOI' },
      { name: 'Bank of Maharashtra', code: 'BOM' },
      { name: 'Canara Bank', code: 'CAN' },
      { name: 'Central Bank of India', code: 'CBI' },
      { name: 'City Union Bank', code: 'CUB' },
      { name: 'Corporation Bank', code: 'COR' },
      { name: 'Deutsche Bank', code: 'DEU' },
      { name: 'Development Credit Bank', code: 'DCB' },
      { name: 'Dhanlaxmi Bank', code: 'DLB' },
      { name: 'Federal Bank', code: 'FED' },
      { name: 'ICICI Bank', code: 'ICI' },
      { name: 'IDBI Bank', code: 'IDB' },
      { name: 'Indian Bank', code: 'IBK' },
      { name: 'Indian Overseas Bank', code: 'IOB' },
      { name: 'IndusInd Bank', code: 'INB' },
      { name: 'ING Vysya Bank', code: 'ING' },
      { name: 'Jammu and Kashmir Bank', code: 'JKB' },
      { name: 'Karnataka Bank Ltd', code: 'KBL' },
      { name: 'Karur Vysya Bank', code: 'KVB' },
      { name: 'Kotak Bank', code: 'KOT' },
      { name: 'Laxmi Vilas Bank', code: 'LVB' },
      { name: 'Oriental Bank of Commerce', code: 'OBC' },
      { name: 'Punjab National Bank - Corporate Banking', code: 'PNB-CB' },
      { name: 'Punjab National Bank - Retail Banking', code: 'PNB-RB' },
      { name: 'Punjab & Sind Bank', code: 'PSB' },
      { name: 'Shamrao Vitthal Co-operative Bank', code: 'SVC' },
      { name: 'South Indian Bank', code: 'SIB' },
      { name: 'State Bank of Bikaner & Jaipur', code: 'SBBJ' },
      { name: 'State Bank of Hyderabad', code: 'SBH' },
      { name: 'State Bank of India', code: 'SBI' },
      { name: 'State Bank of Mysore', code: 'SBM' },
      { name: 'State Bank of Patiala', code: 'SBP' },
      { name: 'State Bank of Travancore', code: 'SBT' },
      { name: 'Syndicate Bank', code: 'SYN' },
      { name: 'Tamilnad Mercantile Bank Ltd.', code: 'TMB' },
      { name: 'UCO Bank', code: 'UCO' },
      { name: 'Union Bank of India', code: 'UBI' },
      { name: 'United Bank of India', code: 'UBI' },
      { name: 'Vijaya Bank', code: 'VIJ' },
      { name: 'Yes Bank Ltd', code: 'YES' }
    ];

    this.primengConfig.ripple = true;

    // Initialize the form
    this.loginForm = new FormGroup({
      aadhaar: new FormControl('', Validators.required),
      pancard: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  toggleMenu(): void {
    this.isActive = !this.isActive;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      const phone = this.loginForm.get('phone')?.value;
      console.log('Phone number extracted:', phone);
    } else {
      console.log('Form is invalid');
    }
  }
}
