import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalInfoComponent } from './historical-info.component';

describe('HistoricalInfoComponent', () => {
  let component: HistoricalInfoComponent;
  let fixture: ComponentFixture<HistoricalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricalInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
