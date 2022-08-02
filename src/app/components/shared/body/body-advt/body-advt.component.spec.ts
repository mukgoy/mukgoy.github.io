import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAdvtComponent } from './body-advt.component';

describe('BodyAdvtComponent', () => {
  let component: BodyAdvtComponent;
  let fixture: ComponentFixture<BodyAdvtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyAdvtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyAdvtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
