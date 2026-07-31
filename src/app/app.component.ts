import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBarComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'neonminds';
}
