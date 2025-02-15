import { Component } from '@angular/core';
import { ConhecimentosSectionComponent } from './components/conhecimentos-section/conhecimentos-section.component';
import { ContatoSectionComponent } from './components/contato-section/contato-section.component';
import { HeaderComponent } from "./components/header/header.component";
import { InicioSectionComponent } from './components/inicio-section/inicio-section.component';
import { ProjetosSectionComponent } from './components/projetos-section/projetos-section.component';
import { SobreMimSectionComponent } from './components/sobre-mim-section/sobre-mim-section.component';

@Component({
  selector: 'app-home',
  imports: [
    InicioSectionComponent,
    SobreMimSectionComponent,
    ProjetosSectionComponent,
    ConhecimentosSectionComponent,
    ContatoSectionComponent,
    HeaderComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
