import {Injectable} from '@angular/core';
import {IGetBreedsParams} from './index';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  constructor() { }

  getBreeds(params?: IGetBreedsParams) {
  }

  getBreedById(breedId: string) {
    return axios
      .get(`/breeds/${breedId}`)
      .then((response: AxiosResponse) => response.data);
  }
}
