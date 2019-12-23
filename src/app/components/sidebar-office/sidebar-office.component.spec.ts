import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOfficeComponent } from './sidebar-office.component';

describe('SidebarOfficeComponent', () => {
  let component: SidebarOfficeComponent;
  let fixture: ComponentFixture<SidebarOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
