import {Component, OnInit} from '@angular/core';
import {ImagesService} from '../../services/images.service';
import {IImage} from '../../env';
import {VotesService} from '../../services/votes.service';
import {FavouritesService} from '../../services/favourites.service';
import {UserService} from '../../services/user.service';
import {User} from '../../services';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User = {
    subId: '',
    type: 'CAT'
  };
  images: IImage[] = [];

  constructor(
    private message: NzMessageService,
    private userService: UserService,
    private votesService: VotesService,
    private favouritesService: FavouritesService,
    private imagesService: ImagesService
  ) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.updateImage();
  }

  vote() {
    this.votesService.addVote({
      sub_id: this.user.subId,
      image_id: this.images[0].id,
      value: 1
    }).subscribe(() => {
      this.message.success('Voted it');
    });
  }

  favourite() {
    this.favouritesService.addFavourite({
      sub_id: this.user.subId,
      image_id: this.images[0].id
    }).subscribe(() => {
      this.message.success('Added to favourite');
    });
  }

  updateImage() {
    // Update image
    this.imagesService.getImages()
      .subscribe(images => {
        this.images = images;

        // Analyze image
        this.imagesService.analyzeImage(images[0].id);
      });
  }

  onClickUpload() {
    // @ts-ignore
    document.querySelector('#new-file').click();
  }

  onChangeImage(event) {
    const data = new FormData();
    data.append('sub_id', this.user.subId);
    data.append('file', event.target.files[0]);
    this.imagesService.uploadImage(data)
      .then((response) => {
        // Error
        if (response.status.toString().startsWith('2')) {
          this.message.success('Upload successfully');
        } else {
          this.message.error(response.data.message);
        }
      });
  }
}
