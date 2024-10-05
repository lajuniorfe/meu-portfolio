import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { Component, HostBinding } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  title = 'meu-portfolio';
}
