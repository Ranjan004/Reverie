import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { OtpComponent } from './pages/otp/otp.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { CardsComponent } from './pages/cards/cards.component';
import { PaymentsComponent } from './pages/payments/payments.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'otp', component: OtpComponent },
  {
    path: '',
    component: LayoutComponent, 
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' } 
    ]
  }
];
