import {Injectable} from '@angular/core';
import {IGetImagesParams} from './index';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IImage} from '../env';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(private http: HttpClient) {
  }

  getImages(params?: IGetImagesParams): Observable<IImage[]> {
    return this.http.get<IImage[]>('/images/search', {params});
  }

  getImageById(imageId: string): Observable<IImage> {
    return this.http.get<IImage>(`/images/${imageId}`);
  }

  uploadImage(data: FormData): Observable<any> {
    return this.http.post(`/images/upload`, {
      body: data,
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data'
      })
    });
  }
  analyzeImage(imageId: string): Observable<any> {
    return this.http.get<any>(`/images/${imageId}/analysis`);
  }
}

