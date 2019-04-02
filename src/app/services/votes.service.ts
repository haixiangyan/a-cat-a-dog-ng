import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAddVoteData, IGetVotesParams} from './index';
import {Observable} from 'rxjs';
import {IVotesElement} from '../env';

@Injectable({
  providedIn: 'root'
})
export class VotesService {
  constructor(private http: HttpClient) {
  }

  getVotes(params: IGetVotesParams): Observable<IVotesElement[]> {
    return this.http.get<IVotesElement[]>('/votes', {params});
  }

  addVote(data: IAddVoteData): Observable<any> {
    return this.http.post('/votes', data);
  }

  deleteVote(voteId: string): Observable<any> {
    return this.http.delete(`/votes/${voteId}`);
  }
}
