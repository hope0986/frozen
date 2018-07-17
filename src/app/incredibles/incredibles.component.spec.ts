import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrediblesComponent } from './incredibles.component';

describe('IncrediblesComponent', () => {
  let component: IncrediblesComponent;
  let fixture: ComponentFixture<IncrediblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrediblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrediblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
