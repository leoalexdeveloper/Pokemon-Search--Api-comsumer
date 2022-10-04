import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { RouterModule } from '@angular/router'

import { Routes } from "../router/routes"

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { HomeComponent } from "../components/Home/home.component"
import { PokemonListService } from "../components/PokemonList/pokemon-list.service"
import { Menu } from "../components/Menu/menu.component"
import { PokemonList } from "../components/PokemonList/pokemon-list.component"
import { PokemonCard } from "../components/PokemonList/PokemonCard/pokemon-card.component"
import { PokemonModal } from "../components/PokemonList/PokemonModal/pokemon-modal.component"
import { ScrollUpButton } from "../components/ScrollUpButton/scroll-up-button.component"
import { Utils } from "../utils/utils.service"

@NgModule({
  declarations: [
    AppComponent,
    Menu,
    HomeComponent,
    PokemonList,
    PokemonCard,
    PokemonModal,
    ScrollUpButton
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    FontAwesomeModule
  ],
  providers: [Utils, PokemonListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
