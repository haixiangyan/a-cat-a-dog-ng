import {Injectable} from '@angular/core';
import {User} from './index';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = {
    subId: '',
    type: 'CAT'
  };

  constructor() {
    this.initUser();
  }

  private initUser() {
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      return;
    }
    const user = JSON.parse(userStr);
    if (!user.subId || !user.type) {
      return;
    }
    this.user = user;
  }

  private getUser(): User {
    return this.user;
  }

  private setUser(user: User): void {
    this.user = user;
  }
}
