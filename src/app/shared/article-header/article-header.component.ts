import { Component, input } from '@angular/core';

@Component({
  selector: 'app-article-header',
  standalone: true,
  templateUrl: './article-header.component.html',
  styleUrl: './article-header.component.scss',
})
export class ArticleHeaderComponent {
  eyebrow = input('');
  src = input<string | undefined>();
  alt = input('');
  headline = input('');
  deck = input<string | undefined>();
  meta = input<string | undefined>();
}
