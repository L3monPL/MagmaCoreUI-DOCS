import { Component } from '@angular/core';
import { CodeTemplateComponent } from '../../../templates/code-template/code-template.component';
import { MagmaAutocompleteComponent, MagmaAutocompleteModule, MagmaCardModule, MagmaFormFieldModule, MagmaInputModule } from 'magma-core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [
    CodeTemplateComponent,
    MagmaAutocompleteModule,
    MagmaFormFieldModule,
    MagmaCardModule,
    MagmaInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss'
})
export class AutocompleteComponent {

  // --- Import --- //
  codeImport = `import { MagmaAutocompleteModule } from 'magma-core';`
  codeImportFormFields = `import { MagmaFormFieldModule } from 'magma-core';`
  codeImportInput = `import { MagmaInputModule } from 'magma-core';`
  codeImportReactiveForms = `import { ReactiveFormsModule } from 'magma-core';`

  // --- Basic --- //
  codeBasicExamp: string = `<div [formGroup]="form">
  <magma-form-field>
    <magma-label>Autocomplete</magma-label>
    <input #inputAutocomplete_1 magmaInput type="text" inputTypeStyle="autocomplete" placeholder="Autocomplete" formControlName="autocomplete">
    <magma-autocomplete #autocomplete_1 [inputElement]="inputAutocomplete_1" [list]="listAutocomplete" [loading]="loadingAutocomplete" (searchEmitter)="searchAutocomplete($event)">
      @for (item of listAutocomplete; track $index) {
        <p magmaAutocompleteItem (click)="selectedAutocompleteObject(item, autocomplete_1)">{{item.name}}</p>
      }
    </magma-autocomplete>
  </magma-form-field>
</div>`
  codeBasicTypescript: string = `form = new FormGroup({
  autocomplete: new FormControl(''),
});

listAutocomplete: Array<any> = []
loadingAutocomplete = false
autocompleteTimeout: any

searchAutocomplete(event: any){
  this.loadingAutocomplete = true

  if (this.autocompleteTimeout) {
    clearTimeout(this.autocompleteTimeout)
  }

  this.autocompleteTimeout = setTimeout(() => {

    this.listAutocomplete = [
      { id: 0, name: 'blue' },
      { id: 1, name: 'orange' },
      { id: 2, name: 'white' },
      { id: 3, name: 'red' },
      { id: 4, name: 'green' },
      { id: 5, name: 'purple' },
      { id: 6, name: 'black' }
    ]

    this.loadingAutocomplete = false
  }, 1000);
}

objectAutocomplete = null

selectedAutocompleteObject(object: any, autocompleteReference: MagmaAutocompleteComponent){
  this.objectAutocomplete = object
  autocompleteReference.autocompleteSelectItem()
  this.form.get('autocomplete')?.setValue(object.name)
}`

  form = new FormGroup({
    autocomplete: new FormControl(''),
    autocomplete_2: new FormControl('')
  });

  listAutocomplete: Array<any> = []
  loadingAutocomplete = false
  autocompleteTimeout: any

  searchAutocomplete(event: any){
    this.loadingAutocomplete = true

    if (this.autocompleteTimeout) {
      clearTimeout(this.autocompleteTimeout)
    }

    console.log(event)

    this.autocompleteTimeout = setTimeout(() => {

      this.listAutocomplete = [
        { id: 0, name: 'blue' },
        { id: 1, name: 'orange' },
        { id: 2, name: 'white' },
        { id: 3, name: 'red' },
        { id: 4, name: 'green' },
        { id: 5, name: 'purple' },
        { id: 6, name: 'black' }
      ]

      this.loadingAutocomplete = false
    }, 1000);
  }

  objectAutocomplete = null

  selectedAutocompleteObject(object: any, autocompleteReference: MagmaAutocompleteComponent){
    this.objectAutocomplete = object
    autocompleteReference.autocompleteSelectItem()
    this.form.get('autocomplete')?.setValue(object.name)
  }

}
