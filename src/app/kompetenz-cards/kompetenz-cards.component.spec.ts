import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KompetenzCardsComponent } from './kompetenz-cards.component';

describe('KompetenzCardsComponent', () => {
  let component: KompetenzCardsComponent;
  let fixture: ComponentFixture<KompetenzCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KompetenzCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KompetenzCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
