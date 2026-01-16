import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerzoComponente } from './terzo-componente';

describe('TerzoComponente', () => {
  let component: TerzoComponente;
  let fixture: ComponentFixture<TerzoComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerzoComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerzoComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
