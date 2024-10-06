import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { ProjetosComponent } from '../projetos/projetos.component';
import { ApresentacaoComponent } from '../apresentacao/apresentacao.component';
import { NotasComponent } from '../notas/notas.component';
import { DividerModule } from 'primeng/divider';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardModule,
    MenubarModule,
    ButtonModule,
    ProjetosComponent,
    ApresentacaoComponent,
    NotasComponent,
    DividerModule,
    HeaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: [],
})
export class HomeComponent {}
