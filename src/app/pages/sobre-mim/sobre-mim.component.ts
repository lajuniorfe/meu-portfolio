import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
@Component({
  selector: 'app-sobre-mim',
  standalone: true,
  imports: [ImageModule, CardModule, ChipModule, ButtonModule],
  templateUrl: './sobre-mim.component.html',
  styleUrls: [],
})
export class SobreMimComponent {}
