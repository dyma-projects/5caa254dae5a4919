import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  imageLink: string;
  luciferImage: string = 'https://avatarfiles.alphacoders.com/184/thumb-184206.jpg';
  author: string = 'Edsger Dijkstra = la variable interpolée'
  
  constructor() { 
    this.imageLink = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDQZQjH3A3tI1vrmaThKgoRc3Wx0BTSFLtVhpNNW_aTwkoNfIm';
  }
  
  switchImageEnter(event: Event): void{
    console.log(event);
    this.luciferImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQirIDlO8V4z-CxQPpq44mLyEDel8ae101qarxfk4ZOrpeHA9PF';
  }

  switchImageLeave(event: Event): void{
    console.log(event);
    this.luciferImage = 'https://avatarfiles.alphacoders.com/184/thumb-184206.jpg';
  }

  ngOnInit() {
  }

}
