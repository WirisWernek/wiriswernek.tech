import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button-link',
  imports: [],
  templateUrl: './button-link.component.html',
  styleUrl: './button-link.component.scss',
})
export class ButtonLinkComponent {
  text = input.required<string>();
  link = input<string>();
}
