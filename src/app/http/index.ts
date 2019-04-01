import {HttpClient, HttpInterceptor, HttpHeaders, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const baseUrl = document.getElementsByTagName('base')[0].href;
    const apiReq = req.clone({ url: `${baseUrl}${req.url}` });
    return next.handle(apiReq);
  }
}
