import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsideMenuComponent } from './appside-menu.component';

describe('AppsideMenuComponent', () => {
  let component: AppsideMenuComponent;
  let fixture: ComponentFixture<AppsideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
