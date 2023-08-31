import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`
})
export class AppComponent implements OnInit {
  title: string = 'pokemon-app';
  pokemonList: string[] = ["Pikachu", "Salamèche", "Lippoutu"];

  ngOnInit(): void {
    console.log("Je viens de charger");
    console.table(this.pokemonList);

    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: string): void {
    console.log("Vous avez sélectionnez ce pokemon : " + pokemon);
  }

}
