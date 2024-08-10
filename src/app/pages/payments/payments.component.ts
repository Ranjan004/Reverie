import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent {
  isActive = false;
  toggleMenu(): void {
    this.isActive = !this.isActive;
  }

}
