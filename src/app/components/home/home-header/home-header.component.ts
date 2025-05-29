import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent {

  constructor(private router: Router) {}
  
    navigateTo(path: string) {
  
      this.router.navigate([`/${path}`])
    }

}
