import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/interfaces/ipokemon';

@Component({
  selector: 'pokemon-card-list',
  templateUrl: './pokemon-card-list.component.html',
  styleUrls: ['./pokemon-card-list.component.scss'],
})
export class PokemonCardListComponent implements OnInit {
  constructor() {}

  pokeList: Array<IPokemon> = [
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
    {
      types: ['water'],
      _id: '5ebdba78138550456c2ea37b',
      name: 'squirtle',
      pokedexNumber: '007',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
    },
    {
      types: ['water'],
      _id: '5ebdba78138550456c2ea37c',
      name: 'wartortle',
      pokedexNumber: '008',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png',
    },
    {
      types: ['water'],
      _id: '5ebdba78138550456c2ea37d',
      name: 'blastoise',
      pokedexNumber: '009',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png',
    },
    {
      types: ['bug'],
      _id: '5ebdba78138550456c2ea37e',
      name: 'caterpie',
      pokedexNumber: '010',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png',
    },
    {
      types: ['bug'],
      _id: '5ebdba78138550456c2ea37f',
      name: 'metapod',
      pokedexNumber: '011',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png',
    },
    {
      types: ['flying', 'bug'],
      _id: '5ebdba78138550456c2ea380',
      name: 'butterfree',
      pokedexNumber: '012',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png',
    },
    {
      types: ['poison', 'bug'],
      _id: '5ebdba78138550456c2ea381',
      name: 'weedle',
      pokedexNumber: '013',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png',
    },
    {
      types: ['poison', 'bug'],
      _id: '5ebdba78138550456c2ea382',
      name: 'kakuna',
      pokedexNumber: '014',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png',
    },
    {
      types: ['poison', 'bug'],
      _id: '5ebdba78138550456c2ea383',
      name: 'beedrill',
      pokedexNumber: '015',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png',
    },
    {
      types: ['flying', 'normal'],
      _id: '5ebdba78138550456c2ea384',
      name: 'pidgey',
      pokedexNumber: '016',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png',
    },
    {
      types: ['flying', 'normal'],
      _id: '5ebdba78138550456c2ea385',
      name: 'pidgeotto',
      pokedexNumber: '017',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png',
    },
    {
      types: ['flying', 'normal'],
      _id: '5ebdba78138550456c2ea386',
      name: 'pidgeot',
      pokedexNumber: '018',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png',
    },
    {
      types: ['normal'],
      _id: '5ebdba78138550456c2ea387',
      name: 'rattata',
      pokedexNumber: '019',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png',
    },
    {
      types: ['normal'],
      _id: '5ebdba78138550456c2ea388',
      name: 'raticate',
      pokedexNumber: '020',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png',
    },
    {
      types: ['flying', 'normal'],
      _id: '5ebdba78138550456c2ea389',
      name: 'spearow',
      pokedexNumber: '021',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png',
    },
    {
      types: ['flying', 'normal'],
      _id: '5ebdba78138550456c2ea38a',
      name: 'fearow',
      pokedexNumber: '022',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/022.png',
    },
    {
      types: ['poison'],
      _id: '5ebdba78138550456c2ea38b',
      name: 'ekans',
      pokedexNumber: '023',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png',
    },
    {
      types: ['poison'],
      _id: '5ebdba78138550456c2ea38c',
      name: 'arbok',
      pokedexNumber: '024',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/024.png',
    },
    {
      types: ['electric'],
      _id: '5ebdba78138550456c2ea38d',
      name: 'pikachu',
      pokedexNumber: '025',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png',
    },
    {
      types: ['electric'],
      _id: '5ebdba78138550456c2ea38e',
      name: 'raichu',
      pokedexNumber: '026',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png',
    },
    {
      types: ['ground'],
      _id: '5ebdba78138550456c2ea38f',
      name: 'sandshrew',
      pokedexNumber: '027',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png',
    },
    {
      types: ['ground'],
      _id: '5ebdba78138550456c2ea390',
      name: 'sandslash',
      pokedexNumber: '028',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/028.png',
    },
    {
      types: ['poison'],
      _id: '5ebdba78138550456c2ea391',
      name: 'nidoran-f',
      pokedexNumber: '029',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/029.png',
    },
    {
      types: ['poison'],
      _id: '5ebdba78138550456c2ea392',
      name: 'nidorina',
      pokedexNumber: '030',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/030.png',
    },
    {
      types: ['ground', 'poison'],
      _id: '5ebdba78138550456c2ea393',
      name: 'nidoqueen',
      pokedexNumber: '031',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/031.png',
    },
    {
      types: ['poison'],
      _id: '5ebdba78138550456c2ea394',
      name: 'nidoran-m',
      pokedexNumber: '032',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/032.png',
    },
    {
      types: ['poison'],
      _id: '5ebdba78138550456c2ea395',
      name: 'nidorino',
      pokedexNumber: '033',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/033.png',
    },
    {
      types: ['ground', 'poison'],
      _id: '5ebdba78138550456c2ea396',
      name: 'nidoking',
      pokedexNumber: '034',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/034.png',
    },
    {
      types: ['fairy'],
      _id: '5ebdba78138550456c2ea397',
      name: 'clefairy',
      pokedexNumber: '035',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png',
    },
    {
      types: ['fairy'],
      _id: '5ebdba78138550456c2ea398',
      name: 'clefable',
      pokedexNumber: '036',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/036.png',
    },
    {
      types: ['fire'],
      _id: '5ebdba78138550456c2ea399',
      name: 'vulpix',
      pokedexNumber: '037',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png',
    },
    {
      types: ['fire'],
      _id: '5ebdba78138550456c2ea39a',
      name: 'ninetales',
      pokedexNumber: '038',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png',
    },
    {
      types: ['fairy', 'normal'],
      _id: '5ebdba78138550456c2ea39b',
      name: 'jigglypuff',
      pokedexNumber: '039',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png',
    },
    {
      types: ['fairy', 'normal'],
      _id: '5ebdba78138550456c2ea39c',
      name: 'wigglytuff',
      pokedexNumber: '040',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/040.png',
    },
    {
      types: ['flying', 'poison'],
      _id: '5ebdba78138550456c2ea39d',
      name: 'zubat',
      pokedexNumber: '041',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/041.png',
    },
    {
      types: ['flying', 'poison'],
      _id: '5ebdba78138550456c2ea39e',
      name: 'golbat',
      pokedexNumber: '042',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/042.png',
    },
  ];
  ngOnInit(): void {}
}
