import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { Router } from '@angular/router';
import { ImageModule } from 'primeng/image';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AvatarModule,
    MenubarModule,
    ButtonModule,
    ToolbarModule,
    ImageModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent {
  itensMenu = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      url: 'home',
    },
    {
      label: 'Projetos',
      icon: 'pi pi-android',
      url: 'projetos',
    },
    {
      label: 'Sobre mim',
      icon: 'pi pi-user-plus',
      url: 'sobre-mim',
      target: '',
    },
  ];

  constructor(private readonly router: Router) {}

  navegarMenu(item: string): void {
    console.log(item);
    const destino = document.getElementById(item);
    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
