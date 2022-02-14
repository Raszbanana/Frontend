import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <div class="navbar is-dark">
      <div class="navbar-brand is-expanded">
        <a class="navbar-item" routerLink="/" routerLinkActive="active">
          <p>Home</p>
        </a>
        <a class="navbar-item" routerLink="/users" routerLinkActive="active">
          <p>Users</p>
        </a>
      </div>
    </div>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
