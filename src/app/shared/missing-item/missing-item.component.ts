import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-missing-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './missing-item.component.html',
  styleUrl: './missing-item.component.scss',
})
export class MissingItemComponent {
  heading = input('');
  backLabel = input('');
  backRoute = input('');
}
