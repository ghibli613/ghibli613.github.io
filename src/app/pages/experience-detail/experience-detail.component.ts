import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { findExperienceBySlug } from '../../data/site-content';

@Component({
    selector: 'app-experience-detail',
    imports: [RouterLink],
    templateUrl: './experience-detail.component.html',
    styleUrl: './experience-detail.component.scss'
})
export class ExperienceDetailComponent {
  private readonly route = inject(ActivatedRoute);

  readonly experience = findExperienceBySlug(this.route.snapshot.paramMap.get('slug') ?? '');
}
