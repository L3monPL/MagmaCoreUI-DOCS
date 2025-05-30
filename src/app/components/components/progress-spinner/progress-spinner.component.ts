import { Component } from '@angular/core';
import { MagmaCardModule, ProgressSpinnerModule } from 'magma-core';
import { CodeTemplateComponent } from '../../../templates/code-template/code-template.component';


@Component({
  selector: 'app-progress-spinner',
  standalone: true,
  imports: [
    MagmaCardModule,
    CodeTemplateComponent,
    ProgressSpinnerModule
  ],
  templateUrl: './progress-spinner.component.html',
  styleUrl: './progress-spinner.component.scss'
})
export class ProgressSpinnerComponent {

  // --- Import --- //
  codeImport = `import { ProgressSpinnerModule } from 'magma-core';`
  codeImportPrivider = `import { provideAnimations } from '@angular/platform-browser/animations';`

  // --- Basic --- //
  codeProgressSpinnerExamp: string = `<div style="display: flex; align-items: center; justify-content: center;">
  <progress-spinner [size]="26"></progress-spinner>
</div>`

}
