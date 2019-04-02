import {Injectable} from '@angular/core';
import {IAddFavouriteData, IGetFavouritesParams} from './index';
import {HttpClient} from '@angular/common/http';
import {IFavourite, IFavouritesElement} from '../env';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  constructor(private http: HttpClient) {
  }

  getFavourites(params: IGetFavouritesParams): Observable<IFavouritesElement[]> {
    return this.http.get<IFavouritesElement[]>('/favourites', {params});
  }

  addFavourite(data: IAddFavouriteData): Observable<any> {
    return this.http.post('/favourites', data);
  }

  deleteFavourite(favouriteId: string): Observable<any> {
    return this.http.delete(`/favourites/${favouriteId}`);
  }
}
