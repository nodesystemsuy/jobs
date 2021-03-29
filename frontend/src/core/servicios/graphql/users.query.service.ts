// @ts-ignore
import { Injectable } from '@angular/core';
import { Query, Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class GetUsersQuery extends Query<Response> {
  document = gql`
    query getUsers {
      getUsers{
          error
          data{
            id
            nickname
            email
            status
            birth_date
          }
          code
          msg
          type
        }
      }
  `;
}

@Injectable({
  providedIn: 'root',
})
export class GetUsersByIDQuery extends Query<Response> {
  document = gql`
    query getUserByID($id: ID!) {
        getUserByID(id: $id){
          error
          data{
            id
            nickname
            email
            status
            birth_date
          }
          code
          msg
          type
        }
      }
  `;
}

@Injectable({
  providedIn: 'root',
})
export class CreateUserMutation extends Mutation {
  document = gql`
    mutation createUser($rq: RequestNewUser!) {
      createUser(input: $rq )
      {
        error
        data{
          id
          nickname
          email
          status
          birth_date
        }
        code
        msg
        type
      }
    }
  `;
}

@Injectable({
  providedIn: 'root',
})
export class DeleteUserMutation extends Mutation {
  document = gql`
    mutation deleteUser($rq: ID!) {
      deleteUser(id: $rq){
        error
        data{
          id
          nickname
          email
          status
          birth_date
        }
        code
        msg
        type
      }
    }
  `;
}
