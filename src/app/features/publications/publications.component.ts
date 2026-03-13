import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { publications } from './data/publications-content';
import { NewsThumbnailComponent } from '../../shared/news-thumb/news-thumb.component';

@Component({
    selector: 'app-publications',
    imports: [RouterLink, NewsThumbnailComponent],
    templateUrl: './publications.component.html',
    styleUrl: './publications.component.scss'
})
export class PublicationsComponent {
  readonly publications = publications;
}
