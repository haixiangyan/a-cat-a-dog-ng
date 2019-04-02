import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAddVoteData, IGetVotesParams} from './index';

@Injectable({
  providedIn: 'root'
})
export class VotesService {
  constructor(private http: HttpClient) {
  }

  getVotes(params: IGetVotesParams) {
    return this.http.get('/votes', {params});
  }

  addVote(data: IAddVoteData) {
    return this.http.post('/votes', {
      body: data
    });
  }

  deleteVote(voteId: string) {
    return this.http.delete(`/votes/${voteId}`);
  }
}
