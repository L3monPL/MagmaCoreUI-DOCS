import { Component } from '@angular/core';
import { MagmaButonModule, MagmaCardModule } from 'magma-core';
import { CodeTemplateComponent } from '../../../templates/code-template/code-template.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MagmaCardModule,
    MagmaButonModule,
    CodeTemplateComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent{

  codeImport = `import { MagmaCardModule } from 'magma-core';`

  codeCardExamp: string = `<magma-card>
    <magma-card-header>
      <magma-card-title>
        Card title
      </magma-card-title>
      <magma-card-subtitle>
        Subtitle
      </magma-card-subtitle>
    </magma-card-header>

    <magma-card-actions justify="end">
        <button magmaButton color="red">Decline</button>
        <button magmaButton color="green">Accept</button>
    </magma-card-actions>
</magma-card>`
}
