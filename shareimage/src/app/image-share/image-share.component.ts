import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-share',
  templateUrl: './image-share.component.html',
  styleUrls: ['./image-share.component.scss']
})
export class ImageShareComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  likes!: number;
  imageUrl!: string;

  ngOnInit()
  {
    this.title = "Archibald";
    this.description = "Photo de Archibald";
    this.createdDate = new Date();
    this.likes = 6;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }
}
