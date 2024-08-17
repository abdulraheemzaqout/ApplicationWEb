import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Safe to use document here
      console.log(document.title);

      const hamBurger = document.querySelector(".toggle-btn");
      if (hamBurger) {
        hamBurger.addEventListener("click", function () {
          document.querySelector("#sidebar")?.classList.toggle("expand");
        }

        )
      }
    }
  }
}

