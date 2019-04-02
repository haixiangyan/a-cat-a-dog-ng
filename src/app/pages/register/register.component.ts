import {Component, OnInit} from '@angular/core';
import {User} from '../../services';
import {UserService} from '../../services/user.service';
import {FormGroup} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';

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
  validateForm: FormGroup;

  constructor(private userService: UserService, private message: NzMessageService) {
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
  }
}
