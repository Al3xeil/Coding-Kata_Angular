import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KompetenzpflegeComponent } from './kompetenzpflege.component';

describe('KompetenzpflegeComponent', () => {
  let component: KompetenzpflegeComponent;
  let fixture: ComponentFixture<KompetenzpflegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KompetenzpflegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KompetenzpflegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
