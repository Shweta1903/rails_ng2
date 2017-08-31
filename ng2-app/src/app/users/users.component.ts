import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  constructor (private UsersService: UsersService) {}
  users = []

  ngOnInit() {
    this.UsersService.getUsers().
    subscribe(users => this.users = users)
  }

   delete(index){
    this.users.splice(index, 1);
  }
}