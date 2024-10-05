import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { ProjetosComponent } from "../projetos/projetos.component";
import { ApresentacaoComponent } from "../apresentacao/apresentacao.component";
import { NotasComponent } from "../notas/notas.component";
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, MenubarModule, ButtonModule, ProjetosComponent, ApresentacaoComponent, NotasComponent, DividerModule],
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent {
itensMenu = [{label:"Notas", icon:'pi pi-palette', items:[]}, {label:"Artigos", icon:'pi pi-palette', items:[]},
              {label:"Projetos", icon:'pi pi-palette', items:[]},{label:"Sobre mim", icon:'pi pi-palette', items:[]}]
}
