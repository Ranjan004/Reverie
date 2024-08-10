import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { PrimeNGConfig } from 'primeng/api';
import { Router,RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule,ButtonModule,RippleModule,TableModule,RouterModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
  ){}

  isActive = false;
  toggleMenu(): void {
    this.isActive = !this.isActive;
  }

  transactions = [
    {
        "date": "2015-09-13",
        "narration": "FD Booked 12345678: RAHUL VERMA",
        "cheque": "1234567800456789",
        "amount": "+50,000.00",
        "closing_balance": "1,23,000.00"
    },
    {
        "date": "2015-09-13",
        "narration": "FD Booked 12345678: RAHUL VERMA",
        "cheque": "1234567800456789",
        "amount": "+50,000.00",
        "closing_balance": "1,23,000.00"
    }, {
        "date": "2015-09-13",
        "narration": "FD Booked 12345678: RAHUL VERMA",
        "cheque": "1234567800456789",
        "amount": "+50,000.00",
        "closing_balance": "1,23,000.00"
    }, {
        "date": "2015-09-13",
        "narration": "FD Booked 12345678: RAHUL VERMA",
        "cheque": "1234567800456789",
        "amount": "+50,000.00",
        "closing_balance": "1,23,000.00"
    }, {
        "date": "2015-09-13",
        "narration": "FD Booked 12345678: RAHUL VERMA",
        "cheque": "1234567800456789",
        "amount": "+50,000.00",
        "closing_balance": "1,23,000.00"
    }, {
        "date": "2015-09-13",
        "narration": "FD Booked 12345678: RAHUL VERMA",
        "cheque": "1234567800456789",
        "amount": "+50,000.00",
        "closing_balance": "1,23,000.00"
    }, {
        "date": "2015-09-13",
        "narration": "FD Booked 12345678: RAHUL VERMA",
        "cheque": "1234567800456789",
        "amount": "+50,000.00",
        "closing_balance": "1,23,000.00"
    }, {
        "date": "2015-09-13",
        "narration": "FD Booked 12345678: RAHUL VERMA",
        "cheque": "1234567800456789",
        "amount": "+50,000.00",
        "closing_balance": "1,23,000.00"
    }, {
        "date": "2015-09-13",
        "narration": "FD Booked 12345678: RAHUL VERMA",
        "cheque": "1234567800456789",
        "amount": "+50,000.00",
        "closing_balance": "1,23,000.00"
    }, {
        "date": "2015-09-13",
        "narration": "FD Booked 12345678: RAHUL VERMA",
        "cheque": "1234567800456789",
        "amount": "+50,000.00",
        "closing_balance": "1,23,000.00"
    }, {
        "date": "2015-09-13",
        "narration": "FD Booked 12345678: RAHUL VERMA",
        "cheque": "1234567800456789",
        "amount": "+50,000.00",
        "closing_balance": "1,23,000.00"
    }, {
        "date": "2015-09-13",
        "narration": "FD Booked 12345678: RAHUL VERMA",
        "cheque": "1234567800456789",
        "amount": "+50,000.00",
        "closing_balance": "1,23,000.00"
    },
    {
        "date": "2015-09-13",
        "narration": "FD Booked 12345678: RAHUL VERMA",
        "cheque": "1234567800456789",
        "amount": "+50,000.00",
        "closing_balance": "1,23,000.00"
    },
    {
        "date": "2015-09-13",
        "narration": "FD Booked 12345678: RAHUL VERMA",
        "cheque": "1234567800456789",
        "amount": "+50,000.00",
        "closing_balance": "1,23,000.00"
    },
    {
        "date": "2015-09-13",
        "narration": "FD Booked 12345678: RAHUL VERMA",
        "cheque": "1234567800456789",
        "amount": "+50,000.00",
        "closing_balance": "1,23,000.00"
    },
    {
        "date": "2015-09-13",
        "narration": "FD Booked 12345678: RAHUL VERMA",
        "cheque": "1234567800456789",
        "amount": "+50,000.00",
        "closing_balance": "1,23,000.00"
    },
    {
        "date": "2015-09-13",
        "narration": "FD Booked 12345678: RAHUL VERMA",
        "cheque": "1234567800456789",
        "amount": "+50,000.00",
        "closing_balance": "1,23,000.00"
    },
    {
        "date": "2015-09-13",
        "narration": "FD Booked 12345678: RAHUL VERMA",
        "cheque": "1234567800456789",
        "amount": "+50,000.00",
        "closing_balance": "1,23,000.00"
    },
    {
        "date": "2015-09-13",
        "narration": "FD Booked 12345678: RAHUL VERMA",
        "cheque": "1234567800456789",
        "amount": "+50,000.00",
        "closing_balance": "1,23,000.00"
    }
];

}
