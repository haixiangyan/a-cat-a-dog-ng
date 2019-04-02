import {Injectable} from '@angular/core';
import {IGetImagesParams} from './index';
import {Api} from '../http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(private api: Api) { }

  getImages(params?: IGetImagesParams) {
    return this.api.get('/images/search');
  }
}
