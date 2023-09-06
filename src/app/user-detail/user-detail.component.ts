import { Component, Input} from '@angular/core';
import { IUser } from '../IUser';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: `user-detail.component.html`,
  styles: [
  ]
})
export class UserDetailComponent {

  constructor(private userService: UserService){}

  @Input() userC: IUser|undefined;



  
}
