import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { findExperienceBySlug } from '../experience/data/experience-content';
import { ArticleHeaderComponent } from '../../shared/article-header/article-header.component';
import { LogoFrameComponent } from '../../shared/logo-frame/logo-frame.component';
import { MissingItemComponent } from '../../shared/missing-item/missing-item.component';

@Component({
    selector: 'app-experience-detail',
    imports: [RouterLink, ArticleHeaderComponent, LogoFrameComponent, MissingItemComponent],
    templateUrl: './experience-detail.component.html',
    styleUrl: './experience-detail.component.scss'
})
export class ExperienceDetailComponent {
  private readonly route = inject(ActivatedRoute);

  readonly experience = findExperienceBySlug(this.route.snapshot.paramMap.get('slug') ?? '');
}
