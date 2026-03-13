import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { findProjectBySlug } from '../projects/data/projects-content';
import { ArticleHeaderComponent } from '../../shared/article-header/article-header.component';
import { MissingItemComponent } from '../../shared/missing-item/missing-item.component';
import { TagListComponent } from '../../shared/tag-list/tag-list.component';

@Component({
    selector: 'app-project-detail',
    imports: [RouterLink, ArticleHeaderComponent, MissingItemComponent, TagListComponent],
    templateUrl: './project-detail.component.html',
    styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
  private readonly route = inject(ActivatedRoute);

  readonly project = findProjectBySlug(this.route.snapshot.paramMap.get('slug') ?? '');
}
