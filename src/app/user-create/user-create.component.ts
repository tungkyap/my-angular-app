import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss'
})
export class UserCreateComponent {
  user: User = { username: '', email: '', password: '' }; // Initialize according to your User model

  constructor(private userService: UserService, private router: Router) {}

  createUser() {
    this.userService.createUser(this.user).subscribe(() => {
      this.router.navigate(['/users']); // Redirect to the user list
    });
  }
}
