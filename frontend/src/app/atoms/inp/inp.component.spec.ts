
import { ComponentFixture, TestBed, } from '@angular/core/testing';

import { Inp } from './inp.component';

describe('Inp', () => {
  let component: Inp;
  let fixture: ComponentFixture<Inp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inp ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Inp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
