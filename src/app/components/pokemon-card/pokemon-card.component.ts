import { Component, OnInit, Input } from '@angular/core';
import { IPokemon } from 'src/app/interfaces/ipokemon';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  constructor() {}

  @Input() pokemon: IPokemon;
  ngOnInit(): void {}
}
