import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoProjetosComponent } from './resumo-projetos.component';

describe('ResumoProjetosComponent', () => {
  let component: ResumoProjetosComponent;
  let fixture: ComponentFixture<ResumoProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumoProjetosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumoProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
