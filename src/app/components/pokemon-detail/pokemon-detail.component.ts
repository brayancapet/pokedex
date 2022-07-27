import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from 'src/app/pokeapi.service';
import { PokemonForm } from './forms.interface';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemonObject: any;
  formsObject: PokemonForm[] = [];
  id: number = 0;


  constructor(private route: ActivatedRoute, public pokeapi: PokeapiService) { 
    this.route.params.subscribe( params => {
      this.id = params['id'];
    });

    this.pokeapi.getPokemon(this.id).subscribe((data: any) => {
      this.pokemonObject = data;
      console.log(this.pokemonObject);
      this.haveForms(this.pokemonObject.forms);
    });

    
  }

  ngOnInit(): void {
  }

  haveForms(array: []){
    for(let i = 0; i < array.length -1; i++){
      this.pokeapi.getForm(this.pokemonObject.forms[i].url).subscribe((data: any) => {
        this.formsObject[i] = data;
      });
    }
    console.log(this.formsObject);
  }


}
