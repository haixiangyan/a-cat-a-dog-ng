import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User = {
    subId: '',
    type: 'CAT'
  };

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
  }
}
