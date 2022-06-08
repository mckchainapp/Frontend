import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarGuiaComponent } from './generar-guia.component';

describe('GenerarGuiaComponent', () => {
  let component: GenerarGuiaComponent;
  let fixture: ComponentFixture<GenerarGuiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarGuiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
