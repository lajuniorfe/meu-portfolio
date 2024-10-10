import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { NotasComponent } from '../notas/notas.component';
import { DividerModule } from 'primeng/divider';
import { HeaderComponent } from '../header/header.component';
import { ApresentacaoComponent } from '../apresentacao/apresentacao.component';
import { ProjetosComponent } from '../../pages/projetos/projetos.component';
import { ResumoProjetosComponent } from '../projetos/resumo-projetos/resumo-projetos.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardModule,
    MenubarModule,
    ButtonModule,
    ProjetosComponent,
    NotasComponent,
    DividerModule,
    HeaderComponent,
    ApresentacaoComponent,
    ResumoProjetosComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: [],
})
export class HomeComponent {}
