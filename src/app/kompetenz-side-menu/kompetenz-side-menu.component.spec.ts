import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KompetenzSideMenuComponent } from './kompetenz-side-menu.component';

describe('KompetenzSideMenuComponent', () => {
  let component: KompetenzSideMenuComponent;
  let fixture: ComponentFixture<KompetenzSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KompetenzSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KompetenzSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
