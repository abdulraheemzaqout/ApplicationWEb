import { Component } from '@angular/core';
import { ItemsListComponent } from '../tabPages/itemsList/itemsList.component';
import { ItemCardComponent } from "../itemCard/itemCard.component";
import { HistoricalInfoComponent } from '../tabPages/historical-info/historical-info.component';

@Component({
  selector: 'app-itemTabs',
  standalone: true,
  imports: [
    ItemsListComponent,
    ItemCardComponent,
    HistoricalInfoComponent
  ],
  templateUrl: './itemTabs.component.html',
  styleUrl: './itemTabs.component.scss'
})
export class ItemTabsComponent {

}
