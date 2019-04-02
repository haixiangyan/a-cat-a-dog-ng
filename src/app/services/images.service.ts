import {Injectable} from '@angular/core';
import {IGetImagesParams} from './index';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IImage} from '../env';
import axios from 'axios';
import {UserService} from './user.service';
import {catKey, dogKey} from '../http/secret';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(private http: HttpClient, private userService: UserService) {
  }

  getImages(params?: IGetImagesParams): Observable<IImage[]> {
    return this.http.get<IImage[]>('/images/search', {params});
  }

  getImageById(imageId: string): Observable<IImage> {
    return this.http.get<IImage>(`/images/${imageId}`);
  }

  uploadImage(data) {
    const baseUrlMapper = {
      CAT: 'https://api.thecatapi.com/v1',
      DOG: 'https://api.thedogapi.com/v1'
    };
    const keyMapper = {
      CAT: catKey,
      DOG: dogKey
    };
    return axios
      .post(`${baseUrlMapper[this.userService.user.type]}/images/upload`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-api-key': keyMapper[this.userService.user.type]
        }
      })
      .then((response) => response)
      .catch((error) => error.response);
  }
  analyzeImage(imageId: string): Observable<any> {
    return this.http.get<any>(`/images/${imageId}/analysis`);
  }
}

