import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Card';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  cards: Card[] = [
    {
      name: 'charizard',
      id: 6,
      front_pic_normal: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      back_pic_normal: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png',
      shiny_pic_front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png',
      shiny_pic_back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png',
      types: ['fire', 'flying'],
      weight: 905,
      height: 17,
      attack: 84
    },
    {
      name: 'pikachu',
      id: 25,
      front_pic_normal: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      back_pic_normal: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
      shiny_pic_front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',
      shiny_pic_back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png',
      types: ['electric'],
      weight: 60,
      height: 4,
      attack: 55
    },
    {
      name: 'arceus',
      id: 493,
      front_pic_normal: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png',
      back_pic_normal: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/493.png',
      shiny_pic_front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/493.png',
      shiny_pic_back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/493.png',
      types: ['normal'],
      weight: 3200,
      height: 32,
      attack: 120
    },
    {
      name: 'ratata',
      id: 19,
      front_pic_normal: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
      back_pic_normal: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png',
      shiny_pic_front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/19.png',
      shiny_pic_back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/19.png',
      types: ['normal'],
      weight: 35,
      height: 3,
      attack: 56
    },
    {
      name: 'salameche',
      id: 5,
      front_pic_normal: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      back_pic_normal: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png',
      shiny_pic_front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png',
      shiny_pic_back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png',
      types: [],
      weight: 85,
      height: 6,
      attack: 52
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
