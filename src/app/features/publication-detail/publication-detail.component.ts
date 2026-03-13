import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { findPublicationBySlug } from '../publications/data/publications-content';
import { ArticleHeaderComponent } from '../../shared/article-header/article-header.component';
import { MissingItemComponent } from '../../shared/missing-item/missing-item.component';

@Component({
    selector: 'app-publication-detail',
    imports: [RouterLink, ArticleHeaderComponent, MissingItemComponent],
    templateUrl: './publication-detail.component.html',
    styleUrl: './publication-detail.component.scss'
})
export class PublicationDetailComponent {
  private readonly route = inject(ActivatedRoute);

  readonly publication = findPublicationBySlug(this.route.snapshot.paramMap.get('slug') ?? '');
}
