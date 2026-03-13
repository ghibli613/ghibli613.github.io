import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { findPublicationBySlug } from '../../data/site-content';

@Component({
    selector: 'app-publication-detail',
    imports: [RouterLink],
    templateUrl: './publication-detail.component.html',
    styleUrl: './publication-detail.component.scss'
})
export class PublicationDetailComponent {
  private readonly route = inject(ActivatedRoute);

  readonly publication = findPublicationBySlug(this.route.snapshot.paramMap.get('slug') ?? '');
}
