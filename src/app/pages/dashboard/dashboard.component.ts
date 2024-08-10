import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule 
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // Corrected to styleUrls
})
export class DashboardComponent {
  isActive = false;
  toggleMenu(): void {
    this.isActive = !this.isActive;
  }
}
