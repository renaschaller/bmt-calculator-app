import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KontaktdatenPage } from './kontaktdaten.page';

describe('KontaktdatenPage', () => {
  let component: KontaktdatenPage;
  let fixture: ComponentFixture<KontaktdatenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktdatenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
