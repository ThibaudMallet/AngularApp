import { Component, OnInit } from '@angular/core';
import { ImageShare } from '../models/image-share.model';
import { ImageShareService } from '../services/image-share.service';

@Component({
  selector: 'app-image-share-list',
  templateUrl: './image-share-list.component.html',
  styleUrls: ['./image-share-list.component.scss']
})
export class ImageShareListComponent implements OnInit {

  imageShare!: ImageShare[];

  constructor(private ImageShareService: ImageShareService) { }

  ngOnInit(): void {
    this.imageShare = this.ImageShareService.imageShare
  }

}
