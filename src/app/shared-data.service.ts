// shared-data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private phoneNumber: string = '';

  setPhoneNumber(phone: string): void {
    this.phoneNumber = phone;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }
}
