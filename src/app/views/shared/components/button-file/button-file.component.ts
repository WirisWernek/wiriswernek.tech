import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button-file',
  imports: [],
  templateUrl: './button-file.component.html',
  styleUrl: './button-file.component.scss',
})
export class ButtonFileComponent {
  text = input.required<string>();
  file = input<string>();
}
