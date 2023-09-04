import { Component, OnInit  } from '@angular/core';
// import {POKEMONS} from '../mock-pokemons-list';
import { Pokemon } from '../pokemons';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: `card.component.html`,
})
export class CardComponent implements OnInit  {

  constructor (private pokemonService:PokemonService){

  }

  pokemonList: Pokemon[] = [];
  pokemonSelected: Pokemon;

  ngOnInit(): void {
    this.showByNumberPokemon(1);
    
    this.getPokemons();
    

    console.log("Je viens de charger");
    console.table(this.pokemonList);

    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: Pokemon){
    
    console.log(this.pokemonService.fetchOnePokemon(pokemon));
  }

  showByNumberPokemon(i: number) {
    console.log(this.pokemonService.fetchById(i));
  }

  getPokemons(){
    this.pokemonList = this.pokemonService.fetchAllPokemon();
    return this.pokemonList;
  }
}
