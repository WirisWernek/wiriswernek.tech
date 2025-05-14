import { Component, input } from '@angular/core';

import { ProjetoModel } from '../../../../../../models/projeto.model';

import { ButtonLinkComponent } from '../../../../../shared/components/button-link/button-link.component';

@Component({
  selector: 'app-project-card',
  imports: [ButtonLinkComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  projeto = input.required<ProjetoModel>();
}
