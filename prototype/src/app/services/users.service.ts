import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { User } from "../models/user";
import {ApiService} from "../services/api.service"
import { GetUser } from "../states/actions/user.actions";
import { UserState } from "../states/reducers/user.reducer";

@Injectable({providedIn: 'root',})

export class UsersService {
    constructor(
        private store: Store,
        private api: ApiService,
     ) {}
     
     public getUsers(): void {
         
         const storeUsers: User[] = this.store.selectSnapshot(UserState.SelectAllUsers)
         
         if (storeUsers.length === 0) {
             this.api.getUsers().subscribe((users) => {
                 this.store.dispatch(new GetUser(users.users))
             })
         }
        }
    }