import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatCardComponent } from './flat-card.component';

describe('FlatCardComponent', () => {
  let component: FlatCardComponent;
  let fixture: ComponentFixture<FlatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
