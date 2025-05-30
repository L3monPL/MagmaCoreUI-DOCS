import { Component } from '@angular/core';
import { MagmaButonModule, MagmaCardModule } from 'magma-core';
import { CodeTemplateComponent } from '../../../templates/code-template/code-template.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    MagmaCardModule,
    CodeTemplateComponent,
    MagmaButonModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  // --- Import --- //
  codeImport = `import { MagmaButonModule } from 'magma-core';`

  // --- Basic --- //
  codeButtonExamp: string = `<button magmaButton>Button</button>`
  // --- Color --- //
  codeButtonExampColor: string = `<div style="display: flex; column-gap: 0.75rem;">
    <button magmaButton color="green">Button</button>
    <button magmaButton color="red">Button</button>
    <button magmaButton color="purple">Button</button>
    <button magmaButton color="yellow">Button</button>
    <button magmaButton color="#cc99cd">Button</button>
    <button magmaButton color="#7ec699">Button</button>
</div>`
  // --- Size --- //
  codeButtonExampSize: string = `<div style="display: flex; column-gap: 0.75rem; align-items: center;">
    <button magmaButton color="green" size="s">Button</button>
    <button magmaButton color="red" size="m">Button</button>
    <button magmaButton color="purple" size="l">Button</button>
    <button magmaButton color="yellow" size="xl">Button</button>
    <button magmaButton color="#cc99cd" size="32">Button</button>
    <button magmaButton color="#7ec699" size="35">Button</button>
</div>`

}
