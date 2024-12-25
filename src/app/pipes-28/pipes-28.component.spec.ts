import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipes28Component } from './pipes-28.component';

describe('Pipes28Component', () => {
  let component: Pipes28Component;
  let fixture: ComponentFixture<Pipes28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipes28Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipes28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
