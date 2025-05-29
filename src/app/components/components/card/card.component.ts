import { Component } from '@angular/core';
import { MagmaCardModule } from 'magma-core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MagmaCardModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  codeImport = `import { MagmaCardModule } from 'magma-core';`


  copyCode(code: any) {
    navigator.clipboard.writeText(code).then(() => {
      alert('Skopiowano kod!');
    });
  }
}
