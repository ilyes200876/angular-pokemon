import { Component, Input, OnInit} from '@angular/core';
import { IUser } from '../IUser';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: `user-detail.component.html`,
  styles: [
  ]
})
export class UserDetailComponent implements OnInit{

  

  @Input() userC: IUser|undefined;

  ngOnInit(): void {
    // this.getById(0);

  }

  

  
}
