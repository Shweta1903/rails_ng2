import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
  export class UsersService {
  private url = 'api/users';

  constructor (private http: Http) {}

   getUsers() {
      return this.http.get(this.url)
     .map(res=> res.json())
   }

}
