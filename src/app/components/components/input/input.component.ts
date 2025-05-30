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

  // --- Import --- //
  codeImport = `import { MagmaInputModule } from 'magma-core';`
  codeImportFormFields = `import { MagmaFormFieldModule } from 'magma-core';`

  // --- Basic --- //
  codeCardExamp: string = `<input magmaInput type="text" [(ngModel)]="textNgModel" placeholder="Some text...">`
  textNgModel = 'Some text...'

  // --- Reactive Forms --- //
  codeCardExampReactiveForms: string = `<input magmaInput type="text" formControlName="text" placeholder="Some text...">`
  
  // --- Form Fields --- //
  codeInputFormField: string = `<magma-form-field>
        <magma-label>Stan liczb</magma-label>
        <input magmaInput type="text" [(ngModel)]="textNgModelFormField" placeholder="Some text...">
</magma-form-field>`
  textNgModelFormField : string = `Some text...`
  
  // --- Number --- //
  numberExamp_1 = 1337
  numberExampCode_1 = `<magma-form-field>
        <magma-label>Stan liczb</magma-label>
        <input magmaInput type="number" [(ngModel)]="number" inputTypeStyle="number" step="1" placeholder="Numbers...">
</magma-form-field>` 

  numberExamp_2 = 5566
  numberExampCode_2 = `<magma-form-field>
        <magma-label>Stan liczb</magma-label>
        <input magmaInput type="number" [(ngModel)]="number" inputTypeStyle="number-right" step="1" placeholder="Numbers...">
</magma-form-field>`

  // --- Number --- //
  textareaCodeExamp = `<magma-form-field>
        <magma-label>Textarea</magma-label>
        <textarea magmaTextarea rows="5" style="resize: none;"></textarea>
</magma-form-field>`

}
