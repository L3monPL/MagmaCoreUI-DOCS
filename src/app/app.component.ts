import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeHeaderComponent } from './components/home/home-header/home-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeHeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MagmaCoreDashboard';
}
