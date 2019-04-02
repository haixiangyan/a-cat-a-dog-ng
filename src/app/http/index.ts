import {HttpClient, HttpInterceptor, HttpHeaders, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS} from '@angular/common/http';
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
  private keyMapper = {
    CAT: catKey,
    DOG: dogKey
  };

  constructor(private userService: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.userService.getUser();
    // Upload
    if (req.url.indexOf('upload') > 0) {
      const uploadReq = req.clone({
        url: `${this.baseUrlMapper[user.type]}${req.url}`,
        headers: new HttpHeaders({
          'Content-Type': 'multipart/form-data',
          'x-api-key': this.keyMapper[user.type]
        })
      });
      return next.handle(uploadReq);
    }
    const jsonReq = req.clone({
      url: `${this.baseUrlMapper[user.type]}${req.url}`,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': this.keyMapper[user.type]
      })
    });
    return next.handle(jsonReq);
  }
}
