import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomtextComponent } from './customtext.component';

describe('CustomtextComponent', () => {
  let component: CustomtextComponent;
  let fixture: ComponentFixture<CustomtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
