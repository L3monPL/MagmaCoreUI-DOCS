import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MagmaCardModule } from 'magma-core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-typescript';

@Component({
  selector: 'app-code-template',
  standalone: true,
  imports: [
    MagmaCardModule
  ],
  templateUrl: './code-template.component.html',
  styleUrl: './code-template.component.scss'
})
export class CodeTemplateComponent implements AfterViewInit{

  @Input() code = ``

  @Input() language: string = 'typescript'

  @ViewChild('codeElement') codeElement!: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.codeElement.nativeElement)
    Prism.highlightElement(this.codeElement.nativeElement);
  }


  copyCode(code: any) {
    navigator.clipboard.writeText(code);
  }
}
