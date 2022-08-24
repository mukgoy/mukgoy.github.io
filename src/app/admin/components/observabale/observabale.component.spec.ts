import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservabaleComponent } from './observabale.component';

describe('ObservabaleComponent', () => {
  let component: ObservabaleComponent;
  let fixture: ComponentFixture<ObservabaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservabaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservabaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
