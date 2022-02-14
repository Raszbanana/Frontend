import { Component, OnInit } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { UserState } from "src/app/states/reducers/user.reducer";
import { User } from "../../models/user";
import { ApiService } from "../../services/api.service";


@Component({
  selector: "app-users",
  template: `
  <div class="container">
    <div class="user-columns " >
      <div class="user-column " >
        <div class="card-content " *ngFor = "let user of storedUsers$ |async ">
          <div class="media">
            <div class="media-left">
              <figure class="image is-96x96">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4"></p>
            </div>
          </div>
          <div class="content is-medium">
           <h5>Name: </h5>
           <p> {{ this.user.name }} </p>
           <h5>Username:</h5>
           <p> {{ this.user.username }}</p>
           <h5>Email:</h5>
           <p> {{ this.user.email }}</p>
           <h5>Phone:</h5> 
           <p>{{ this.user.phone }}</p>
           <h5>Website:</h5>  
           <p>{{ this.user.website  }}</p>
            <br />
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Delete</a>
          </footer>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [],
})
export class UsersComponent implements OnInit {
  constructor(private userService: ApiService) {}


@Select(UserState.SelectAllUsers) storedUsers$!: Observable<User[]>
  ngOnInit(){
    this.storedUsers$.subscribe();
    console.log(this.storedUsers$)
  }
}
