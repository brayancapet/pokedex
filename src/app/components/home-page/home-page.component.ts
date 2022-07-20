import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Card';
import { PokeapiService } from 'src/app/pokeapi.service';

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
      attack: 84,
      default: true,
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
      attack: 55,
      default: true,
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
      attack: 120,
      default: true,
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
      attack: 56,
      default: true,
    },
    {
      name: 'salameche',
      id: 5,
      front_pic_normal: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      back_pic_normal: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png',
      shiny_pic_front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png',
      shiny_pic_back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png',
      types: ['fire'],
      weight: 85,
      height: 6,
      attack: 52,
      default: true,
    },
  ];

  default: boolean = true;

  constructor(private pokeApi: PokeapiService) { }

  ngOnInit(){
    this.pokeApi.getRandomPokemon('dialga');
  }
  
  toggleShiny(id: number){
    for(let x = 0; x < this.cards.length; x++){
      if(id == this.cards[x].id){
        this.cards[x].default == true ? this.cards[x].default = false : this.cards[x].default = true;
      } else {
        console.log('continuer');
      }
    }
  }

  
}
