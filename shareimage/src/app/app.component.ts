import { Component, OnInit } from '@angular/core';
import { ImageShare } from './models/image-share.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  myImage!: ImageShare;
  myOtherImage!: ImageShare;
  myLastImage!: ImageShare;

  ngOnInit()
  {
    this.myImage = new ImageShare(
      "Archibald",
      "Photo de Archibald",
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0,
    )
    this.myOtherImage = new ImageShare(
      "Petit Panda",
      "Photo de panda",
      'https://cdn.pixabay.com/photo/2022/10/07/09/24/little-panda-7504633_960_720.jpg',
      new Date(),
      0,
    )
    this.myLastImage = new ImageShare(
      "Le bel oiseau",
      "Photo d'oiseau",
      'https://cdn.pixabay.com/photo/2016/12/13/22/25/bird-1905255_960_720.jpg',
      new Date(),
      0,
    )
  }
}
