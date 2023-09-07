import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../IUser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detailtooted',
  templateUrl: `user-detailooted.html`,
  styles: [
  ]
})
export class UserDetailtootedComponent implements OnInit{

  user: IUser|undefined;

  constructor(private userService: UserService, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params =>{
      this.userService.fetchById(params['id']).subscribe(data =>this.user = data)
      });
  }

  getById(id: number){
    
  }
}
