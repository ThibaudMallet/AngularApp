import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageShare } from '../models/image-share.model';
import { ImageShareService } from '../services/image-share.service';

@Component({
  selector: 'app-single-image-share',
  templateUrl: './single-image-share.component.html',
  styleUrls: ['./single-image-share.component.scss']
})
export class SingleImageShareComponent implements OnInit {

  imageShare!: ImageShare;

  textButton!: string;

  constructor(private imageShareService: ImageShareService,
              private route: ActivatedRoute) {}

  ngOnInit()
  {
    this.textButton = 'Like !';
    const imageShareId = +this.route.snapshot.params['id'];
    this.imageShare = this.imageShareService.getImageShareById(imageShareId);
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
