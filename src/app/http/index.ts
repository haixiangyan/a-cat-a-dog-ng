import {HttpClient, HttpInterceptor, HttpHeaders, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';
import {catKey, dogKey} from './secret';

@Injectable()
export class Api implements HttpInterceptor {
  private baseUrlMapper = {
    CAT: 'https://api.thecatapi.com/v1',
    DOG: 'https://api.thedogapi.com/v1'
  };
  private headerMapper = {
    CAT: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': catKey,
    }),
    DOG: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': dogKey,
    })
  };

  constructor(private userService: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.userService.getUser();
    const apiReq = req.clone({
      url: this.baseUrlMapper[user.type],
      headers: this.headerMapper[user.type]
    });
    return next.handle(apiReq);
  }
}
