import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { ProjetosComponent } from '../projetos/projetos.component';
import { NotasComponent } from '../notas/notas.component';
import { DividerModule } from 'primeng/divider';
import { HeaderComponent } from '../header/header.component';
import { ApresentacaoComponent } from '../apresentacao/apresentacao.component';
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
  ],
  templateUrl: './home.component.html',
  styleUrls: [],
})
export class HomeComponent {}
