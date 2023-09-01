import { Component, OnInit  } from '@angular/core';
import {POKEMONS} from '../mock-pokemons-list';
import { Pokemon } from '../pokemons';

@Component({
  selector: 'app-card',
  templateUrl: `card.component.html`,
})
export class CardComponent implements OnInit  {

  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon;

  ngOnInit(): void {
    console.log("Je viens de charger");
    console.table(this.pokemonList);

    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: Pokemon): void {
    console.log("Vous avez sélectionnez ce pokemon : " + pokemon.name);
  }

  showByNumberPokemon(i: number): void {
    this.pokemonSelected = this.pokemonList[i-1];
    console.log("Vous avez recherchez : " + this.pokemonSelected.name);
  }

}
