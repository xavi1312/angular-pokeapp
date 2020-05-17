import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokedexNumber',
})
export class PokedexNumberPipe implements PipeTransform {
  transform(pokedexNumber: number, ...args: unknown[]): string {
    if (pokedexNumber < 10) return 'N.º00' + pokedexNumber.toString();
    if (pokedexNumber < 100) return 'N.º0' + pokedexNumber.toString();

    return 'N.º' + pokedexNumber.toString();
  }
}
