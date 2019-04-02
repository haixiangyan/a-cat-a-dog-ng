import {Injectable} from '@angular/core';
import {IGetBreedsParams} from './index';
import {Api} from '../http';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  constructor(
    api: Api
  ) { }

  getBreeds(params?: IGetBreedsParams) {
  }

  getBreedById(breedId: string) {
  }
}
