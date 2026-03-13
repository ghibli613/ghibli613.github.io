import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo-frame',
  standalone: true,
  templateUrl: './logo-frame.component.html',
  styleUrl: './logo-frame.component.scss',
})
export class LogoFrameComponent {
  src = input<string | undefined>();
  alt = input('');
  scale = input(1);
  position = input('center');
  padding = input('0.8rem');
}
