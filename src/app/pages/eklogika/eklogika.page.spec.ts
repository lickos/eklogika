import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EklogikaPage } from './eklogika.page';

describe('EklogikaPage', () => {
  let component: EklogikaPage;
  let fixture: ComponentFixture<EklogikaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EklogikaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EklogikaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
