import { Component, OnInit } from '@angular/core';
import {User} from '../../services';
import {UserService} from '../../services/user.service';
import {ImagesService} from '../../services/images.service';
import {NzMessageService} from 'ng-zorro-antd';
import {FavouritesService} from '../../services/favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  imagesWithFavourite = [];
  private user: User = {
    subId: '',
    type: 'CAT'
  };
  private isShowDialog = false;

  constructor(
    private userService: UserService,
    private favouritesService: FavouritesService,
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
    this.favouritesService.getFavourites({
      sub_id: this.user.subId
    }).subscribe(async (favourites) => {
      const imagesWithFavourite = [];

      for (const favourite of favourites) {
        const image = await this.imagesService.getImageById(favourite.image_id);
        const imageWithFavourite = {...image, favourite};
        imagesWithFavourite.push(imageWithFavourite);
      }

      this.imagesWithFavourite = imagesWithFavourite;
    });
  }

  deleteFavourite(favouriteId: string) {
    // Remove locally
    this.imagesWithFavourite = this.imagesWithFavourite.filter(image => image.favourite.id !== favouriteId);
    // Send request to remove
    this.favouritesService.deleteFavourite(favouriteId);
    // Close dialog
    this.isShowDialog = false;
    this.message.success('Remove successfully');
  }
}
