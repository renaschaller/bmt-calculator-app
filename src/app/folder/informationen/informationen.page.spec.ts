import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformationenPage } from './informationen.page';

describe('InformationenPage', () => {
  let component: InformationenPage;
  let fixture: ComponentFixture<InformationenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
