import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KompetenzKategoryComponent } from './kompetenz-kategory.component';

describe('KompetenzKategoryComponent', () => {
  let component: KompetenzKategoryComponent;
  let fixture: ComponentFixture<KompetenzKategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KompetenzKategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KompetenzKategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
