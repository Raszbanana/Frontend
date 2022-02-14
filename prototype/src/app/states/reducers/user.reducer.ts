import { State, Action, Selector, StateContext } from "@ngxs/store";
import { User } from "../../models/user";
import { GetUser } from "../actions/user.actions";

export interface UserStateModel {
  users: User[];
}

@State<UserStateModel>({
  name: "UserState",
  defaults: {
    users: [],
  },
})
export class UserState {
  @Action(GetUser)
  getUser({ setState }: StateContext<UserStateModel>, { payload }: GetUser) {
    setState({
      users: payload,
    });
  } 
  @Selector() static SelectAllUsers(state: UserStateModel): User[]{
      return state.users
  }
}
