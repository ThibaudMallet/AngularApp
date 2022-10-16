import { Injectable } from "@angular/core";
import { ImageShare } from "../models/image-share.model";

@Injectable({
  providedIn : 'root'
})
export class ImageShareService {
  imageShare: ImageShare[] = [
    {
      id: 1,
      title: "Archibald",
      description: "Photo de Archibald",
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      likes: 140,
      location: 'Ronquerolles',
    },
    {
      id: 2,
      title: "Petit Panda",
      description: "Photo de panda",
      imageUrl: 'https://cdn.pixabay.com/photo/2022/10/07/09/24/little-panda-7504633_960_720.jpg',
      createdDate: new Date(),
      likes: 60,
      location: 'Chambly',
    },
    {
      id: 3,
      title: "Le bel oiseau",
      description: "Photo d'oiseau",
      imageUrl: 'https://cdn.pixabay.com/photo/2016/12/13/22/25/bird-1905255_960_720.jpg',
      createdDate: new Date(),
      likes: 320,
    },
  ]

  getAllImageShare(): ImageShare[] {
    return this.imageShare;
  }

  getImageShareById(imageShareId: number): ImageShare {
    const imageShare = this.imageShare.find(imageShare => imageShare.id === imageShareId);
    if( !imageShare) {
      throw new Error('ImageShare not found!');
    } else {
      return imageShare;
    }
  }

  likeImageShareById(imageShareId: number, likeType: 'like' | 'dislike'): void {
    const imageShare = this.getImageShareById(imageShareId);
    likeType === 'like' ? imageShare.likes++ : imageShare.likes--;
  }
}
