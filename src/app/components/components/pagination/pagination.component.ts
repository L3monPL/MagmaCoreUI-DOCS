import { Component } from '@angular/core';
import { MagmaCardModule, MagmaPaginationModule } from 'magma-core';
import { CodeTemplateComponent } from '../../../templates/code-template/code-template.component';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    MagmaCardModule,
    CodeTemplateComponent,
    MagmaPaginationModule
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {

  // --- Import --- //
  codeImport = `import { MagmaPaginationModule } from 'magma-core';`

  // --- Basic --- //
  codePaginationExamp: string = `<magma-pagination
  [totalItems]="150"
  [pageSize]="10"
  [currentPage]="currentPage"
  (pageChange)="onPageChange($event)"
></magma-pagination>`


  // ------------- //

  currentPage = 1

  onPageChange(page: number) {
    this.currentPage = page;
    console.log('Nowa strona:', page);
  }
}
