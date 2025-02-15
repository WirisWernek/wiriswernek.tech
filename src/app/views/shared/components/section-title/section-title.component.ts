import { LowerCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [LowerCasePipe],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
})
export class SectionTitleComponent {
  title = input.required<string>();
}
