import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../IUser';

@Component({
  selector: 'app-user',
  templateUrl: `user.component.html`,
  styles: [
  ]
})
export class UserComponent implements OnInit{

  userP: IUser|undefined;
  users: IUser[] = [];
  constructor(private userService: UserService){}

  ngOnInit(){
    this.getUser();
    console.log('marche');

    this.fetchOneUser(this.userP);

  }

  getUser(){
    this.userService.fetchAll().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }

  fetchOneUser(user: IUser|undefined){

    this.userP = user;
  }

}
