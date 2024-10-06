import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

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
      label: 'Sobre mim',
      icon: 'pi pi-user-plus',
      items: [
        {
          icone: '',
          nome: '',
        },
      ],
    },
    {
      label: 'Social',
      icon: 'pi pi-at',
      items: [
        {
          label: 'linkedin',
          icon: 'pi pi-linkedin',
          shortcut: '⌘+S',
        },
        {
          icon: 'pi pi-github',
          label: 'GitHub',
        },
        {
          icon: 'pi pi-envelope',
          label: 'Email',
        },
      ],
    },
    {
      label: 'Projetos',
      icon: 'pi pi-android',
      items: [
        {
          icone: '',
          nome: '',
        },
      ],
    },
    {
      label: 'Notas',
      icon: 'pi pi-ticket',
      items: [
        {
          icone: '',
          nome: '',
        },
      ],
    },
    {
      label: 'Artigos',
      icon: 'pi pi-tags',
      items: [
        {
          icone: '',
          nome: '',
        },
      ],
    },
  ];
}
