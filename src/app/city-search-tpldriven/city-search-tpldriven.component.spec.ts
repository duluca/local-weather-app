import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySearchTpldrivenComponent } from './city-search-tpldriven.component';

describe('CitySearchTpldrivenComponent', () => {
  let component: CitySearchTpldrivenComponent;
  let fixture: ComponentFixture<CitySearchTpldrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitySearchTpldrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySearchTpldrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
