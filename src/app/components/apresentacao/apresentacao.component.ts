import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-apresentacao',
  standalone: true,
  imports: [FieldsetModule, ImageModule],
  templateUrl: './apresentacao.component.html',
  styleUrls: [],
})
export class ApresentacaoComponent {}
