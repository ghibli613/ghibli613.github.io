import { inject, Injectable } from '@angular/core';

import { APP_CONFIG } from '../config/app-config.token';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly config = inject(APP_CONFIG);

  trackPageView(path: string, title: string): void {
    if (!this.config.enableAnalytics) {
      return;
    }

    // Placeholder for a provider like GA4, Plausible, or PostHog.
    // Keep this centralized so feature code never depends on analytics vendor APIs.
    console.info('[analytics] page_view', { path, title });
  }
}
