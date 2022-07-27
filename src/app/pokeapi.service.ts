import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  url: string = 'https://pokeapi.co/api/v2/';
  randomNumbers: number[] = [];
  randomPokemons: object[] = [];

  constructor(private http: HttpClient) { }

  // Return an object about a wanted pokemon
  getPokemon(pokemon: any){
    return this.http.get(this.url + "pokemon/" + pokemon);
  }

  // Creates an array with 6 pokemon's informations as objects, which is used to make the 6 cards in the home page
  getRandomPokemon(){
      for(let i = 0; i < 6; i++){
        let number = Math.floor(Math.random() * 905);
        this.http.get(this.url + "pokemon/" + number).subscribe((data: any) => {
        this.randomPokemons[i] = data;
      });
      }

      return this.randomPokemons;
  }

  getEvolutionChain(pokemonID: number){
    return this.http.get(this.url + "evolution-chain/" + pokemonID);
  }

  getForm(url: string){
    return this.http.get(url);
  }


}
