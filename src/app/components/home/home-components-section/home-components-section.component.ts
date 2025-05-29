import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-components-section',
  standalone: true,
  imports: [],
  templateUrl: './home-components-section.component.html',
  styleUrl: './home-components-section.component.scss'
})
export class HomeComponentsSectionComponent {

  constructor(private router: Router) {}

  navigateTo(firstPath: string, secondPath: string) {

    let path: string

    if (!secondPath) {
      this.router.navigate([`/${firstPath}`])
    }
    else{
      this.router.navigate([`/${firstPath}/${secondPath}`])
    }
  }
  
}
