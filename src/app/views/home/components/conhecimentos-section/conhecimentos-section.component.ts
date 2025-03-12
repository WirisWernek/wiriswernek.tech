import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';
import { Conhecimentos } from './../../../../models/conhecimentos.model';
import { ConhecimentoCardComponent } from './components/conhecimento-card/conhecimento-card.component';

@Component({
  selector: 'app-conhecimentos-section',
  imports: [SectionTitleComponent, ConhecimentoCardComponent],
  templateUrl: './conhecimentos-section.component.html',
  styleUrl: './conhecimentos-section.component.scss',
})
export class ConhecimentosSectionComponent {
  conhecimentos!: Conhecimentos;

  constructor() {
    this.conhecimentos = {
      databases: ['MySQL', 'PostgreSQL'],
      ferramentas: [
        'Docker',
        'Vagrant',
        'Figma',
        'VS Code',
        'IntelliJ',
        'Eclipse',
        'Postman',
        'GitHub',
        'Azure Devops',
        'Git',
        'GitLab',
        'LocalStack',
      ],
      frameworks: [
        'Angular',
        'Express',
        'JUnit',
        'Spring Boot',
        'Mockito',
        'Bootstrap',
        'Tailwind',
        'React Native',
      ],
      linguagens: [
        'Java',
        'TypeScript',
        'Golang',
        'PHP',
        'SQL',
        'JavaScript',
        'Shell Script',
      ],
      outros: ['HTML', 'CSS', 'SASS'],
      cloud: ['AWS', 'Firebase', 'Digital Ocean'],
    };
  }
}
