import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPortfoliComponent } from './services-portfoli.component';

describe('ServicesPortfoliComponent', () => {
  let component: ServicesPortfoliComponent;
  let fixture: ComponentFixture<ServicesPortfoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesPortfoliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesPortfoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
