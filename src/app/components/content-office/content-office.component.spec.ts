import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentOfficeComponent } from './content-office.component';

describe('ContentOfficeComponent', () => {
  let component: ContentOfficeComponent;
  let fixture: ComponentFixture<ContentOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
