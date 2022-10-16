import { Injectable } from "@angular/core";
import { ImageShare } from "../models/image-share.model";

@Injectable({
  providedIn : 'root'
})
export class ImageShareService {
  imageShare: ImageShare[] = [
    {
      title: "Archibald",
      description: "Photo de Archibald",
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      likes: 140,
      location: 'Ronquerolles',
    },
    {
      title: "Petit Panda",
      description: "Photo de panda",
      imageUrl: 'https://cdn.pixabay.com/photo/2022/10/07/09/24/little-panda-7504633_960_720.jpg',
      createdDate: new Date(),
      likes: 60,
      location: 'Chambly',
    },
    {
      title: "Le bel oiseau",
      description: "Photo d'oiseau",
      imageUrl: 'https://cdn.pixabay.com/photo/2016/12/13/22/25/bird-1905255_960_720.jpg',
      createdDate: new Date(),
      likes: 320,
    },
  ]
}
