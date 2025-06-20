import { Injectable } from '@angular/core';
import { ProjetoModel } from '../models/projeto.model';

@Injectable({
  providedIn: 'root',
})
export class ProjetosService {
  constructor() {}

  getProjects(): ProjetoModel[] {
    return [
      {
        nome: 'Cartão de Visitas',
        descricao: 'O futuro dos ultrapassados Cartões de Visita.',
        tags: ['Angular', 'Typescript', 'Bootstrap', 'PWA'],
        repositorio:
          'https://github.com/WirisWernek/digital-business-card-frontend',
        url: 'https://dbc-wiriswernek.vercel.app',
        preview: '/assets/images/projeto-1.png',
      },
      {
        nome: 'Previsão do Tempo',
        descricao: 'Previsão do tempo rápida e simples.',
        tags: ['Angular', 'Typescript', 'Tailwind'],
        repositorio: 'https://github.com/WirisWernek/previsao_tempo',
        url: 'https://previsao-tempo-wiriswernek.vercel.app',
        preview: '/assets/images/projeto-2.png',
      },
      {
        nome: 'Cronolog',
        descricao: 'Gerenciando as suas horas em atividades do IFES.',
        tags: ['Angular', 'Java', 'Spring', 'MySQL'],
        repositorio: 'https://github.com/cronolog-ifes',
        url: 'http://cronolog.com.br/',
        preview: '/assets/images/projeto-3.png',
      },
      {
        nome: 'Pede Aí',
        descricao: 'Peça seu açai com um clique.',
        tags: ['Angular', 'Bootstrap', 'WhasApp'],
        repositorio: 'https://github.com/WirisWernek/pede-ai',
        url: 'https://pedeai-wiriswernek.vercel.app/acai',
        preview: '/assets/images/projeto-4.png',
      },
      {
        nome: 'Fisctrack Web',
        descricao: 'Cliente do gerenciador de notas fiscais.',
        tags: ['Angular', 'PrimeNg', 'Typescript'],
        repositorio: 'https://github.com/WirisWernek/fisctrack-web',
        preview: '/assets/images/projeto-5.png',
      },
      {
        nome: 'Fisctrack Core',
        descricao: 'API para gerenciar notas fiscais.',
        tags: ['Quarkus', 'Java', 'PostgreSQL'],
        repositorio: 'https://github.com/WirisWernek/fisctrack-core',
        url: 'https://wiriswernek.github.io/fisctrack-core',
        preview: '/assets/images/projeto-6.png',
      },
      {
        nome: 'Github Repos',
        descricao: 'Busque o que realmente te importa no Github.',
        tags: ['Angular', 'Github API', 'Tailwind'],
        repositorio: 'https://github.com/WirisWernek/github-repos',
        url: 'https://github-repos-wiriswernek.vercel.app',
        preview: '/assets/images/projeto-7.png',
      },
      {
        nome: 'QR Code Generator',
        descricao: 'Gerador de QR Code simples e rápido.',
        tags: ['Angular', 'Typescript', 'Bootstrap'],
        repositorio: 'https://github.com/WirisWernek/qr-code-generator',
        url: 'https://qr-code-generator-wiriswernek.vercel.app',
        preview: '/assets/images/projeto-8.png',
      },
      {
        nome: 'Logmine',
        descricao: 'Gerenciador de logs para aplicações Java.', 
        tags: ['Angular', 'Typescript', 'SCSS'],
        repositorio: 'https://github.com/WirisWernek/logmine',
        url: 'https://logmine.vercel.app/',
        preview: '/assets/images/projeto-9.png',
      },
      {
        nome: 'Links',
        descricao: 'Meu agregador de links.',
        tags: ['HTML', 'CSS', 'Javascript'],
        repositorio: 'https://github.com/WirisWernek/wiriswernek.links',
        url: 'https://links.wiriswernek.tech/',
        preview: '/assets/images/projeto-10.png',
      },
    ];
  }
}
