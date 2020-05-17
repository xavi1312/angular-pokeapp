import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonCardListComponent } from './components/pokemon-card-list/pokemon-card-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { TypesListComponent } from './components/types-list/types-list.component';
import { TypesComponent } from './components/types/types.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardListComponent,
    PokemonCardComponent,
    TypesListComponent,
    TypesComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
