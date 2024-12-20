import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CardModule, ButtonModule, DataViewModule, TagModule],
  templateUrl: './projetos.component.html',
  styleUrls: [],
})
export class ProjetosComponent {
  @Input() projetosExibir: number | undefined;

  projetos = [
    {
      nome: 'Meu Portfólio',
      icon: 'pi pi-palette',
      ultimaAtualizacao: '05/10/2024',
      sobre:
        'Projeto para apresentação técnicas sobre mim e demonstração e apresentação de outros projetos feitos por mim.',
      imagem: 'icones/logo.png',
      demonstracao: false,
    },
    {
      nome: 'Financeiro',
      icon: 'pi pi-palette',
      ultimaAtualizacao: '01/01/2000',
      sobre:
        'Projeto para cadastro de gastos para auxiliar na organização da vida financeira.',
      imagem: 'icones/cofrinho.jpg',
      demonstracao: true,
      url: 'https://lajuniorfe.github.io/cadastro-despesa/',
    },
    {
      nome: 'Chat',
      icon: 'pi pi-palette',
      ultimaAtualizacao: '01/01/2000',
      sobre: 'Projeto para gerenciamento de conversas.',
      imagem: 'icones/talk.jpg',
      demonstracao: false,
    },
    {
      nome: 'Chatboot',
      icon: 'pi pi-palette',
      ultimaAtualizacao: '01/01/2000',
      sobre: 'Projeto de atendimento robotizado via mensagens.',
      imagem: 'icones/robozinho.jpg',
      demonstracao: false,
    },
  ];
}
