import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { featuredProjects } from '../../data/site-content';

@Component({
    selector: 'app-projects',
    imports: [RouterLink],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly projects = featuredProjects;
}
