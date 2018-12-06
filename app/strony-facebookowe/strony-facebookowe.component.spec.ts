import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StronyFacebookoweComponent } from './strony-facebookowe.component';

describe('StronyFacebookoweComponent', () => {
  let component: StronyFacebookoweComponent;
  let fixture: ComponentFixture<StronyFacebookoweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StronyFacebookoweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StronyFacebookoweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
