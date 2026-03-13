import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { APP_CONFIG } from './core/config/app-config.token';
import { AppRouteEffectsService } from './core/services/app-route-effects.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly config = inject(APP_CONFIG);
  private readonly routeEffects = inject(AppRouteEffectsService);

  readonly navItems = [
    { label: 'Home', route: '/' },
    { label: 'Projects', route: '/projects' },
    { label: 'Scientific Publishing', route: '/publications' },
    { label: 'Experience', route: '/experience' },
    { label: 'About', route: '/about' }
  ];

  readonly issueLabel = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date());

  readonly year = new Date().getFullYear();
  readonly appName = this.config.appName;
  readonly appDescription = this.config.appDescription;
  readonly socialLinks = this.config.socialLinks;
  readonly emailLink = `mailto:${this.config.contact.email}`;

  constructor() {
    this.routeEffects.initialize();
  }
}
