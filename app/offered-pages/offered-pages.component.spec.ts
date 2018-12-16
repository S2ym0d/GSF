import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferedPagesComponent } from './offered-pages.component';

describe('OfferedPagesComponent', () => {
  let component: OfferedPagesComponent;
  let fixture: ComponentFixture<OfferedPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferedPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferedPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
