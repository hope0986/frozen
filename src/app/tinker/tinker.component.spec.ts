import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinkerComponent } from './tinker.component';

describe('TinkerComponent', () => {
  let component: TinkerComponent;
  let fixture: ComponentFixture<TinkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
