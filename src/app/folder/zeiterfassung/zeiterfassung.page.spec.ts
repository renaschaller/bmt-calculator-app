import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZeiterfassungPage } from './zeiterfassung.page';

describe('ZeiterfassungPage', () => {
  let component: ZeiterfassungPage;
  let fixture: ComponentFixture<ZeiterfassungPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeiterfassungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
