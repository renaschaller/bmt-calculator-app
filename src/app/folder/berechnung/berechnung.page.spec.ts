import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BerechnungPage } from './berechnung.page';

describe('BerechnungPage', () => {
  let component: BerechnungPage;
  let fixture: ComponentFixture<BerechnungPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BerechnungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
