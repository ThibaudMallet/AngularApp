import { Component, OnInit, Input } from '@angular/core';
import { ImageShare } from '../models/image-share.model';
import { ImageShareService } from '../services/image-share.service';

@Component({
  selector: 'app-image-share',
  templateUrl: './image-share.component.html',
  styleUrls: ['./image-share.component.scss']
})
export class ImageShareComponent implements OnInit {
  @Input() imageShare!: ImageShare;

    textButton!: string;

    constructor(private imageShareService: ImageShareService) {}

  ngOnInit()
  {
    this.textButton = 'Like !';
  }

  onClickLike()
  {
    if (this.textButton === 'Like !') {
      this.imageShareService.likeImageShareById(this.imageShare.id, 'like');
      this.textButton = "Dislike !";
    } else {
      this.imageShareService.likeImageShareById(this.imageShare.id, 'dislike');
      this.textButton = 'Like !';
    }
  }
}
