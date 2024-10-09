import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  // constructor(private primengConfig: PrimeNGConfig) {}
  ngOnit() {
    //this.primengConfig.setTranslation(traducao);
  }
}
