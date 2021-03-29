import { Injectable } from '@angular/core';
import {GetUsersQuery, GetUsersByIDQuery, CreateUserMutation, DeleteUserMutation} from './users.query.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Response} from 'src/core/models/response';
import {User} from '../../models/users/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
      private getUsersQuery: GetUsersQuery,
      private getUsersByIDQuery: GetUsersByIDQuery,
      private createUserMutation: CreateUserMutation,
      private deleteUserMutation: DeleteUserMutation) {}

  getUsers(): Observable<Response> {
    return this.getUsersQuery.watch({}).valueChanges.pipe(map(({ data }: any) => data.getUsers));
  }

  getUsersByID(id: string): Observable<Response> {
    return this.getUsersByIDQuery
      .watch({
        id: id,
      })
      .valueChanges.pipe(map(({ data }: any) => data.getUserByID));
  }


  createUser(user: User): Observable<Response> {
    return this.createUserMutation
      .mutate({
        rq: { data: user },
      })
      .pipe(map(({ data }: any) => data.createUser));
  }

  deleteUser(id: string): Observable<Response> {
    return this.deleteUserMutation
      .mutate({
        rq: id
      })
      .pipe(map(({ data }: any) => data.deleteUser));
  }

}
