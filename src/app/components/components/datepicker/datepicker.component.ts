import { Component } from '@angular/core';
import { MagmaCardModule, MagmaDatePickerModule, MagmaFormFieldModule, MagmaInputModule } from 'magma-core';
import { CodeTemplateComponent } from '../../../templates/code-template/code-template.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [
    MagmaCardModule,
    CodeTemplateComponent,
    MagmaFormFieldModule,
    MagmaInputModule,
    FormsModule,
    MagmaDatePickerModule
  ],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})
export class DatepickerComponent {

  // --- Import --- //
  codeImport = `import { MagmaFormFieldModule } from 'magma-core';`
  codeImportInput = `import { MagmaInputModule } from 'magma-core';`

  // --- Basic --- //
  codeDatepickerExamp: string = `<magma-form-field>
  <magma-label>Wybierz datę</magma-label>
  <input magmaInput inputTypeStyle="date" typeCalendar="day" type="text" [(ngModel)]="date" readonly>
</magma-form-field>`



  date_1 = this.convertDate(`${new Date()}`)
  date_2 = ''

  selectedDateChip = ''

  selectedDate(event: any){
    console.log(event)
    let date = this.convertDate(event)
    this.selectedDateChip = date
  }

  convertDate(dateStr: string): string {
    const date = new Date(dateStr)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

}
