import { Component } from '@angular/core';
import { ButtonLinkComponent } from "../../../shared/components/button-link/button-link.component";
import { SectionTitleComponent } from "../../../shared/components/section-title/section-title.component";

@Component({
  selector: 'app-sobre-mim-section',
  imports: [SectionTitleComponent, ButtonLinkComponent],
  templateUrl: './sobre-mim-section.component.html',
  styleUrl: './sobre-mim-section.component.scss'
})
export class SobreMimSectionComponent {

}
