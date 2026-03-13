import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { experiences } from '../../data/site-content';

@Component({
    selector: 'app-experience',
    imports: [RouterLink],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  readonly experiences = experiences;
}
