import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { experiences, featuredProjects, publications } from '../../data/site-content';

@Component({
    selector: 'app-home',
    imports: [RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly leadProject = featuredProjects[0];
  readonly spotlightProjects = featuredProjects.slice(1);
  readonly spotlightPublication = publications[0];
  readonly spotlightExperience = experiences[0];
}
