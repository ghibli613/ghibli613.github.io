import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { findProjectBySlug } from '../../data/site-content';

@Component({
    selector: 'app-project-detail',
    imports: [RouterLink],
    templateUrl: './project-detail.component.html',
    styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
  private readonly route = inject(ActivatedRoute);

  readonly project = findProjectBySlug(this.route.snapshot.paramMap.get('slug') ?? '');
}
