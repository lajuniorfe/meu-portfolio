import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AvatarModule, MenubarModule, ButtonModule],
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
      label: 'Social',
      icon: 'pi pi-at',
      url: '#',
      items: [
        {
          label: 'linkedin',
          icon: 'pi pi-linkedin',
          url: 'https://linkedin.com/in/luiz-augustojunior',
          target: '_blank',
        },
        {
          icon: 'pi pi-github',
          label: 'GitHub',
          url: 'https://github.com/lajuniorfe/',
          target: '_blank',
        },
      ],
    },
    {
      label: 'Artigos',
      icon: 'pi pi-tags',
      url: '#',
    },
    {
      label: 'Sobre mim',
      icon: 'pi pi-user-plus',
      url: '/sobre',
      target: '',
    },
  ];

  constructor() {}
}
