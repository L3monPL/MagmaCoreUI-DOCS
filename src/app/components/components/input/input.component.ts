import { Component } from '@angular/core';
import { MagmaCardModule, MagmaFormFieldModule, MagmaInputModule } from 'magma-core';
import { CodeTemplateComponent } from '../../../templates/code-template/code-template.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    MagmaCardModule,
    CodeTemplateComponent,
    MagmaInputModule,
    CommonModule,
    FormsModule,
    MagmaFormFieldModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  codeImport = `import { MagmaInputModule } from 'magma-core';`

  codeCardExamp: string = `<magma-card>
    <input magmaInput type="text">
</magma-card>`

  textNgModel = 'Some text...'

  // 

  codeCardExampReactiveForms: string = `<magma-card>
    <input magmaInput type="text" formControlName="text" placeholder="Some text...">
</magma-card>`

numberExamp_1 = 1337

}
