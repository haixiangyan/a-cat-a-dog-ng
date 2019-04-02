import {Injectable} from '@angular/core';
import {IAddFavouriteData, IGetFavouritesParams} from './index';
import {HttpClient} from '@angular/common/http';
import {IFavourite} from '../env';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  constructor(private http: HttpClient) {
  }

  getFavourites(params: IGetFavouritesParams) {
    return this.http.get<IFavourite[]>('/favourites', {params});
  }

  addFavourite(data: IAddFavouriteData) {
    return this.http.post('/favourites', {body: data});
  }

  deleteFavourite(favouriteId: string) {
    return this.http.delete(`/favourites/${favouriteId}`);
  }
}
