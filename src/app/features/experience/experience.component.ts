import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { experiences } from './data/experience-content';
import { LogoFrameComponent } from '../../shared/logo-frame/logo-frame.component';

@Component({
    selector: 'app-experience',
    imports: [RouterLink, LogoFrameComponent],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  readonly experiences = experiences;
}
