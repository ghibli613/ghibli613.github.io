import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { publications } from '../../data/site-content';

@Component({
    selector: 'app-publications',
    imports: [RouterLink],
    templateUrl: './publications.component.html',
    styleUrl: './publications.component.scss'
})
export class PublicationsComponent {
  readonly publications = publications;
}
