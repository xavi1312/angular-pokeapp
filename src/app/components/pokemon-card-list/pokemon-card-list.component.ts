import { Component, OnInit, HostListener } from '@angular/core';
import { IPokemon } from 'src/app/interfaces/ipokemon';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'pokemon-card-list',
  templateUrl: './pokemon-card-list.component.html',
  styleUrls: ['./pokemon-card-list.component.scss'],
})
export class PokemonCardListComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  // Pokemons showing
  pokeList: Array<IPokemon> = [];
  index: number = 0;
  increment: number = 40;
  limit: number;

  // Scroll
  isPokeListUpdated = false;

  ngOnInit(): void {
    this.pokemonService
      .getPokemons()
      .subscribe((pokemons) => (this.limit = pokemons.length));
    this.morePokemons();
  }
  morePokemons() {
    this.isPokeListUpdated = false;
    if (this.index > this.limit) return;

    this.pokemonService
      .getPokemonsBetween(this.index, this.index + this.increment)
      .subscribe((pokemons) => {
        this.pokeList = this.pokeList.concat(pokemons);
        this.isPokeListUpdated = true;
        this.index += this.increment;
      });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.isPokeListUpdated) {
      let posScroll = window.innerHeight + window.scrollY;
      let pageHeight = document.body.offsetHeight;
      if (posScroll >= pageHeight) {
        this.morePokemons();
      }
    }
  }
}
