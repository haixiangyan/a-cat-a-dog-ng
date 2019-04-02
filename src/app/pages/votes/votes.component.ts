import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {ImagesService} from '../../services/images.service';
import {VotesService} from '../../services/votes.service';
import {UserService} from '../../services/user.service';
import {User} from '../../services';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {
  imagesWithVote = [];
  private user: User = {
    subId: '',
    type: 'CAT'
  };
  private isShowDialog = false;

  constructor(
    private userService: UserService,
    private votesService: VotesService,
    private imagesService: ImagesService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.user = this.userService.getUser();

    this.fetchImages();
  }

  closePopover() {
    this.isShowDialog = false;
  }

  fetchImages() {
    this.votesService.getVotes({
      sub_id: this.user.subId
    }).subscribe(async (votes) => {
      const imagesWithVote = [];

      for (const vote of votes) {
        const image = await this.imagesService.getImageById(vote.image_id);
        const imageWithVote = {...image, vote};
        imagesWithVote.push(imageWithVote);
      }

      this.imagesWithVote = imagesWithVote;
    });
  }

  deleteVote(voteId: string) {
    // Remove locally
    this.imagesWithVote = this.imagesWithVote.filter(image => image.vote.id !== voteId);
    // Send request to remove
    this.votesService.deleteVote(voteId);
    // Close dialog
    this.isShowDialog = false;
    this.message.success('Remove successfully');
  }
}
