import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../../services/images.service';
import {IImage} from '../../env';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: IImage[] = [];

  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
    this.imagesService.getImages()
      .subscribe(images => this.images = images);
  }
}
