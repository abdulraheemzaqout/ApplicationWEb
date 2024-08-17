import { RouterModule, Routes, provideRouter } from '@angular/router';

import { ItemsListComponent } from './components/ItemsComponents/tabPages/itemsList/itemsList.component';
import { ItemCardComponent } from './components/ItemsComponents/itemCard/itemCard.component';
import { AddNewItemComponent } from './components/ItemsComponents/add-new-item/add-new-item.component';

export const routes: Routes = [
    { path: 'items', component: ItemsListComponent },
    { path: 'itemsCard', component: ItemCardComponent },
    { path: 'AddNewItem', component: AddNewItemComponent },
    { path: '', redirectTo: '/itemsCard', pathMatch: 'full' },
];
