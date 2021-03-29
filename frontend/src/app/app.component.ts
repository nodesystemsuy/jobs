import { Component, OnInit } from '@angular/core';
import {UsersService} from "../core/servicios/graphql/users.service";
import {User} from "../core/models/users/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portal';
  constructor(private usersService: UsersService) {
  }
  async ngOnInit(){

    await this.createUserAsync()

    this.usersService.getUsers()
      .subscribe(json  => {
        json.data
        console.log("getUsers")
        console.log(json.data)
      } )

    this.usersService.getUsersByID("eaa91b24-2d9d-4d96-8804-d30cac06276c")
      .subscribe(json => {
        json.data
        console.log("getUserByID")
        console.log(json.data)
      })

    this.usersService.deleteUser("eaa91b24-2d9d-4d96-8804-d30cac06276c")
      .subscribe(json => {
        json.data
        console.log("deleteUser")
        console.log(json.data)
      })
  }

  private createUserAsync(): Promise <any> {
      return new Promise((resolve,reject) => {
        const newUser: User ={
          "id": "eaa91b24-2d9d-4d96-8804-d30cac06276c",
          "nickname":  "test",
          "password":  "123456",
          "email":  "jg@jg.com",
          "birth_date":  "2020-10-10T00:00:00Z",
        }

        this.usersService.createUser(newUser)
          .subscribe(json => {
            resolve(json.data)
            console.log("getUserByID")
            console.log(json.data)
          })
      })
  }

}
