import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { featuredProjects } from './data/projects-content';
import { NewsThumbnailComponent } from '../../shared/news-thumb/news-thumb.component';
import { TagListComponent } from '../../shared/tag-list/tag-list.component';

@Component({
    selector: 'app-projects',
    imports: [RouterLink, NewsThumbnailComponent, TagListComponent],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly projects = featuredProjects;
}
