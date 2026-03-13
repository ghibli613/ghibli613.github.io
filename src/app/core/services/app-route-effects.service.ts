import { inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { APP_CONFIG } from '../config/app-config.token';
import { AnalyticsService } from './analytics.service';
import { SeoService } from './seo.service';

@Injectable({ providedIn: 'root' })
export class AppRouteEffectsService {
  private readonly config = inject(APP_CONFIG);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  private readonly analytics = inject(AnalyticsService);

  initialize(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const currentRoute = this.getCurrentLeafRoute();
        const routeTitle = currentRoute.title;
        const title = typeof routeTitle === 'string' ? routeTitle : this.config.appName;
        const description =
          (currentRoute.data['description'] as string | undefined) ??
          this.config.appDescription;
        const url = event.urlAfterRedirects || event.url;

        this.seo.updatePageTags({
          title,
          description,
          canonicalPath: url
        });
        this.analytics.trackPageView(url, title);
      });
  }

  private getCurrentLeafRoute() {
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
