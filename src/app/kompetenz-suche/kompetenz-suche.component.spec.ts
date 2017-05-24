import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KompetenzSucheComponent } from './kompetenz-suche.component';

describe('KompetenzSucheComponent', () => {
  let component: KompetenzSucheComponent;
  let fixture: ComponentFixture<KompetenzSucheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KompetenzSucheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KompetenzSucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
