import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumo-projetos',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    AvatarModule,
    PanelModule,
    FieldsetModule,
  ],
  templateUrl: './resumo-projetos.component.html',
  styleUrls: [],
})
export class ResumoProjetosComponent {
  painelExpandido: boolean = false;
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

  constructor(private readonly router: Router) {}

  todosProjetos(): void {
    this.router.navigate(['/projetos']);
  }
}
