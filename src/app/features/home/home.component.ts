import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { experiences } from '../experience/data/experience-content';
import { featuredProjects } from '../projects/data/projects-content';
import { publications } from '../publications/data/publications-content';
import { NewsThumbnailComponent } from '../../shared/news-thumb/news-thumb.component';
import { LogoFrameComponent } from '../../shared/logo-frame/logo-frame.component';

@Component({
    selector: 'app-home',
    imports: [RouterLink, NewsThumbnailComponent, LogoFrameComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly leadProject = featuredProjects[0];
  readonly spotlightProjects = featuredProjects.slice(1);
  readonly spotlightPublication = publications[0];
  readonly spotlightExperience = experiences[0];
}
