import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTabsComponent } from './itemTabs.component';

describe('ItemTabsComponent', () => {
  let component: ItemTabsComponent;
  let fixture: ComponentFixture<ItemTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
