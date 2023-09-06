import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  fetchAll(){
    return this.http.get<IUser[]>(this.url);
  }


}
