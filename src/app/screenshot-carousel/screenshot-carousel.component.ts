import { ScreenshotRepoService } from '../screenshot-repo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screenshot-carousel',
  templateUrl: './screenshot-carousel.component.html'
})
export class ScreenshotCarouselComponent implements OnInit{
  images;
    constructor(
      private screenshotRepoService: ScreenshotRepoService
  ) { }

  ngOnInit(){
    this.images = this.screenshotRepoService.getPhotos();
  }

}
