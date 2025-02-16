import { Component, input } from '@angular/core';

import { ProjetoModel } from '../../../../../../models/projeto.model';
import { ButtonComponent } from "../../../../../shared/components/button/button.component";

@Component({
  selector: 'app-project-card',
  imports: [ButtonComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
	projeto = input.required<ProjetoModel>();
}
