import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AvatarModule, MenubarModule, ButtonModule, ToolbarModule],
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent {
  itensMenu = [
    {
      label: 'Home',
      icon: 'pi pi-android',
      url: '/home',
    },
    {
      label: 'Projetos',
      icon: 'pi pi-android',
      url: '/projetos',
    },
    {
      label: 'Sobre mim',
      icon: 'pi pi-user-plus',
      url: '/sobre',
      target: '',
    },
  ];

  constructor(private readonly router: Router) {}

  navegarMenu(item: string): void {
    this.router.navigate([item]);
  }
}
