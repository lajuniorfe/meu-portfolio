import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CardModule, ButtonModule, AvatarModule, PanelModule],
  templateUrl: './projetos.component.html',
  styleUrls: [],
})
export class ProjetosComponent {
  projetos = [
    {
      nome: 'Meu Portfólio',
      icon: 'pi pi-palette',
      ultimaAtualizacao: '05/10/2024',
      sobre:
        'Projeto para apresentação técnicas sobre mim e demonstração e apresentação de outros projetos feitos por mim.',
    },
    {
      nome: 'Financeiro',
      icon: 'pi pi-palette',
      ultimaAtualizacao: '01/01/2000',
      sobre:
        'Projeto para cadastro de gastos para auxiliar na organização da vida financeira.',
    },
    {
      nome: 'Chat',
      icon: 'pi pi-palette',
      ultimaAtualizacao: '01/01/2000',
      sobre: 'Projeto para gerenciamento de conversas.',
    },
    {
      nome: 'Chatboot',
      icon: 'pi pi-palette',
      ultimaAtualizacao: '01/01/2000',
      sobre: 'Projeto de atendimento robotizado via mensagens.',
    },
  ];
}
