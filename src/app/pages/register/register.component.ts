import {Component, OnInit} from '@angular/core';
import {User} from '../../services';
import {UserService} from '../../services/user.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = {
    subId: '',
    type: 'CAT'
  };

  constructor(
    private userService: UserService,
    private message: NzMessageService,
    private router: Router
  ) {
    this.user = userService.getUser();
  }

  ngOnInit() {
  }

  getStared() {
    if (this.user.subId === '' || this.user.subId === 'undefined' || this.user.subId === 'null') {
      this.message.error('Invalid user name!');
      return;
    }
    // Update local storage
    localStorage.setItem('user', JSON.stringify(this.user));
    // Update user service
    this.userService.setUser(this.user);
    // Jump to home
    this.message.success('Huwa');
    this.router.navigate(['/home']);
  }
}
