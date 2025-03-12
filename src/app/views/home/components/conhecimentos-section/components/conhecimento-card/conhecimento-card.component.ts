import { Component, input } from '@angular/core';

@Component({
  selector: 'app-conhecimento-card',
  imports: [],
  templateUrl: './conhecimento-card.component.html',
  styleUrl: './conhecimento-card.component.scss'
})
export class ConhecimentoCardComponent {
	conhecimentos = input.required<string[]>();
	title = input.required<string>();
}
