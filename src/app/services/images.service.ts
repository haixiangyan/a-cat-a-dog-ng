import {Injectable} from '@angular/core';
import {IGetImagesParams} from './index';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IImage} from '../env';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(private http: HttpClient) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getImages(params?: IGetImagesParams): Observable<IImage[]> {
    return this.http.get<IImage[]>('/images/search')
      .pipe(
        tap(() => console.log('fetch')),
        catchError(this.handleError<IImage[]>('getImages', []))
      );
  }
}
