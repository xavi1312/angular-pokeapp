import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonCardListComponent } from './components/pokemon-card-list/pokemon-card-list/pokemon-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
