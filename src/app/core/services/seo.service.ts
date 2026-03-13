import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { APP_CONFIG } from '../config/app-config.token';

export interface SeoPage {
  title: string;
  description: string;
  canonicalPath: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly config = inject(APP_CONFIG);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  updatePageTags(page: SeoPage): void {
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: page.title });
    this.meta.updateTag({ name: 'twitter:description', content: page.description });
    this.updateCanonicalLink(page.canonicalPath);
  }

  private updateCanonicalLink(path: string): void {
    const href = this.toAbsoluteUrl(path);
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  private toAbsoluteUrl(path: string): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const baseUrl = this.config.baseUrl.replace(/\/$/, '');
    return `${baseUrl}${cleanPath}`;
  }
}
