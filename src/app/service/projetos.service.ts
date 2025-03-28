import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProjetoModel } from '../models/projeto.model';

@Injectable({
  providedIn: 'root',
})
export class ProjetosService {
  constructor() {}

  getProjects(): Observable<ProjetoModel[]> {
    return of([
      {
        nome: 'Cartão de Visitas',
        descricao: 'O futuro dos ultrapassados Cartões de Visita',
        tags: ['Angular', 'Typescript', 'Bootstrap', 'PWA'],
        repositorio:
          'https://github.com/WirisWernek/digital-business-card-frontend',
        url: 'https://dbc-wiriswernek.vercel.app',
        preview: '/assets/images/projeto-1.svg',
      },
      {
        nome: 'Previsão do Tempo',
        descricao: 'Previsão do tempo rápida e simples',
        tags: ['Angular', 'Typescript', 'Tailwind'],
        repositorio: 'https://github.com/WirisWernek/previsao_tempo',
        url: 'https://previsao-tempo-wiriswernek.vercel.app',
        preview: '/assets/images/projeto-2.svg',
      },
      {
        nome: 'Cronolog',
        descricao: 'Gerenciando as suas horas em atividades do IFES.',
        tags: ['Angular', 'Java', 'Spring', 'MySQL'],
        repositorio: 'https://github.com/cronolog-ifes',
        url: 'http://cronolog.com.br/',
        preview: '/assets/images/projeto-3.svg',
      },
    ]);
  }
}
