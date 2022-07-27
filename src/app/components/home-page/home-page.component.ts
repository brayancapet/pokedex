import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Card';
import { PokeapiService } from 'src/app/pokeapi.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {



  apiResponse: boolean = false;

  pokemonObject:any;
  randomPokemonObject: any;
  evolutionChainObject:any;

  default: boolean = true;

  constructor(private pokeApi: PokeapiService) { }

  ngOnInit(){
    this.randomPokemonObject = this.pokeApi.getRandomPokemon();
  }

  showPokemon(pokemon: string){
    this.pokeApi.getPokemon(pokemon)
    .subscribe((data: any) => {
      this.pokemonObject = data;
      this.pokemonObject.default = true;
      this.evolutionChainObject = this.evolutionChain(this.pokemonObject.id);
    });

    this.apiResponse = true; 
  }

  toggleResultPokemonShiny(){
    this.pokemonObject.default == true ? this.pokemonObject.default = false : this.pokemonObject.default = true;
  }

  evolutionChain(pokemonID: number){
    this.pokeApi.getEvolutionChain(pokemonID)
    .subscribe((data: any) => {
      this.evolutionChainObject = data;
      console.log(this.evolutionChainObject);
    })
  }
}
