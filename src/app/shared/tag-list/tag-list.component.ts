import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  templateUrl: './tag-list.component.html',
})
export class TagListComponent {
  tags = input<string[]>([]);
}
