import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondoComponente } from './secondo-componente';

describe('SecondoComponente', () => {
  let component: SecondoComponente;
  let fixture: ComponentFixture<SecondoComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondoComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondoComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
