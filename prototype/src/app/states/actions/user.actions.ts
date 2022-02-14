import { User } from '../../models/user'

export class GetUser {
    static readonly type = '[Users] Get User'
    constructor(public readonly payload: User[]) {}
}