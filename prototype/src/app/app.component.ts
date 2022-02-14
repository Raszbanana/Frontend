import { Component } from "@angular/core";
import { UsersService } from "./services/users.service";

@Component({
  selector: "app-root",
  template: `
    <app-header></app-header>

    <router-outlet></router-outlet>

    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  constructor(private usersService: UsersService) {}
  title = "prototype";

  ngOnInit(): void {
    this.usersService.getUsers();
  }
}

