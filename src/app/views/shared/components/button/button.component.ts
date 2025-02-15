import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

	text = input.required<string>();
	link = input.required<string>();

	router = inject(Router)

	handleClick() {
		window.open(this.link(), '_blank');
	}
}
