import { Component, input } from '@angular/core';

@Component({
  selector: 'app-news-thumb',
  standalone: true,
  templateUrl: './news-thumb.component.html',
  styleUrl: './news-thumb.component.scss',
})
export class NewsThumbnailComponent {
  src = input<string | undefined>();
  alt = input('');
}
