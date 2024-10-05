import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-apresentacao',
  standalone: true,
  imports: [ButtonModule, FieldsetModule],
  templateUrl: './apresentacao.component.html',
})
export class ApresentacaoComponent {}
