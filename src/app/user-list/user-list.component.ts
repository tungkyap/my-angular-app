import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  listUsers: Array<User> = [];

  constructor(
    private router: Router,
    private userSvc: UserService,
  ) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.userSvc.getUsers().subscribe(response => {
      this.listUsers = response;
    });
  }

  onUserCreate() {
    this.router.navigate([this.router.url + '/create']);
  }

  onEditClick(value: any) {

  }

  onDeleteClick(value: any) {
    this.userSvc.deleteUser(value.id).subscribe(response => {
      window.alert('Delete success!');
      this.getAllUser();
    });
  }
}
