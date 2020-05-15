import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card-list',
  templateUrl: './pokemon-card-list.component.html',
  styleUrls: ['./pokemon-card-list.component.scss'],
})
export class PokemonCardListComponent implements OnInit {
  constructor() {}

  pokeList: any = [
    {
      types: ['poison', 'grass'],
      _id: '5ebdb98a138550456c2ea375',
      name: 'bulbasaur',
      pokedexNumber: '001',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    },
    {
      types: ['poison', 'grass'],
      _id: '5ebdb98a138550456c2ea376',
      name: 'ivysaur',
      pokedexNumber: '002',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
    },
    {
      types: ['poison', 'grass'],
      _id: '5ebdb98a138550456c2ea377',
      name: 'venusaur',
      pokedexNumber: '003',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
    },
    {
      types: ['fire'],
      _id: '5ebdba78138550456c2ea378',
      name: 'charmander',
      pokedexNumber: '004',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
    },
    {
      types: ['fire'],
      _id: '5ebdba78138550456c2ea379',
      name: 'charmeleon',
      pokedexNumber: '005',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
    },
    {
      types: ['flying', 'fire'],
      _id: '5ebdba78138550456c2ea37a',
      name: 'charizard',
      pokedexNumber: '006',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
    },
  ];
  ngOnInit(): void {}
}
