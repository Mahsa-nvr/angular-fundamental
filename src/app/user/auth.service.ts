import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Subject, Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor( private http: HttpClient) {}
  loginUser(userName: string, password: string){

    const loginInfo = { username: userName, password};
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

     // tslint:disable-next-line: align
     return this.http.post('http://localhost:8808/api/login', loginInfo, options)
    .pipe(tap(data => {
      this.currentUser = <IUser>data['user'];
    }))
    .pipe(catchError(err => {
      return of (false);
    }) );
  //  this.currentUser = {
  //    id: 1,
  //    userName: userName,
  //    firstName: 'John',
  //    lastName: 'Papa'
  //  }


}

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http.get('http://localhost:8808/api/currentIdentity')
    .pipe(tap(data => {
      if (data instanceof Object){
        this.currentUser = <IUser> data;
       }
    }));
///.subscribe ---> this method isnt work in this code;
  }

  updateCurrentUser(firstName: string, lastName: string){
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

    return this.http.put(`http://localhost:8808/api/users/${this.currentUser.id}`, this.currentUser, options);

  }

  logout() {
    this.currentUser = undefined;
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.post('http://localhost:8808/api/logout', {}, options );
  }


}
