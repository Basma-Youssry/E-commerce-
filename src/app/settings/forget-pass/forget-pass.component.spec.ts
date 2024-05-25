import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPAssComponent } from './forget-pass.component';

describe('ForgetPAssComponent', () => {
  let component: ForgetPAssComponent;
  let fixture: ComponentFixture<ForgetPAssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetPAssComponent]
    });
    fixture = TestBed.createComponent(ForgetPAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
