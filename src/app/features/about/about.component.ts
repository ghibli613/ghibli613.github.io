import { Component, inject } from '@angular/core';

import { APP_CONFIG } from '../../core/config/app-config.token';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private readonly config = inject(APP_CONFIG);

  readonly email = this.config.contact.email;
  readonly phone = this.config.contact.phone;
  readonly socialLinks = this.config.socialLinks;
}
