import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, provideRouter } from '@angular/router';
import { NavbarComponent } from './components/Shared/Components/navbar/navbar.component';
import { SidebarComponent } from './components/Shared/Components/sidebar/sidebar.component';
import { ItemsListComponent } from './components/ItemsComponents/itemsList/itemsList.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    RouterOutlet,
    RouterLink,
    NgbModule,
    NavbarComponent,
    SidebarComponent,
    ItemsListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Accounting-Web';
}
