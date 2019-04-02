import {Injectable} from '@angular/core';

import {User} from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin(): boolean {
    const userStr = localStorage.getItem('user');
    console.log(userStr);
    if (!userStr) {
      return false;
    }
    const user: User = JSON.parse(userStr);
    console.log(user);
    return !(!user.subId || !user.type);
  }
}
