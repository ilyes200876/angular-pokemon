import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons-list';
import { Pokemon } from './pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  fetchAllPokemon( ){
    return POKEMONS;
  }

  fetchByIndex(i: number){
    return POKEMONS[i - 1].name;
  }

  fetchOnePokemon(pokemon: Pokemon){
    return("Vous avez sélectionnez ce pokemon : " + pokemon.name);
  }
  fetchById(i: number): Pokemon|undefined{
    return POKEMONS[i];
  }

}
