import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PrimeNGConfig } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DialogModule, ButtonModule, RippleModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor( private primengConfig: PrimeNGConfig) {}

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }


}
