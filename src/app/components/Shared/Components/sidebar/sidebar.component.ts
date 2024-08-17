import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {
    const hamBurger = document.querySelector(".toggle-btn");
    if (hamBurger) {
      hamBurger.addEventListener("click", function () {
        document.querySelector("#sidebar")?.classList.toggle("expand");
      })
    }
  }
}

