import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjetoModel } from '../../../../models/projeto.model';
import { ProjetosService } from '../../../../service/projetos.service';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';
import { ProjectCardComponent } from "./components/project-card/project-card.component";

@Component({
  selector: 'app-projetos-section',
  imports: [SectionTitleComponent, AsyncPipe, ProjectCardComponent],
  templateUrl: './projetos-section.component.html',
  styleUrl: './projetos-section.component.scss',
})
export class ProjetosSectionComponent implements OnInit {
  private readonly projectService = inject(ProjetosService);
  projetos!: Observable<ProjetoModel[]>;

  ngOnInit(): void {
    this.projetos = this.projectService.getProjects();
  }
}
