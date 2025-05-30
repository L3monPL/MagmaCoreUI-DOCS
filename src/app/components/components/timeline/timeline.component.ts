import { Component } from '@angular/core';
import { MagmaCardModule, MagmaTimelineModule } from 'magma-core';
import { CodeTemplateComponent } from '../../../templates/code-template/code-template.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    MagmaCardModule,
    CodeTemplateComponent,
    MagmaTimelineModule
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {

  // --- Import --- //
  codeImport = `import { MagmaTimelineModule } from 'magma-core';`

  // --- Basic --- //
  codeTimelineExamp: string = `<magma-timeline>
  <magma-timeline-item>
    Item 1
  </magma-timeline-item>
  <magma-timeline-item>
    Item 2
  </magma-timeline-item>
</magma-timeline>`

}
