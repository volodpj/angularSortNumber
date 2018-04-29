import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PairedComponent } from './paired.component';

describe('PairedComponent', () => {
  let component: PairedComponent;
  let fixture: ComponentFixture<PairedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PairedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PairedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
