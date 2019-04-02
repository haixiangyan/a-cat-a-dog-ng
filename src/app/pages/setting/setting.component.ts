import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../services';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  user: User = {
    subId: '',
    type: 'CAT'
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  onChangeType(type) {
    const newUser: User = {
      ...this.user,
      type
    };
    // Set to service
    this.userService.setUser(newUser);
    // Set localStorage
    localStorage.setItem('user', JSON.stringify(newUser));
  }
}
