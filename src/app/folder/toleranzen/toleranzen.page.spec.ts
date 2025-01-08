import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToleranzenPage } from './toleranzen.page';

describe('ToleranzenPage', () => {
  let component: ToleranzenPage;
  let fixture: ComponentFixture<ToleranzenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ToleranzenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
