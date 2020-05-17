import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { LoggerService } from '../logger/logger.service';
import { IPokemon } from 'src/app/interfaces/ipokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private urlBase: string = 'http://localhost:3000/pokemon';
  constructor(private http: HttpClient, private logger: LoggerService) {}

  getPokemons(): Observable<IPokemon[]> {
    return this.http.get<IPokemon[]>(this.urlBase).pipe(
      tap((_) => this.logger.log('Pokemons feched')),
      catchError(this.handleError<IPokemon[]>('getPokemons', []))
    );
  }
  getPokemon(id: string): Observable<IPokemon> {
    const url = `${this.urlBase}/${id}`;

    return this.http.get<IPokemon>(url).pipe(
      tap((_) => this.logger.log(`Pokemon feched, id = ${id}`)),
      catchError(this.handleError<IPokemon>(`getPokemon id = ${id}`))
    );
  }
  getPokemonsBetween(start: number, end: number): Observable<IPokemon[]> {
    const url = `${this.urlBase}/between/?start=${start}&end=${end}`;

    return this.http.get<IPokemon[]>(url).pipe(
      tap((_) => this.logger.log(`Pokemon feched, start=${start} end=${end}`)),
      catchError(
        this.handleError<IPokemon[]>(
          `getPokemonsBetween start=${start} end=${end}`,
          []
        )
      )
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      this.logger.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.logger.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
