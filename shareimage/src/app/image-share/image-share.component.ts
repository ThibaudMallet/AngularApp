import { Component, OnInit, Input } from '@angular/core';
import { ImageShare } from '../models/image-share.model';

@Component({
  selector: 'app-image-share',
  templateUrl: './image-share.component.html',
  styleUrls: ['./image-share.component.scss']
})
export class ImageShareComponent implements OnInit {
  @Input() imageShare!: ImageShare;

  title!: string;
  description!: string;
  createdDate!: Date;
  likes!: number;
  imageUrl!: string;
  textButton!: string;

  ngOnInit()
  {
    this.textButton = 'Like !';
  }

  onClickLike()
  {
    if (this.textButton === 'Like !') {
      this.imageShare.likes++;
      this.textButton = "Dislike !";
    } else {
      this.imageShare.likes--;
      this.textButton = 'Like !';
    }
  }
}
