import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { SectionTitleComponent } from "../../../shared/components/section-title/section-title.component";

@Component({
  selector: 'app-sobre-mim-section',
  imports: [SectionTitleComponent, ButtonComponent],
  templateUrl: './sobre-mim-section.component.html',
  styleUrl: './sobre-mim-section.component.scss'
})
export class SobreMimSectionComponent {

}
