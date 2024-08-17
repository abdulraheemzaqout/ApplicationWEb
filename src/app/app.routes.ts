import { RouterModule, Routes, provideRouter } from '@angular/router';

import { ItemsListComponent } from './components/ItemsComponents/itemsList/itemsList.component';
import { ItemCardComponent } from './components/ItemsComponents/itemCard/itemCard.component';
import { AddNewItemComponent } from './components/ItemsComponents/add-new-item/add-new-item.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'itemsList', component: ItemsListComponent },
    { path: 'itemsCard', component: ItemCardComponent },
    { path: 'AddNewItem', component: AddNewItemComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
